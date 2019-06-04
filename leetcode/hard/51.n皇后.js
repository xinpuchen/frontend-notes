/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (59.56%)
 * Likes:    168
 * Dislikes: 0
 * Total Accepted:    8.2K
 * Total Submissions: 13.1K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 *
 *
 * 上图为 8 皇后问题的一种解法。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 *
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 示例:
 *
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 *
 *
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  return solve([], n);
};

function solve(l, n) {
  const list = [];
  const f = new Array(n).fill().map(() => new Array(n).fill(false));
  const a = new Array(n).fill();

  let i = 0, j = -1;
  while (i < l.length) {
    fill(a, f, l[i]);
    i++;
  }
  if (i === n) {
    list.push(a);
  } else {
    while ((j = f[i].indexOf(false, j + 1)) !== -1) {
      list.push(...solve([].concat(l, [[i, j]]), n));
    }
  }
  return list;
}

function fill(a, f, [x, y]) {
  a[x] = 'Q'.padStart(y + 1, '.')
            .padEnd(f[x].length, '.');
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
