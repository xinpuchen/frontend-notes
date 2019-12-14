/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (48.07%)
 * Likes:    241
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 14.1K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 * 示例 1:
 *
 * 输入: word1 = "horse", word2 = "ros"
 * 输出: 3
 * 解释:
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2:
 *
 * 输入: word1 = "intention", word2 = "execution"
 * 输出: 5
 * 解释:
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  if (!isNaN(OBJECT[`${word1}-${word2}`])) return OBJECT[`${word1}-${word2}`];
  if (word1.length === 0 || word2.length === 0)
    return Math.max(word1.length, word2.length);
  if (word1[0] === word2[0]) {
    return minDistance(word1.slice(1), word2.slice(1)); // word1 和 word2 首字符相同
  }
  OBJECT[`${word1}-${word2}`] =
    Math.min(
      minDistance(word1.slice(1), word2.slice(1)), // 替换 word1 首字符 为 word2 首字符
      minDistance(word1.slice(1), word2.slice(0)), // 删除 word1 首字符
      minDistance(word1.slice(0), word2.slice(1)), // word1 插入 word2 首字符
    ) + 1;
  return OBJECT[`${word1}-${word2}`];
};
var OBJECT = {};

// console.log(minDistance('horse', 'ros'));
// console.log(minDistance('dinitrophenylhydrazine', 'acetylphenylhydrazine'));
