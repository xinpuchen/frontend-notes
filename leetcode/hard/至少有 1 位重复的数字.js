/**
 * 给定正整数 N，返回小于等于 N 且具有至少 1 位重复数字的正整数。
 */

/*
  示例 1：
  输入：20
  输出：1
  解释：具有至少 1 位重复数字的正数（<= 20）只有 11 。

  示例 2：
  输入：100
  输出：10
  解释：具有至少 1 位重复数字的正数（<= 100）有 11，22，33，44，55，66，77，88，99 和 100 。

  示例 3：
  输入：1000
  输出：262

  提示：
  1 <= N <= 10^9
 */

/**
 *
 * @param {Number} N 查找数组
 */
const numDupDigitsAtMostN = function(N) {
  let count = 0;
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(
      i
        .toString()
        .split('')
        .sort(function(a, b) {
          return a.localeCompare(b);
        })
        .join(''),
    );
  }
  const len = arr.join(',').match(/[^\s,]*(\d)\1{1}[^\s,]*/gim);
  return len ? len.length : 0;
};

const numDupDigitsAtMostN = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const arr = i.toString().split('');
    const arr2 = [];
    if (
      arr.some(e => {
        if (arr2[e]) return true;
        else arr2[e] = 1;
      })
    )
      count++;
  }
  return count;
};
console.log(numDupDigitsAtMostN(976557));
console.log(numDupDigitsAtMostN(6718458));
