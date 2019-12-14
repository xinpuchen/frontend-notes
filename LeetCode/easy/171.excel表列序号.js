/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-number/description/
 *
 * algorithms
 * Easy (63.10%)
 * Total Accepted:    11.7K
 * Total Submissions: 18.4K
 * Testcase Example:  '"A"'
 *
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
 *
 * 例如，
 *
 * ⁠   A -> 1
 * ⁠   B -> 2
 * ⁠   C -> 3
 * ⁠   ...
 * ⁠   Z -> 26
 * ⁠   AA -> 27
 * ⁠   AB -> 28
 * ⁠   ...
 *
 *
 * 示例 1:
 *
 * 输入: "A"
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: "AB"
 * 输出: 28
 *
 *
 * 示例 3:
 *
 * 输入: "ZY"
 * 输出: 701
 *
 * 致谢：
 * 特别感谢 @ts 添加此问题并创建所有测试用例。
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let i = 0;
  return s.split('').reduceRight((s, e) => {
    const n = getNum(e) * 26 ** i;
    i++;
    return s + n;
  }, 0);
};

function getNum(e) {
  return e.charCodeAt() - 'A'.charCodeAt() + 1;
}

// console.log(titleToNumber('ZY'));
