/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 *
 * https://leetcode-cn.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (20.90%)
 * Likes:    143
 * Dislikes: 0
 * Total Accepted:    5.6K
 * Total Submissions: 24.6K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 *
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 *
 *
 * 两个字符串完全匹配才算匹配成功。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 * 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 * 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 *
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let prev = [];
  let now = [];
  for (let i = 0; i <= s.length; i++) {
    let tmp = prev;
    prev = now;
    now = tmp;
    now[0] = i === 0;
    for (let j = 1; j <= p.length; j++) {
      now[j] =
        p[j - 1] === '*'
          ? prev[j] || prev[j - 1] || now[j - 1]
          : prev[j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '?');
    }
  }
  return !!now[p.length];
};

// console.log(isMatch('', '*')); // true
// console.log(isMatch('aa', '*')); // true
// console.log(isMatch('aab', 'c*a*b')); // false
// console.log(isMatch('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba', 'a*******b')); // false
// console.log(isMatch('a', 'a*')); // true
// console.log(isMatch('abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb', '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb')); // false
