/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (45.20%)
 * Likes:    82
 * Dislikes: 0
 * Total Accepted:    8.8K
 * Total Submissions: 19.1K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 *
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * 给定 n 和 k，返回第 k 个排列。
 *
 * 说明：
 *
 *
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 *
 *
 * 示例 1:
 *
 * 输入: n = 3, k = 3
 * 输出: "213"
 *
 *
 * 示例 2:
 *
 * 输入: n = 4, k = 9
 * 输出: "2314"
 *
 *
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const array = new Array(n).fill().map((e, i) => i + 1);
  const arr = [1];
  let index = 2;
  let str = '';
  while (index < n) {
    arr.unshift(arr[0] * index);
    index++;
  }
  while (str.length < n) {
    const temp = array.splice(Math.ceil(k / arr[str.length] - 1), 1)[0];
    k %= arr[str.length];
    str += temp;
  }
  return str;
};
