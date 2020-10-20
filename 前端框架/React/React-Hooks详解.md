# React-hooks 详解

## 可能存在的疑问？

1. 为什么 useEffect 第二个参数是空数组，就相当于 ComponentDidMount ，只会执行一次？
2. 为什么只能在函数的最外层调用 Hook，不能在循环、条件判断或者子函数中调用？
3. 自定义的 Hook 是如何影响使用它的函数组件的？
4. Capture Value 特性是如何产生的？

## 实现 useState

首先写一个简单的 hooks

```jsx
function useState(initState) {
  let state = initState;
  function setState(newState) {
    state = newState;
  }
  return [state, setState];
}
```

执行 setState 修改 state 之后，发现 state 没有改变？

因为没有存储 state，每次更新 state 都是新重置的

自然想到利用闭包讲变量提升

```jsx
let _state;

function useState(initState) {
  _state = _state || initState;
  function setState(newState) {
    _state = newState;
  }
  return [_state, setState];
}
console.log(useState(12));

const [state, setState] = useState(12);

console.log(state);

setState(24);

console.log(_state);
```

修改 state 生效

## 实现 useEffect

useEffect 有几个特点：

1. 有两个参数 callback 和 dependencies 数组
2. 如果 dependencies 不存在，那么 callback 每次 render 都会执行
3. 如果 dependencies 存在，只有当它发生了变化， callback 才会执行

根据 useState 的经验实现 useEffect

```jsx
let _ deps;

function useEffect(callback, depArray){
  const hasNoDep = !depArray;
  const hasChangeDep = deps ? !depArray.every((e, i) => e === deps[i]) : true;
  if(hasNoDep || hasChangeDep){
    callback();
    _deps = depArray;
  }
}
```

## 为什么第二个参数是空数组，相当于 componentDidMount ？

因为依赖一直不变化，callback 不会二次执行

## 为什么只能使用一次 ？

因为 `_state` 和 `_deps` 只有一个，所以 useState 和 useEffect 只能使用一次

为了解决这个问题，需要存储多个 `_state` 和 `_deps`，我们这里使用数组，来解决 Hooks 的复用问题

代码关键在于：

- 初次渲染的时候，按照 useState，useEffect 的顺序，把 state，deps 等按顺序塞到 memoizedState 数组中
- 更新的时候，按照顺序，从 memoizedState 中把上次记录的值拿出来

代码实现：

```jsx
const memoizedState = [];
let cursor = 0;

function useState(initState) {
  memoizedState[cursor] = memoizedState[cursor] || initState;
  const currentCursor = cursor;
  function setState(newState) {
    memoizedState[currentCursor] = newState;
  }
  return [memoizedState[cursor++], setState];
}

function useEffect(callback, depArray) {
  const hasNoDep = !depArray;
  const deps = memoizedState[cursor] || [];
  const hasChangeDep = !depArray.every((e, i) => e === deps[i]);
  if (hasNoDep || hasChangeDep) {
    callback();
    memoizedState[cursor] = depArray;
  }
  cursor++;
}
```

## 总结

到这里，我们实现了一个可以任意复用的 useState 和 useEffect。

同时，也可以解答几个问题：

Q：为什么只能在函数最外层调用 Hook？为什么不要在循环、条件判断或者子函数中调用？
A：memoizedState 数组是按 hook 定义的顺序来放置数据的，如果 hook 顺序变化，memoizedState 并不会感知到。

Q：自定义的 Hook 是如何影响使用它的函数组件的？
A：共享同一个 memoizedState，共享同一个顺序。

Q："Capture Value" 特性是如何产生的？
A：每一次 ReRender 的时候，都是重新去执行函数组件了，对于之前已经执行过的函数组件，并不会做任何操作。

Q：memoizedState，cursor 是存在哪里的？如何和每个函数组件一一对应的？
A：我们知道，react 会生成一棵组件树（或 Fiber 单链表），树中每个节点对应了一个组件。hooks 的数据就作为组件的一个信息，存储在这些节点上，伴随组件一起出生，一起死亡。

**React 中是通过类似单链表的形式来代替数组的**
