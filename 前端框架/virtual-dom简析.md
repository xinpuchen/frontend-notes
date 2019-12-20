# virtual-dom 简析

virtual dom(后文简称 v-dom)，是为了前端方面的 DOM 操作优化，而生的一个产物

程墨老师形容过 v-dom 和普通 dom 操作的区别，就是两个装修工人，同时进行装修工作，假如这时候，需要在这面墙上开一个洞

- dom 工人选择将这面墙拆掉，再建一个有洞的墙
- v-dom 工人将工程前后，墙的状态比对以后，发现只多了一个洞，所以只在墙上打一个洞，就完工了

工作量大小的差别不言而喻，当然，这只是一个形象的比喻，具体的优化原理可以看我的这篇文章——[DOM 操作为什么这么耗时](../HTML/DOM操作为什么耗时.md)

## v-dom 的工作原理

这里用 preact 的 v-dom 原理，进行一个解释

### v-dom 从何而来

我们在编写 react 的时候，一般都是通过 JSX 来编写的，这可以让我们的代码更加简洁，可读性更高

但是这不是浏览器支持的，我们需要将它翻译为浏览器能看懂的 JS

所以，我们生成 v-dom 的第一个步骤需要做的事有下面这些

- 通过 babel 将 JSX 转换为 JS
- 将 JS 转换为 v-dom

#### jsx -> js

我们写一个简单的 JSX

```js
// main component
<div>
  <input type="text" placeholder="Search" onChange = { this.filterList } />
  <List items={ this.state.items } />
</div>
// list component
<ul>
  {
    this.props.items.map(item => <li key={ item }>{ item }</li>)
  }
</ul>
```

通过 babel 转换为 preact 的[hyperscript](https://github.com/hyperhype/hyperscript)能处理的 JS 格式

原理就是遍历 JSX 结点

> "h"代表 hyperscript。在 React 中，是将 JSX 转换为 React.createElement

```js
// main component
h(
  'div',
  null,
  h('input', {
    type: 'text',
    placeholder: 'Search',
    onChange: this.filterList,
  }),
  h(List, { items: this.state.items }),
);

// list component
h('ul', null, this.props.items.map(item => h('li', { key: item }, item)));
```

#### js -> v-dom

---

在接收到处理后的 JS 之后，hyperscript 会创建一个叫`VNode`的结点，同 React.createElement 函数创建的 ReactElement

preact 实现代码：https://github.com/developit/preact/blob/master/src/h.js

主要做了几件事：

- 子组件调用函数返回 VNode
- 父组件调用返回含 VNode 的 Children 数组的对象

`具体`的流程见下文的**初始化分析**

```js
// main component
{
  nodeName: "div",
  children: [
    {
      nodeName: "input",
      attributes: {
        type: "text",
        placeholder: "Search"
      },
      children: []
    },
    {
      nodeName: "List",
      attributes: {
        items: [
          "test1",
          "test2"
        ]
      },
      children: []
    }
  ]
}
```

### v-dom 如何进行修改操作

#### 初始化 v-dom

从顶级的 v-dom 对象开始，根据 nodeName 可分为组件与原生 DOM 的情况

##### 对待组件

调用如下生命周期函数

- componentWillMount
- render
- componentDidMount

在调用 render 函数时，如果是组件，则会发生 VNode 的转换

```js
// main compoennt
{
  nodeName: "Main",
  children: []
}
// 调用render(), 发生 VNode 转换
{
  nodeName: "div",
  children: [
    {
      nodeName: "input",
      attributes: {
        type: "text",
        placeholder: "Search"
      },
      children: []
    },
    {
      // 注意，此时子组件，没有调用render
      nodeName: "List",
      attributes: {
        items: [
          "test1",
          "test2"
        ]
      },
      children: []
    }
  ]
}
```

Preact 实现代码：https://github.com/developit/preact/blob/master/src/vdom/component.js#L101

##### 对待原生 DOM

如例子中，最外层 nodeName 为'div'的 VNode

- document.createElement()
- 对非组件 children 递归调用 document.createElement() （如本例子中的 Input）
- 直到 children 无子元素，进行 parent.appendChild(me)

> 在这个过程中，先处理 Input，后处理组件 Children List

---

完成上面的步骤后，整个组件的渲染初始化过程就完成了

> 重要提示：一旦完成了所有事情，就会将真实 DOM 的引用添加到每个组件实例中。该引用用于剩余的更新（创建，更新，删除）进行比较，并避免重新创建相同的 DOM 节点。

#### 修改 v-dom 内的元素

同初始化一样，也会重新创建 VNodes

更新会触发的生命周期函数：

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

> 此外，更新周期，如果这些元素已经存在，则不会重新创建 DOM 元素

##### render 详解

每个组件都有一个对初始加载期间创建的对应真实 DOM 树的引用

当 VNodes 创建时，每个 VNode 的属性都会与该节点上的 REAL DOM 的属性进行比较。如果存在真正的 DOM，则循环移至下一个节点

假如我们对 List 组件中的一个元素进行`删除`操作，此时的 v-dom 会与原来的 Real DOM 产生差异，此时需要移除结点

```js
// component
call componentWillUnMount
then remove all nodes
call componentDidUnMount
stop
// 非component
let p = node.parentNode
p.removeChild(node)
call componentDidUpdate
stop
```

## v-dom 简易实现

```js
class VNode {
  constructor(nodeName, attributes, children) {
    this.nodeName = nodeName;
    this.attributes = attributes;
    this.children = children;
  }
}

function render(vNode, parent) {
  let builtDOM = buildDOMByVNode(vNode);
  parent.appendChild(builtDOM);
  return builtDOM;
}

function buildDOMByVNode(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }
  let { nodeName, attributes: attrs, children } = vNode;
  if (typeof nodeName === 'string') {
    let node = document.createElement(nodeName);
    if (attrs) {
      for (let key in attrs) {
        if (!attrs.hasOwnProperty(key)) continue;
        setAttributes(node, key, attrs[key]);
      }
    }
    if (children) {
      children.forEach(child => {
        let subNode = buildDOMByVNode(child);
        node.appendChild(subNode);
      });
    }
    return node;
  }
}

function h(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return new VNode(nodeName, attributes, children);
}

function setAttributes(node, attr, value) {
  node.setAttribute(attr, value);
}

export default { render, h };
```

## 结语

这是整个 preact 的处理逻辑

写完整个 v-dom 的构造，感觉对框架的理解，又更加深入了些，之后也会对 v-dom 操作的精华 diff 算法进行一个详细的分析。

## 参考文章

[深入研究 Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf)
