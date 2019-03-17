/** 1012. 十进制整数的补码
 * https://leetcode-cn.com/contest/weekly-contest-128/problems/complement-of-base-10-integer/
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let arr = N.toString(2).split('');
  arr = arr.map(e => Math.abs(Number(e) - 1));
  return parseInt(arr.join('') , 2);
};