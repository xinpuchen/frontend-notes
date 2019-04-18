/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (69.02%)
 * Total Accepted:    19.8K
 * Total Submissions: 28.5K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const o = {};
  if (n === 1)
    return [str];
  const start = 2 ** (n - 1);
  const end = 2 ** n * start;
  for (let index = start; index < end; index++) {
    const s = index.toString(2).padStart(n * 2, '0');
    const m0 = s.split('0').length - 1;
    const m1 = n * 2 - m0;
    if (m0 !== m1)
      continue;
    let si = s.indexOf('0');
    let sj = s.indexOf('1');
    let f = true;
    for (let i = 0; i < n; i++) {
      // console.log(s, si, sj)
      if (sj <= si) {
        f = false;
        break;
      }
      si = s.indexOf('0', si + 1);
      sj = s.indexOf('1', sj + 1);
    }
    if (f)
      o[s] = true
  }
  return Object
    .keys(o)
    .map(e => e
      .replace(/0/g, str[0])
      .replace(/1/g, str[1]));
};

var generateParenthesis2 = function(n) {
  const o = {};
  for (let index = 0; index < n ** (n * 2 - 1); index++) {
    const f = new Array(n).fill(0);
    const t = [];
    const s = index.toString(n).padStart(n * 2, '0');
    // s === '001122' && console.log(s, f.some(e => e !== 1));
    if (s.split(0).length !== 3)
      continue;
    for (let i = 0; f.every(e => e <= 2) && i < s.length; i++) {
      const j = s[i] * 1;
      // s === '001122' && console.log(i, j);
      t.push(str[f[j]++]);
    }
    // s === '001122' && console.log(f, f.every(e => e === 1))
    if (f.every(e => e === 2)) {
      o[t.join('')] = true;
      // console.log(s)
    }
  }
  return Object.keys(o).reverse();
};

var str = '()';

console.log(...generateParenthesis(1));

console.log(...generateParenthesis(3));

console.log(...generateParenthesis(5));

