const _ = require("./underscore");

// Functions

/**
 * bind
 * 当用一个变量fn指向一个对象的方法时，直接调用fn()是不行的，因为丢失了this对象的引用。
 * 用bind可以修复这个问题
 */
const s = " Hello";
console.log(s.trim());
let fn = s.trim;
// console.log(fn()); // TypeError: String.prototype.trim called on null or undefined
// 可利用 apply / call
console.log(fn.call(s));
console.log(fn.apply([s]));
// 利用 _.bind
fn = _.bind(s.trim, s);
console.log(fn());

/**
 * partial
 * 希望创建一个偏函数cube(x)，计算x3，可以用_作占位符，固定住第二个参数
 */
const cube = _.partial(Math.pow, _, 3);
console.log(cube(3));
console.log(cube(5));
console.log(cube(10));

/**
 * momoize
 * 如果一个函数调用开销很大，我们就可能希望能把结果缓存下来，以便后续调用时直接获得结果
 */
const factorial1 = n => {
  console.log("start calculate " + n + "!...");
  var s = 1,
    i = n;
  while (i > 1) {
    s = s * i;
    i--;
  }
  console.log(n + "! = " + s);
  return s;
};

factorial1(10);

const factorial2 = _.memoize(function(n) {
  console.log("start calculate " + n + "!...");
  var s = 1,
    i = n;
  while (i > 1) {
    s = s * i;
    i--;
  }
  console.log(n + "! = " + s);
  return s;
});

// 第一次调用:
factorial2(10);
// start calculate 10!...
// 10! = 3628800

// 第二次调用:
factorial2(10);
// 没有输出
const factorial3 = _.memoize(function(n) {
  console.log("start calculate " + n + "!...");
  if (n < 2) {
    return 1;
  }
  return n * factorial3(n - 1);
});
console.log(factorial3(10));
factorial3(9); // 无输出

/**
 * once
 * 顾名思义，once()保证某个函数执行且仅执行一次。
 * 如果你有一个方法叫register()，用户在页面上点两个按钮的任何一个都可以执行的话，
 * 就可以用once()保证函数仅调用一次，无论用户点击多少次
 */
const register = _.once(function() {
  console.log("Register ok!");
});
register();
register();
register();

/**
 * delay
 * delay()可以让一个函数延迟执行，效果和setTimeout()是一样的，但是代码明显简单了
 */
const log = _.bind(console.log, console);
_.delay(log, 2000, "Hello,", "world!");
