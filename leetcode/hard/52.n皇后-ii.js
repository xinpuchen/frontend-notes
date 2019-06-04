/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 *
 * https://leetcode-cn.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (70.64%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    5.5K
 * Total Submissions: 7.6K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回 n 皇后不同的解决方案的数量。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: 2
 * 解释: 4 皇后问题存在如下两个不同的解法。
 * [
 * [".Q..",  // 解法 1
 * "...Q",
 * "Q...",
 * "..Q."],
 *
 * ["..Q.",  // 解法 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  return solve([], n);
};

function solve(l, n) {
  const f = new Array(n).fill().map(() => new Array(n).fill(false));

  let index = 0, i = 0, j = -1;
  while (i < l.length) {
    fill(f, l[i]);
    i++;
  }
  if (i === n) {
    index++;
  } else {
    while ((j = f[i].indexOf(false, j + 1)) !== -1) {
      index += solve([].concat(l, [[i, j]]), n);
    }
  }
  return index;
}

function fill(f, [x, y]) {
  f[x].fill(true);
  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < f[i].length; j++) {
      if (!f[i][j]
        && (i === x || j === y || Math.abs(i - x) === Math.abs(j - y))) {
        f[i][j] = true;
      }
    }
  }
}

