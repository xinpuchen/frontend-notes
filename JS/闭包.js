/**
 * 闭包是啥
 * MDN中这么定义闭包： 闭包是 **函数** 和 **声明该函数的词法环境** 的集合
 */

// 函数工厂
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

/**
 * 闭包和函数作用域的联系？
 * 函数作用域是产生闭包的原因
 * 为什么要用闭包？
 * 闭包允许将函数与其所操作的某些数据（环境）关联起来。
 * 这显然类似于面向对象编程。面向对象编程中，对象允许我们将某些数据与一个或多个方法相关联
 * 用闭包模拟私有方法（数据隐藏和封装）
 */

const makeCounter = function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    },
  };
};

const Counter1 = makeCounter();
const Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */

/**
 * 计数器counter1和counter2是相互独立的，每个闭包都是引用自己词法作用域内的变量privateCounter，
 * 在一个闭包中对变量的修改不会影响到另一个闭包中的变量
 * 闭包中常见的问题： for click 问题（详见JS部分小知识点的解答）
 */

// 经典面试题，循环中使用闭包解决 var 定义函数的问题
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    // console.log(i);
  }, i * 1000);
}
// 首先因为 setTimeout 是个异步函数，所有会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。
// 解决办法：
// 1、使用闭包
for (var i = 1; i <= 5; i++) {
  (j => {
    setTimeout(() => {
      // console.log(j);
    }, j * 1000);
  })(i);
}
// 2、使用 setTimeout 的第三个参数
for (var i = 1; i <= 5; i++) {
  setTimeout(
    i => {
      // console.log(i);
    },
    i * 1000,
    i,
  );
}
// 3、使用 let 定义 i
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
