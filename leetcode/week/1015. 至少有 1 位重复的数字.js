/** 1015. 至少有 1 位重复的数字
 * https://leetcode-cn.com/contest/weekly-contest-128/problems/numbers-with-repeated-digits/
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var numDupDigitsAtMostN1 = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const str = i
      .toString()
      .split('')
      .sort(function(a, b) {
        return a.localeCompare(b);
      })
      .join('');
    if (/(\d)\1{1}/.test(str)) count++;
  }
  return count;
};

var numDupDigitsAtMostN2 = function(N) {
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

var numDupDigitsAtMostN = function(N) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    const str = i.toString();
    let flag = null;
    for (let j = 0; j < str.length && j < 10; j++) {
      const reg = new RegExp(`${str[j]}`, 'g');
      flag = str.match(reg);
      if (flag && flag.length > 1) {
        arr.push(i);
        break;
      }
    }
  }
  return arr.length;
};

console.log(numDupDigitsAtMostN(20)); // 1

console.log(numDupDigitsAtMostN(100)); // 10

console.log(numDupDigitsAtMostN(738935)); // 609230

console.log(numDupDigitsAtMostN(6718458)); // 6205653
