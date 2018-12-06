const _ = require("./underscore");

// Collections

/**
 * map
 * 和Array的map()与filter()类似，但是underscore的map()和filter()可以作用于Object。
 * 当作用于Object时，传入的函数为function (value, key)，第一个参数接收value，第二个参数接收key。
 */
const obj = {
  name: "bob",
  school: "No.1 middle school",
  address: "xueyuan road"
};

const upper = _.map(obj, function(value, key) {
  return `${key}:${value}`;
});

console.log(JSON.stringify(upper));

/**
 * every && some
 * 当集合的所有元素都满足条件时，_.every()函数返回true，当集合的至少一个元素满足条件时，_.some()函数返回true
 */
console.log(_.every([1, 4, 7, -3, -9], x => x > 0));
console.log(_.some([1, 4, 7, -3, -9], x => x > 0));

/**
 * max && min
 * 这两个函数直接返回集合中最大和最小的数，空集合会返回-Infinity和Infinity，所以要先判断集合不为空
 */
const arr = [3, 5, 7, 9];
console.log(_.max(arr));
console.log(_.min(arr));
console.log(_.max([]));
console.log(_.min([]));

/**
 * groupBy
 * groupBy()把集合的元素按照key归类，key由传入的函数返回
 */
const scores = [20, 81, 75, 40, 91, 59, 77, 66, 72, 88, 99];
const scoresGroups = _.groupBy(scores, function(x) {
  if (x < 60) {
    return "C";
  } else if (x < 80) {
    return "B";
  } else {
    return "A";
  }
});
console.log(scoresGroups);

/**
 * shuffle
 * shuffle()用洗牌算法随机打乱一个集合
 * sample
 * sample()则是随机选择一个或多个元素
 */
console.log(_.shuffle([1, 2, 3, 4, 5, 6]));
console.log(_.sample([1, 2, 3, 4, 5, 6], 3));
