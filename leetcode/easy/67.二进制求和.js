/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.79%)
 * Likes:    201
 * Dislikes: 0
 * Total Accepted:    26.7K
 * Total Submissions: 54.8K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const max = Math.max(a.length, b.length);
  const arr = new Array(max).fill('0');
  a = a.padStart(max, '0');
  b = b.padStart(max, '0');
  for (let index = max - 1; index >= 0; index--) {
    arr[index] = arr[index] * 1 + a[index] * 1 + b[index] * 1;
    if (arr[index] > 1) {
      if (index === 0) {
        arr.unshift(~~(arr[index] / 2));
        arr[index + 1] = arr[index + 1] % 2;
      } else {
        arr[index - 1] = ~~(arr[index] / 2);
        arr[index] = arr[index] % 2;
      }
    }
  }
  return arr.join('');
};

