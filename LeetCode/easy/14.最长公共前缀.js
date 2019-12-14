/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.27%)
 * Total Accepted:    70.3K
 * Total Submissions: 214.7K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const len = Math.min(...strs.map(e => e.length));
  let str = '';
  if (strs.length <= 0) return str;
  for (let i = 0; i < len; i++) {
    const el = strs[0][i];
    if (!strs.every(e => e[i] === el)) return str;
    str += el;
  }
  return str;
};

// console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"

// console.log(longestCommonPrefix(["dog","racecar","car"])); // ""

// console.log(longestCommonPrefix([])); // ""
