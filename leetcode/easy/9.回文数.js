/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * https://leetcode-cn.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (56.06%)
 * Total Accepted:    80.5K
 * Total Submissions: 143.7K
 * Testcase Example:  '121'
 *
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 *
 * 示例 1:
 *
 * 输入: 121
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 *
 * 示例 3:
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 *
 *
 * 进阶:
 *
 * 你能不将整数转为字符串来解决这个问题吗？
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0)
      return false;
    return verifyPalindrome(getNumArr(x));
};

function getNumArr(x) {
  const arr = [];
  let i = 0;
  do {
    arr[i] = x % 10;
    x = Math.floor(x / 10);
    i++;
  } while (x > 0);
  return arr;
}

function verifyPalindrome (arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if(arr[i] !== arr[arr.length - i - 1])
      return false;
  }
  return true;
}

// console.log(isPalindrome(121));

