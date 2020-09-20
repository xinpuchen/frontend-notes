# React 生命周期

React16 废弃的三个生命周期函数

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

> 注：目前在 16 版本中 componentWillMount，componentWillReceiveProps，componentWillUpdate 并未完全删除这三个生命周期函数，而且新增了 UNSAFE*componentWillMount，UNSAFE_componentWillReceiveProps，UNSAFE_componentWillUpdate 三个函数，官方计划在 17 版本完全删除这三个函数，只保留 UNSAVE*前缀的三个函数，目的是为了向下兼容，但是对于开发者而言应该尽量避免使用他们，而是使用新增的生命周期函数替代它们

取而代之的是两个新的生命周期函数

- static getDerivedStateFromProps(nextProps, prevState)
- getSnapshotBeforeUpdate(prevProps, prevState)

## 挂载阶段

挂载阶段，也可以理解为组件的初始化阶段，就是将我们的组件插入到 DOM 中，只会发生一次
这个阶段的生命周期函数调用如下：

- constructor
- static getDerivedStateFromProps(nextProps, prevState)
- ~~componentWillMount/UNSAVE_componentWillMount~~
- render
- componentDidMount

**constructor**

组件构造函数，第一个被执行，如果没有显示定义它，我们会拥有一个默认的构造函数，如果显示定义了构造函数，我们必须在构造函数第一行执行 super(props)，否则我们无法在构造函数里拿到 this 对象。

在构造函数里面我们一般会做两件事：

- 初始化 state 对象
- 给自定义方法绑定 this

```jsx
constructor(props) {
  super(props)
  this.state = {
    select,
    height: 'atuo',
    externalClass,
    externalClassText
  }
  this.handleChange1 = this.handleChange1.bind(this)
  this.handleChange2 = this.handleChange2.bind(this)
}
```

> 禁止在构造函数中调用 setState，可以直接给 state 设置初始值

**getDerivedStateFromProps**

> static getDerivedStateFromProps(nextProps, prevState)

一个静态方法，所以不能在这个函数里面使用 this，这个函数有两个参数 props 和 state，分别指接收到的新参数和当前的 state 对象，这个函数会返回一个对象用来更新当前的 state 对象，如果不需要更新可以返回 null

这个方法就是为了取代之前的~~componentWillMount~~、~~componentWillReceiveProps~~和~~componentWillUpdate~~

当接收到新的属性想去修改 state，可以使用 getDerivedStateFromProps

```jsx
class ExampleComponent extends React.Component {
  state = {
    isScrollingDown: false,
    lastRow: null,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.currentRow !== prevState.lastRow) {
      return {
        isScrollingDown: nextProps.currentRow > prevState.lastRow,
        lastRow: nextProps.currentRow,
      };
    }
    return null;
  }
}
```

**~~componentWillMount/UNSAFE_componentWillMount~~**

在 16 版本这两个方法并存，但是在 17 版本中~~componentWillMount~~被删除，只保留~~UNSAFE_componentWillMount~~，目的是为了做向下兼容，对于新的应用，用 getDerivedStateFromProps 代替它们。

由于~~componentWillMount/ UNSAFE_componentWillMount~~是在 render 之前调用，所以就算在这个方法中调用 setState 也不会触发重新渲染（re-render）

**render**

React 中最核心的方法，一个组件中必须要有这个方法

返回的类型有以下几种：

- 原生的 DOM，如 div
- React 组件
- Fragment（片段）
- Portals（插槽）
- 字符串和数字，被渲染成 text 节点
- Boolean 和 null，不会渲染任何东西

render 函数是纯函数，里面只做一件事，就是返回需要渲染的东西，不应该包含其它的业务逻辑，如数据请求，对于这些业务逻辑请移到 componentDidMount 和 componentDid Update 中。

**componentDidMount**

组件装载之后调用，此时我们可以获取到 DOM 节点并操作，比如对 canvas，svg 的操作，服务器请求，订阅都可以写在这个里面，但是记得在 componentWillUnmount 中取消订阅。

在 componentDidMount 中调用 setState 会触发一次额外的渲染，多调用了一次 render 函数，但是用户对此没有感知，因为它是在浏览器刷新屏幕前执行的，但是我们应该在开发中避免它，因为它会带来一定的性能问题，我们应该在 constructor 中初始化我们的 state 对象，而不应该在 componentDidMount 调用 state 方法。

## 更新阶段

更新阶段，当组件的 props 改变了，或组件内部调用了 setState 或者 forceUpdate 发生，会发生多次

这个阶段的生命周期函数调用如下：

- ~~componentWillReceiveProps/UNSAFE_componentWillReceiveProps~~
- getDerivedStateFromProps
- shouldComponentUpdate
- ~~componentWillUpdate/UNSAFE_componentWillUpdate~~
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

**componentWillReceiveProps/UNSAFE_componentWillReceiveProps**

> - componentWillReceiveProps(nextProps, prevState)
> - UNSAFE_componentWillReceiveProps(nextProps, prevState)

在 16 版本这两个方法并存，但是在 17 版本中 componentWillReceiveProps 被删除，UNSAFE_componentWillReceiveProps，目的是为了做向下兼容，对于新的应用，用 getDerivedStateFromProps 代替它们。

注意，当我们父组件重新渲染的时候，也会导致我们的子组件调用~~componentWillReceiveProps/UNSAFE_componentWillReceiveProps~~，即使我们的属性和之前的一样，所以需要我们在这个方法里面去进行判断，如果前后属性不一致才去调用 setState

**在装载阶段这两个函数不会被触发，在组件内部调用了 setState 和 forceUpdate 也不会触发这两个函数**

**getDerivedStateFromProps**

这个方法在装载阶段已经讲过了，这里不再赘述，记住在更新阶段，无论我们接收到新的属性，调用了 setState 还是调用了 forceUpdate，这个方法都会被调用

**shouldComponentUpdate**

> shouldComponentUpdate(nextProps, nextState)

有两个参数 nextProps 和 nextState，表示新的属性和变化之后的 state，返回一个布尔值，true 表示会触发重新渲染，false 表示不会触发重新渲染，默认返回 true
注意当我们调用 forceUpdate 并不会触发此方法
因为默认是返回 true，也就是只要接收到新的属性和调用了 setState 都会触发重新的渲染，这会带来一定的性能问题，所以我们需要将 this.props 与 nextProps 以及 this.state 与 nextState 进行比较来决定是否返回 false，来减少重新渲染
但是官方提倡我们使用 PureComponent 来减少重新渲染的次数而不是手工编写 shouldComponentUpdate 代码，具体该怎么选择，全凭开发者自己选择
在未来的版本，shouldComponentUpdate 返回 false，仍然可能导致组件重新的渲染，这是官方自己说的。

**~~componentWillUpdate/UNSAFE_componentWillUpdate~~**

> - componentWillUpdate(nextProps, nextState)
> - UNSAFE_componentWillUpdate(nextProps, nextState)

在 16 版本这两个方法并存，但是在 17 版本中~~componentWillUpdate~~被删除，~~UNSAFE_componentWillUpdate~~，目的是为了做向下兼容

在这个方法里，你不能调用 setState，因为能走到这个方法，说明 shouldComponentUpdate 返回 true，此时下一个 state 状态已经被确定，马上就要执行 render 重新渲染了，否则会导致整个生命周期混乱，在这里也不能请求一些网络数据，因为在异步渲染中，可能会导致网络请求多次，引起一些性能问题，
如果你在这个方法里保存了滚动位置，也是不准确的，还是因为异步渲染的问题，如果你非要获取滚动位置的话，请在 getSnapshotBeforeUpdate 调用。

**render**

更新阶段也会触发，装载阶段已经讲过了，不再赘述

**getSnapshotBeforeUpdate**

> getSnapshotBeforeUpdate(prevProps, prevState)

这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps 和 prevState，表示之前的属性和之前的 state，这个函数有一个返回值，会作为第三个参数传给 componentDidUpdate。

- 如果你不想要返回值，请返回 null，不写的话控制台会有警告。
- 这个方法一定要和 componentDidUpdate 一起

**componentDidUpdate**

> componentDidUpdate(prevProps, prevState, snapshot)

该方法在 getSnapshotBeforeUpdate 方法之后被调用，有三个参数 prevProps，prevState，snapshot，表示之前的 props，之前的 state，和 snapshot。第三个参数是 getSnapshotBeforeUpdate 返回的
在这个函数里我们可以操作 DOM，和发起服务器请求，还可以 setState，但是注意一定要用 if 语句控制，否则会导致无限循环。

## 卸载阶段

卸载阶段，当我们的组件被卸载或者销毁了，这个阶段的生命周期函数只有一个：

**componentWillUnmount**

当我们的组件被卸载或者销毁了就会调用，我们可以在这个函数里去清除一些定时器，取消网络请求，清理无效的 DOM 元素等垃圾清理工作

注意不要在这个函数里去调用 setState，因为组件不会重新渲染了
