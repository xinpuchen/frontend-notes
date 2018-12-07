const _ = require("./underscore");

//  Chaining

/**
 * chain
 * 把对象包装成能进行链式调用的方法
 */
const arr = _.chain([1, 4, 9, 16, 25])
  .map(Math.sqrt)
  .filter(x => x % 2 === 1)
  .value();
console.log(arr);
