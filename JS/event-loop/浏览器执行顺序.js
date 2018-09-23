/**
 * HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。
 * 在此之前，老版本的浏览器都将最短间隔设为10毫秒。
 * 另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。
 * 这时使用requestAnimationFrame()的效果要好于setTimeout()。
 */

setImmediate(() => {
  console.log(7);
  setImmediate(() => {
    console.log(8);
  });
});

process.nextTick(() => {
  console.log(5);
  process.nextTick(() => {
    console.log(6);
  });
});

console.log(1);

setTimeout(() => {
  console.log(4);
}, 3);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

setImmediate(() => {
  console.log(9);
  setImmediate(() => {
    console.log(10);
  });
});

Promise.resolve().then(() => {
  console.log(13);
})

setImmediate(() => {
  setImmediate(() => {
    console.log(11);
    setImmediate(() => {
      console.log(12);
    })
  });
  setTimeout(() => {
    console.log('timeout fired');
  }, 0);
});

/**
 * 结论：
 * 1、对于H5标准规定 setTimeout() 最短间隔为4ms，老版本浏览器最短间隔为10ms，经过测试这个数据是不准确的，在浏览器控制台中，
 *   这个数据极值在1-2之间，而在vs code调试运行，极值在2-3之间。
 * 2、process.nextTick() 可以在当前”执行栈“的尾部（下一次Event Loop之前）触发
 * 3、setImmediate() 在当前“人物队列”的尾部添加事件，就是它指定的任务总是在下一次Event Loop时执行，与setTimeout(()=>{},0)很像。
 *
 * process.nextTick()于setImmediate()的区别：
 * 1、多个process.nextTick() 语句总是在当前"执行栈"一次执行完。
 * 2、多个setImmediate() 可能则需要多次loop才能执行完。
 *
 * Hint：详情请曹考阮一峰老师：http://www.ruanyifeng.com/blog/2014/10/event-loop.html
 */


/**
 * 再举一个例子进行详细分析,于上面单独运行
 */
console.log("begin");

setTimeout(
  (() => {
    console.log("setTimeout1");
    return () => console.log("setTimeout2");
  })(),
  0
);

setTimeout(() => {
  console.log("setTimeout3");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise1");
  })
  .then(() => {
    console.log("promise2");
  });

console.log("main");

console.log("end");

/**
 * 进入主 macrotask，打印 begin
 * 进入立即执行函数，setTimeout1
 * 将 settimeout2 推入事件队列
 * 将 settimeout3 推入事件队列
 * 将 promise 的 then 回调推入 microtask 队列
 * 打印 main
 * 打印 end
 * 检查 microtask 队列，执行 then 回调，打印 promise1，然后第二个 then 进入 microtask 队列
 * 检查 microtask 队列，执行第2个 then 回调，打印 promise2
 * microtask 队列中无事件，一个 macrotask 执行完毕，检查浏览器渲染
 * js引擎重新接管，事件队列中获取第2个 macrotask，打印 setTimeout2
 * js引擎重新接管，事件队列中获取第3个 macrotask，打印 setTimeout3
 */
