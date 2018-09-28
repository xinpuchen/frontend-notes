/**
 * 有一个数组repeatArr，包含100个正整数，如[2,43,5,6..23],
 * 请试写一个方法，取出数组中重复次数最多的数。
 */
const repeatArr = [
  2,
  43,
  5,
  6,
  23,
  2
];
function getMost(arr) {
  var hash = {};
  var m = 0;
  var trueEl;
  var el;
  for (var i = 0, len = arr.length; i < len; i++) {
    el = arr[i];
    hash[el] === undefined
      ? hash[el] = 1
      : (hash[el]++);
    if (hash[el] >= m) {
      m = hash[el];
      trueEl = el;
    }
  }
  return trueEl;
};
console.log(`数组[${repeatArr}]中重复次数最多的数是：${getMost([repeatArr])}`);