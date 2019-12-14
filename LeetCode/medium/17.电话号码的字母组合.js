/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (48.02%)
 * Total Accepted:    21.2K
 * Total Submissions: 43.6K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const __arr = [];
  const arr = [];
  for (let i = 0; i < digits.length; i++) {
    __arr[i] = array[Number(digits[i]) - 1]; // .map(e => e.split(''));
  }
  for (let i = 0; i < 4 ** digits.length; i++) {
    let f = false;
    const n = Number(i)
      .toString(4)
      .padStart(digits.length, '0')
      .split('')
      .map((e, i) => {
        try {
          return __arr[i][Number(e)];
        } catch (error) {
          f = true;
        }
      });
    if (f || n.some(e => e === undefined)) continue;
    arr.push(n.join(''));
  }

  return arr;
};

var array = ['', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

// console.log(...letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// console.log(...letterCombinations('234')); // adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

// console.log(...letterCombinations('2')); // ["a","b","c"]
