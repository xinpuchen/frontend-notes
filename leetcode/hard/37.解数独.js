/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (50.25%)
 * Likes:    154
 * Dislikes: 0
 * Total Accepted:    6K
 * Total Submissions: 11.3K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 *
 * 一个数独的解法需遵循如下规则：
 *
 *
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 *
 *
 * 空白格用 '.' 表示。
 *
 *
 *
 * 一个数独。
 *
 *
 *
 * 答案被标成红色。
 *
 * Note:
 *
 *
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 *
 *
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // 记录某行，某位数字是否已经被摆放
  const row = new Array(9).fill().map(() => new Array(10).fill(false));
  // 记录某列，某位数字是否已经被摆放
  const col = new Array(9).fill().map(() => new Array(10).fill(false));
  // 记录某 3x3 宫格内，某位数字是否已经被摆放
  const block = new Array(9).fill().map(() => new Array(10).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isNaN(board[i][j])) {
        const num = Number(board[i][j]);
        row[i][num] = true;
        col[j][num] = true;
        block[getCellNum(i, j)][num] = true;
      }
    }
  }
  dfs(board, row, col, block, 0, 0);
};

function dfs(board, row, col, block, i, j) {
  // 找寻空位置
  while (!isNaN(board[i][j])) {
    if (++j >= 9) {
      i++;
      j = 0;
    }
    if (i >= 9) {
      return true;
    }
  }
  for (let num = 1; num <= 9; num++) {
    let blockIndex = getCellNum(i, j);
    if (!row[i][num] && !col[j][num] && !block[blockIndex][num]) {
      // 递归
      board[i][j] = String(num);
      row[i][num] = true;
      col[j][num] = true;
      block[blockIndex][num] = true;
      if (dfs(board, row, col, block, i, j)) {
        return true;
      } else {
        // 回溯
        row[i][num] = false;
        col[j][num] = false;
        block[blockIndex][num] = false;
        board[i][j] = '.';
      }
    }
  }
  return false;
}

function getCellNum(i, j) {
  return ~~(j / 3) + ~~(i / 3) * 3;
}

module.exports = solveSudoku;
