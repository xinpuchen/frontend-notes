# Node 事件循环

为了协调异步任务，Node 提供了四个定时器，让任务可以在指定的时间运行。

- setTimeout()
- setInterval()
- setImmediate()
- process.nextTick()

> 前两个是语言的标准，后两个是 Node 独有的

## 同步任务和异步任务

首先，同步任务总是比异步任务更早执行。

## 本轮循环和次轮循环

异步任务可以分成两种

- 追加在本轮循环的异步任务
- 追加在次轮循环的异步任务

所谓"循环"，指的是事件循环（event loop）。这是 JavaScript 引擎处理异步任务的方式，本轮循环一定早于次轮循环执行即可。

Node 规定，process.nextTick 和 Promise 的回调函数，追加在本轮循环，即同步任务一旦执行完成，就开始执行它们。而 setTimeout、setInterval、setImmediate 的回调函数，追加在次轮循环。

## process.nextTick()

它是在本轮循环执行的，而且是所有异步任务里面最快执行的，Node 执行完所有同步任务，接下来就会执行 process.nextTick 的任务队列。
基本上，如果你希望异步任务尽可能快地执行，那就使用 process.nextTick。

## 微任务

根据语言规格，Promise 对象的回调函数，会进入异步任务里面的"微任务"（microtask）队列。
微任务队列追加在 process.nextTick 队列的后面，也属于本轮循环。

> 注意，只有前一个队列全部清空以后，才会执行下一个队列。

至此任务执行顺序：

- 同步任务
- process.nextTick()
- 微任务

## 事件循环的概念

首先，有些人以为，除了主线程，还存在一个单独的事件循环线程。不是这样的，只有一个主线程，事件循环是在主线程上完成的。
其次，Node 开始执行脚本时，会先进行事件循环的初始化，但是这时事件循环还没有开始，会先完成下面的事情。

- 同步任务
- 发出异步请求
- 规划定时器生效的时间
- 执行 process.nextTick() 等等

最后，上面这些事情都干完了，事件循环就正式开始了。

## 事件循环的六个阶段

如图：

```js
   ┌───────────────────────┐
┌─>│        timers         │<————— 执行 setTimeout()、setInterval() 的回调
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     pending callbacks │<————— 执行由上一个 Tick 延迟下来的 I/O 回调（待完善，可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
│  │     idle, prepare     │<————— 内部调用（可忽略）
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|             |                   ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │ - (执行几乎所有的回调，除了 close callbacks、timers、setImmediate)
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│             |                   |               |
|             |                   └───────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
|  ┌──────────┴────────────┐
│  │        check          │<————— setImmediate() 的回调将会在这个阶段执行
│  └──────────┬────────────┘
|             |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│  ┌──────────┴────────────┐
└──┤    close callbacks    │<————— socket.on('close', ...)
   └───────────────────────┘s
```

每个阶段都有一个先进先出的回调函数队列。只有一个阶段的回调函数队列清空了，该执行的回调函数都执行了，事件循环才会进入下一个阶段。

- timers 阶段: 执行 setTimeout(callback) and setInterval(callback)预定的 callback;
- I/O callbacks 阶段: 执行除了定时器、setImmediate 及 close callbacks 的回调;
- idle, prepare 阶段: 仅 node 内部 libuv 库使用;
- poll 阶段: poll 阶段很重要，这一阶段中，系统会做两件事情:
  1. 执行到点的定时器
  2. 执行 poll 队列中的事件
     - 如果有别的定时器需要被执行，会回到 timer 阶段执行回调。
     - 如果 poll 中没有定时器的情况下，会发现以下两件事情:
       1. 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
       2. 如果 poll 队列为空，会有两件事发生:
          - 如果有 setImmediate 需要执行，poll 阶段会停止并且进入到 check 阶段执行 setImmediate
          - 如果没有 setImmediate 需要执行，会等待回调被加入到队列中并立即执行回调
- check 阶段: 执行 setImmediate() 设定的 callbacks;
- close callbacks 阶段: 执行 close 事件，比如 socket.on(‘close’, callback)的 callback 会在这个阶段执行。

## setTimeout 和 setImmediate

由于 setTimeout 在 timers 阶段执行，而 setImmediate 在 check 阶段执行。所以，setTimeout 会早于 setImmediate 完成。
但是，因为 setTimeout 的第二个参数默认为 0。实际上，Node 做不到 0 毫秒，最少也需要 1 毫秒，第二个参数的取值范围在 1 毫秒到 2147483647 毫秒之间。也就是说，setTimeout(f, 0)等同于 setTimeout(f, 1)。

实际执行的时候，进入事件循环以后，有可能到了 1 毫秒，也可能还没到 1 毫秒，取决于系统当时的状况。如果没到 1 毫秒，那么 timers 阶段就会跳过，进入 check 阶段，先执行 setImmediate 的回调函数。

## 总结

- 同步任务总是比异步任务更早执行
- 本轮循环一定早于次轮循环执行，process.nextTick 和 Promise 的回调函数，追加在本轮循环，而 setTimeout、setInterval、setImmediate 的回调函数，追加在次轮循环
- process.nextTick 是在本轮循环执行的，而且是所有异步任务里面最快执行的
- Promise 对象的回调函数，会进入异步任务里面的 "微任务" 队列，微任务队列追加在 process.nextTick 队列的后面，也属于本轮循环
- process.nextTick()于 setImmediate()的区别：
  1. 多个 process.nextTick() 语句总是在当前"执行栈"一次执行完。
  2. 多个 setImmediate() 可能则需要多次 loop 才能执行完。
