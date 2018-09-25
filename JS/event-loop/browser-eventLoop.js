/**
 * 工作原理： https://sfault-image.b0.upaiyun.com/325/916/3259161542-575018ce29d44_articlex
 * JS 在执行的过程中会产生执行环境，这些执行环境会被顺序的加入到执行栈中。
 * 如果遇到异步的代码，会被挂起并加入到 Task（有多种 task） 队列中。
 * 一旦执行栈为空，Event Loop 就会从 Task 队列中拿出需要执行的代码并放入执行栈中执行，所以本质上来说 JS 中的异步还是同步行为。
 * 不同的任务源会被分配到不同的 Task 队列中，任务源可以分为 微任务（microtask） 和 宏任务（macrotask）。
 * 在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。
 * HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。老版本的浏览器都将最短间隔设为10毫秒。
 * 经过测试，在浏览器控制台中，第二个参数极值在1-2之间，vs code中，极值在2-3之间的时，setTimeout函数的执行顺便会出现异常。
 * 另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。
 * 这时使用requestAnimationFrame()的效果要好于setTimeout()。
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

new Promise(resolve => {
  console.log("promise1");
  resolve();
})
  .then(() => {
    console.log("promise2");
  })
  .then(() => {
    console.log("promise3");
  });

console.log("main");

console.log("end");

/**
 * 运行结果：
 * begin
 * setTimeout1
 * promise1
 * main
 * end
 * promise2
 * promise3
 * setTimeout2
 * setTimeout3
 *
 * 进入主 macrotask，打印 begin
 * 进入立即执行函数，setTimeout1
 * 将 settimeout2 推入事件队列
 * 将 settimeout3 推入事件队列
 * 因为 Promise 属于 microtask，打印 promise1
 * 将 promise 的 then 回调推入 microtask 队列
 * 打印 main
 * 打印 end
 * 检查 microtask 队列，执行 Promise 第一个 then 回调，打印 promise2，然后第二个 then 进入 microtask 队列
 * 检查 microtask 队列，执行第2个 then 回调，打印 promise3
 * microtask 队列中无事件，一个 macrotask 执行完毕，检查浏览器渲染
 * js引擎重新接管，事件队列中获取第2个 macrotask setTimeout，打印 setTimeout2
 * js引擎重新接管，事件队列中获取第3个 macrotask setTimeout，打印 setTimeout3
 */

/**
 * 总结：
 * 虽然 setTimeout 写在 Promise 之前，但是因为 Promise 属于微任务而 setTimeout 属于宏任务，所以会有以上的打印。
 * 微任务包括 process.nextTick ，promise ，Object.observe ，MutationObserver
 * 宏任务包括 script ，setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering
 * 很多人有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行宏任务 script，接下来有异步代码的话就先执行微任务。
 *
 * 所以正确的一次 Event loop 顺序是这样的:
 * 1、执行同步代码，这属于宏任务
 * 2、执行栈为空，查询是否有微任务需要执行
 * 3、执行所有微任务
 * 4、必要的话渲染 UI
 * 5、然后开始下一轮 Event loop，执行宏任务中的异步代码
 *
 *
 * 通过上述的 Event loop 顺序可知，如果宏任务中的异步代码有大量的计算并且需要操作 DOM 的话，为了更快的界面响应，我们可以把操作 DOM 放入微任务中。
 * Hint：详情请曹考阮一峰老师：http://www.ruanyifeng.com/blog/2014/10/event-loop.html
 */
