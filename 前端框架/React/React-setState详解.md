# React-setState 详解

## setState 的用法

```js
// 官方定义
this.setState(updater[,callback])
```

## 具体实现

![img](https://pic3.zhimg.com/80/4fd1a155faedff00910dfabe5de143fc_hd.jpg)

- 首先将 newState 存入 pending 队列
- 根据 isBatchingUpdates 判断是否直接更新
  - False:遍历 dirtyComponents,调用 updateComponent,更新 pending state 和 props
  - True:保存组件到 dirtyComponents

**解释：** 函数 batchedUpdates,会将 isbatchedUpdates 设置为 true,在 React 调用事件处理函数之前就会调用这个函数，造成的后果就是不会同步更新 state

**原因：** 每次进行 setState 必然触发更新过程，所以一是可以通过 shouldComponentUpdate 进行一个筛选，二是可以将之前的 setState 进行一个 merge 统一 render，保证 render 不是每次都执行，否则则十分消耗性能

## setState 调用后，会触发哪些生命周期函数

- shouldComponentUpdate
- componentWillUpdate
- render **(在 render 的时候才会更新 state)**
- componentDidUpdate

---

### updater

#### 传统调用

```js
// count : 0
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
```

> 在传统调用当中，执行完上面的两次 setState 后，count 为 1，不为 2

##### 原因

在调用 setState 时，不是同步变化的，所以 state 并没有变化(参见上述生命周期)，所以 setState 只是在重复设置一个值

#### 函数式调用

```js
function updater(preState, props) {
  return { count: preState.count + 1 };
}

---(
  // count : 0
  this.setState(updater)
); // count: 1
this.setState(updater); // count: 2
```

- updater 可以是一个函数，函数返回 setState 需要更改的键值对对象
- 函数有两个形参，一个是 state,一个是 props
- 使用函数式调用的时候可以完成同步更新 state(但是依然是在 render 的时候更新 state)
