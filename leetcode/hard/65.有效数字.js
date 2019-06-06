/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 *
 * https://leetcode-cn.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (13.95%)
 * Likes:    30
 * Dislikes: 0
 * Total Accepted:    3.5K
 * Total Submissions: 23.3K
 * Testcase Example:  '"0"'
 *
 * 验证给定的字符串是否可以解释为十进制数字。
 *
 * 例如:
 *
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 *
 * 说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：
 *
 *
 * 数字 0-9
 * 指数 - "e"
 * 正/负号 - "+"/"-"
 * 小数点 - "."
 *
 *
 * 当然，在输入中，这些字符的上下文也很重要。
 *
 * 更新于 2015-02-10:
 * C++函数的形式已经更新了。如果你仍然看见你的函数接收 const char * 类型的参数，请点击重载按钮重置你的代码。
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.trim();
  return isInteger(s) || isDecimal(s) || isIndices(s);
};

function isInteger(s, flag) { // {string} flag: ["noSign", "hasNumber"]
  const a = '+-0123456789'.split('');
  for (let index = 0; index < s.length; index++) {
    if (index === 0) {
      if (a.indexOf(s[index], flag === 'noSign' ? 2 : 0) === -1) return false;
      if (flag === 'hasNumber' && s.length < 2 && (a[0] === s[index] || a[1] === s[index])) return false;
    } else {
      if (a.indexOf(s[index], 2) === -1) return false;
    }
  }
  return !!s;
}

function isDecimal(s) {
  const index = (s[0] === '+' || s[0] === '-') ? 1 : 0;
  const a = s.slice(index).split('.');
  if (a.length === 2
    && (a[0] || a[1])
    && (a[0] && isInteger(a[0], 'noSign') || !a[0])
    && (a[1] && isInteger(a[1], 'noSign') || !a[1]))
      return true;
  return false;
}

function isIndices(s) {
  const index = (s[0] === '+' || s[0] === '-') ? 1 : 0;
  const a = s.slice(index).split('e');
  if (a.length === 2
    && a[0] && a[1]
    && (isDecimal(a[0], 'noSign') || isInteger(a[0], 'noSign'))
    && isInteger(a[1], 'hasNumber'))
      return true;
  return false;
}
