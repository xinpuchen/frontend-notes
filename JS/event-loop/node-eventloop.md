# node-eventloop

```
   ┌───────────────────────┐
┌─>│        timers         │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     I/O callbacks     │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
│  │     idle, prepare     │
│  └──────────┬────────────┘      ┌───────────────┐
│  ┌──────────┴────────────┐      │   incoming:   │
│  │         poll          │<─────┤  connections, │
│  └──────────┬────────────┘      │   data, etc.  │
│  ┌──────────┴────────────┐      └───────────────┘
│  │        check          │
│  └──────────┬────────────┘
│  ┌──────────┴────────────┐
└──┤    close callbacks    │
   └───────────────────────┘
```
#### 阶段：
- timers 阶段: 执行setTimeout(callback) and setInterval(callback)预定的callback;
- I/O callbacks 阶段: 执行除了 close 事件，定时器和 setImmediate 的回调
- idle, prepare 阶段: 仅node内部使用;
- poll 阶段: poll 阶段很重要，这一阶段中，系统会做两件事情:
    - 执行到点的定时器
    - 执行 poll 队列中的事件
    - 并且当 poll 中没有定时器的情况下，会发现以下两件事情:
       1. 如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
       2. 如果 poll 队列为空，会有两件事发生:
          - 如果有 setImmediate 需要执行，poll 阶段会停止并且进入到 check 阶段执行 setImmediate
          - 如果没有 setImmediate 需要执行，会等待回调被加入到队列中并立即执行回调
   - 如果有别的定时器需要被执行，会回到 timer 阶段执行回调。
- check 阶段: 执行setImmediate() 设定的callbacks;
- close callbacks 阶段: 执行 close 事件，比如socket.on(‘close’, callback)的callback会在这个阶段执行.

#### 总结：
- process.nextTick() 可以在当前”执行栈“的尾部（下一次Event Loop之前）触发 。
- setImmediate() 在当前“事件队列”的尾部添加事件，就是它指定的任务总是在下一次Event Loop时执行，与setTimeout(()=>{},0)很像。
- process.nextTick()于setImmediate()的区别：
   1. 多个process.nextTick() 语句总是在当前"执行栈"一次执行完。
   2. 多个setImmediate() 可能则需要多次loop才能执行完。


#### 在 Node 中，有些情况下的定时器执行顺序是随机的
```js
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
})
```

> 这里可能会输出 setTimeout，setImmediate
> 可能也会相反的输出，这取决于性能
>  因为可能进入 event loop 用了不到 1 毫秒，这时候会执行 setImmediate
>  否则会执行 setTimeout

#### 当然在这种情况下，执行顺序是相同的
```js
var fs = require('fs')

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
```
> 因为 readFile 的回调在 poll 中执行
> 发现有 setImmediate ，所以会立即跳到 check 阶段执行回调
> 再去 timer 阶段执行 setTimeout
> 所以以上输出一定是 setImmediate，setTimeout

#### 上面介绍的都是 macrotask 的执行情况，microtask 会在以上每个阶段完成后立即执行。
```js
setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)
```
> 以上代码在浏览器和 node 中打印情况是不同的
> 浏览器中一定打印 timer1, promise1, timer2, promise2
> node 中可能打印 timer1, timer2, promise1, promise2
> 也可能打印 timer1, promise1, timer2, promise2
#### Node 中的 process.nextTick 会先于其他 microtask 执行。
```js
setTimeout(() => {
  console.log("timer1");

  Promise.resolve().then(function() {
    console.log("promise1");
  });
}, 0);

process.nextTick(() => {
  console.log("nextTick");
});
```
> print: nextTick, timer1, promise1
