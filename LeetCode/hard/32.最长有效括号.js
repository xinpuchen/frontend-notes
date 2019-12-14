/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.64%)
 * Likes:    223
 * Dislikes: 0
 * Total Accepted:    10.5K
 * Total Submissions: 39.3K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 *
 * 示例 2:
 *
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let parenthesesArr = [];
  let noValidArr = [];
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '(') {
      parenthesesArr.push(index);
    } else {
      // if (s[index] === ')')
      if (parenthesesArr.length > 0) {
        parenthesesArr.pop();
      } else {
        noValidArr.push(index);
      }
    }
  }
  const arr = [-1, ...parenthesesArr, ...noValidArr, s.length].sort(
    (a, b) => a - b,
  );
  return arr.reduce((s, e, i, a) => {
    if (i > 0) {
      let d = e - a[i - 1] - 1;
      s = s > d ? s : d;
    }
    return s;
  }, 0);
};

// console.log(longestValidParentheses('(()'));
// console.log(longestValidParentheses(')(()('));
