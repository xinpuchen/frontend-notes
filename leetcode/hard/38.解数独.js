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
  const row = new Array(9).fill().map(() => new Array(9).fill(false));
  const column = new Array(9).fill().map(() => new Array(9).fill(false));
  const cell = new Array(9).fill().map(() => new Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!isNaN(board[i][j])) {
        const temp = + board[i][j] - 1;
        const n = getCellNum(i, j);
        row[i][temp] = column[j][temp] = cell[n][temp] = true;
      }
    }
  }

  let stack = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const n = getCellNum(i, j);
      if (isNaN(board[i][j])) {
        for (let k = 0; k < 9; k++) {
          if (!(row[i][k] || column[j][k] || cell[n][k])) {
            stack.push({i, j, v: k});
          }
        }
      };
    }
  }
  outer:
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const n = getCellNum(i, j);
      const settleValue = k => e => e.i === i && e.j === j && (k === -1 || k === e.v);
      const settleValueRow = k => e => e.i === i && e.v === k;
      const settleValueColumn = k => e => e.j === j && e.v === k;
      const settleValueCell = k => e => 
      getCellNum(e.i, e.j) === n && e.v === k;
      // if (isNaN(board[i][j])) {
      //   for (let k = 0; k < 9; k++) {
      //     if (!(row[i][k] || column[j][k] || cell[n][k]) && stack.findIndex(settleValue(k)) === -1) {
      //       stack.push({i, j, v: k});
      //     }
      //   }
      // };
      // 有唯一确定值
      if (stack.filter(settleValue(-1)).length === 1) {
        const o = stack.splice(
            stack.findIndex(settleValue(-1)),
            1,
          )[0];
        setSudoku(board, row, column, cell, stack, o);
        i = 0;
        continue outer;
      }
      for (let k = 0; k < 9; k++) {
        // 单行内有确定值
        if (!row[i][k] && stack.filter(settleValueRow(k)).length === 1) {
          const o = stack.splice(
              stack.findIndex(settleValueRow(k)),
              1,
            )[0];
          setSudoku(board, row, column, cell, stack, o);
          i = 0;
          continue outer;
        }
        // 单列内有确定值
        if (!column[j][k] && stack.filter(settleValueColumn(k)).length === 1) {
          const o = stack.splice(
              stack.findIndex(settleValueColumn(k)),
              1,
            )[0];
          setSudoku(board, row, column, cell, stack, o);
          i = 0;
          continue outer;
        }
        // 九宫格内有确定值
        if (!cell[n][k] && stack.filter(settleValueCell(k)).length === 1) {
          const o = stack.splice(
              stack.findIndex(settleValueCell(k)),
              1,
            )[0];
          setSudoku(board, row, column, cell, stack, o);
          i = 0;
          continue outer;
        }
      }
    }
    // if (i >= 8 && stack.length !== 0) {
    //   i = 0;
    //   continue outer;
    // }
  }
  for (let index = 0; index < stack.length; index++) {
    board[stack[index].i][stack[index].j] += String(+stack[index].v + 1);
  }
  this.print(board);
  debugger
};

function setSudoku(board, row, column, cell, stack, {i, j, v}) {
  while(true) {
    const index = stack.findIndex(e => i === e.i && j === e.j
      || v === e.v
        && (i === e.i || j === e.j
          || getCellNum(i, j) === getCellNum(e.i, e.j))
    );
    if (index === -1)
      break;
    stack.splice(index, 1);
  }
  // console.log(i, j, v)
  if (isNaN(board[i][j])) {
    board[i][j] = String(+v + 1);
    row[i][v] = column[j][v] = cell[getCellNum(i, j)][v] = true;
  }
}

function getCellNum(i, j) {
  return ~~(j / 3) + ~~(i / 3) * 3;
}

module.exports = solveSudoku;
