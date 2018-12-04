# 生命周期详解

## 实例化 (mount)

首次实例化

- getDefaultProps
- getInitialState
- componentWillMount()
- render()
- componentDidMount()

## 存在期 (update)

组件已存在时的状态改变

- componentWillReceiveProps(nextProps)
- shouldComponentUpdate(nextProps, nextState)
- componentWillUpdate()
- render()
- componentDidUpdate()

## 销毁&清理期 (unmount)

- componentWillUnmount()

## 生命周期 API。

**1.getDefaultProps**：作用于组件类，只调用一次，返回对象用于设置默认的 props，对于引用值，会在实例中共享。

**2.getInitialState**：作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的 state，此时可以访问 this.props。

**3.componentWillMount()**：在完成首次渲染之前调用，此时仍可以修改组件的 state。

**4.render()**：必选的方法，创建虚拟 DOM，该方法具有特殊的规则：

- 只能通过 this.props 和 this.state 访问数据
- 可以返回 null、false 或任何 React 组件
- 只能出现一个顶级组件（不能返回数组）
- 不能改变组件的状态
- 不能修改 DOM 的输出

**5.componentDidMount()**：真实的 DOM 被渲染出来后调用，在该方法中可通过 this.getDOMNode()访问到真实的 DOM 元素。此时已可以使用其他类库来操作这个 DOM。

在服务端中，该方法不会被调用（服务端渲染返回字符串，不需要操作 DOM）

**6.componentWillReceiveProps(nextProps)**：组件接收到新的 props 时调用，并将其作为参数 nextProps 使用，此时可以更改组件 props 及 state。

```js
componentWillReceiveProps: function(nextProps) {
    if (nextProps.bool) {
        this.setState({
            bool: true
        });
    }
}
```

**7.shouldComponentUpdate(nextProps, nextState)**：组件是否应当渲染新的 props 或 state，返回 false 表示跳过后续的生命周期方法，通常不需要使用以避免出现 bug。

在出现应用的瓶颈时，可通过该方法进行适当的优化。

在首次渲染期间或者调用了 forceUpdate 方法后，该方法不会被调用

**8.componentWillUpdate()**：接收到新的 props 或者 state 后，进行渲染之前调用，此时不允许更新 props 或 state。

**9.componentDidUpdate()**：完成渲染新的 props 或者 state 后调用，此时可以访问到新的 DOM 元素。

**10.componentWillUnmount()**：组件被移除之前被调用，可以用于做一些清理工作，在 componentDidMount 方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。

## React Version 16.3 新生命周期

### 去除

**componentWillMount()**

**componentWillReceiveProps(nextProps)**

**componentWillUpdate()**

![img](https://user-gold-cdn.xitu.io/2018/4/30/163159734534eaa8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 新增

**static getDerivedStateFromProps(nextProps, prevState)**

**getSnapshotBeforeUpdate(prevProps, prevState)**

![img](https://user-gold-cdn.xitu.io/2018/4/30/16315978796bdf77?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### Version 16 生命周期函数用法建议

```js
class ExampleComponent extends React.Component {
  // 用于初始化 state
  constructor() {}

  // 用于替换 `componentWillReceiveProps` ，该函数会在初始化和 `update` 时被调用
  // 因为该函数是静态函数，所以取不到 `this`
  // 如果需要对比 `prevProps` 需要单独在 `state` 中维护
  static getDerivedStateFromProps(nextProps, prevState) {}

  // 判断是否需要更新组件，多用于组件性能优化
  shouldComponentUpdate(nextProps, nextState) {}

  // 组件挂载后调用
  // 可以在该函数中进行请求或者订阅
  componentDidMount() {}

  // 用于获得最新的 DOM 数据
  getSnapshotBeforeUpdate(prevProps, prevState) {}

  // 组件即将销毁
  // 可以在此处移除订阅，定时器等等
  componentWillUnmount() {}

  // 组件销毁后调用
  componentDidUnMount() {}

  // 组件更新后调用
  componentDidUpdate() {}

  // 渲染组件函数
  render() {}

  // 以下函数不建议使用
  UNSAFE_componentWillMount() {}
  UNSAFE_componentWillUpdate(nextProps, nextState) {}
  UNSAFE_componentWillReceiveProps(nextProps) {}
}
```

[信息来源 1](https://juejin.im/post/5ae6cd96f265da0b9c106931)
[信息来源 2](https://juejin.im/post/5aca20c96fb9a028d700e1ce)
