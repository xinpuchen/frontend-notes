/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (37.85%)
 * Likes:    149
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 41.7K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let array = [];
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  for (let index = 0; index < num1.length; index++) {
    let s = [];
    for (let i = 0; i < num2.length; i++) {
      s[i] = String(num1[index] * num2[i]);
    }
    array[index] = s.reduceRight((p, e, i, a) => {
      const lens = a.length - i - 1;
      return add(p.slice(0, p.length - lens), e) + p.slice(p.length - lens);
    }, '0');
  }
  return array.reduceRight((p, e, i, a) => {
    const lens = a.length - i - 1;
    return add(p.slice(0, p.length - lens), e) + p.slice(p.length - lens);
  }, '0');
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  if (num1.length < 16 && num2.length < 16) {
    return String(num1 * 1 + num2 * 1);
  }
  const lens = Math.max(num1.length, num2.length);
  num1 = num1.padStart(lens, '0');
  num2 = num2.padStart(lens, '0');
  let s = '';
  let augment = 0;
  for (let index = lens - 1; index >= 0; index--) {
    const n = num1[index] * 1 + num2[index] * 1 + augment;
    s = (n % 10) + s;
    augment = ~~(n / 10);
  }
  return augment === 0 ? s : augment + s;
}

// console.log(multiply("123", "456")); // 56088
// console.log(multiply("123", "0")); // 0
// console.log(multiply("23108814760092", "55183904456427981")); // 1275234625822209623419790934252
