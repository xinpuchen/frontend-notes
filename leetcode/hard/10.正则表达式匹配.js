/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (21.39%)
 * Total Accepted:    10.9K
 * Total Submissions: 50.6K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符。
 * '*' 匹配零个或多个前面的元素。
 *
 *
 * 匹配应该覆盖整个字符串 (s) ，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: '*' 代表可匹配零个或多个前面的元素, 即可以匹配 'a' 。因此, 重复 'a' 一次, 字符串可变为 "aa"。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个('*')任意字符('.')。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 'c' 可以不被重复, 'a' 可以被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // return RegExp(`^${p}$`).test(s);
    // console.log(s, p)
    let strIndex = 0;
    for (let i = 0; i < p.length; ) {
      if (p[i] === '*' && i > 0) {
        for (let j = strIndex; j <= s.length; ) {
          // console.log(p[i - 1], s[j], matchChar(p[i - 1], s[j]))
          const matchFlag = isMatch(s.substring(j), p.substring(i + 1));
          if (matchChar(p[i - 1], s[j]))
            j++;
          else if (!matchFlag)
            return false;
          // console.log(j, i)
          if (matchFlag || j === s.length && i + 1 === p.length)
            return true;
        }
        return false;
      } else {
        if (i + 1 < p.length && p[i + 1] === '*') {
          i++;
          continue;
        }
        // console.log(s, s[strIndex], p, i)
        if (!matchChar(p[i], s[strIndex]))
          return false;
        i++;
        strIndex++;
      }
    }
    if (strIndex === s.length)
      return true;
    return false;
};

function matchChar(c, s) {
  if(c === s || c === '.')
    return true;
  return false;
}

// console.log(isMatch('aa', 'a'));

// console.log(isMatch('aa', 'a*'));

// console.log(isMatch('ab', '.*'));

// console.log(isMatch('aab', 'c*a*b'));

// console.log(isMatch('mississippi', 'mis*is*p*.'));

// console.log(isMatch('mississippi', 'mis*is*ip*.'));

// console.log(isMatch('ab', '.*c'));

// console.log(isMatch('a', 'ab*'));

