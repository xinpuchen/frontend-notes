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
  const o = {};
  check:
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (isNaN(board[row][column])) {
        o[`${row}-${column}`] = validValue(board, row, column);
        if (o[`${row}-${column}`] && o[`${row}-${column}`].length === 1) {
          board[row][column] = String(o[`${row}-${column}`][0]);
          delete o[`${row}-${column}`];
          console.log(row, column, board[row][column]);
          this.print(board);
          row = -1;
          continue check;
        }
      }
    }
  }
};

function validValue(b, r, c) {
  const arr = new Array(9).fill(0);
  const R = Math.floor(r / 3) * 3, C = Math.floor(c / 3) * 3;
  for (let index = 0; index < b.length; index++) {
    let x = b[index][c];
    let y = b[r][index];
    let z = b[R + index % 3][C + Math.floor(index / 3)];
    if (!isNaN(x--)) arr[x]++;
    if (!isNaN(y--)) arr[y]++;
    if (!isNaN(z--)) arr[z]++;
  }
  return arr.map((e, i) => e === 0 ? i + 1 : 0).filter(e => e !== 0);
}

var solveSudoku2 = function(board) {
  var r = new Array(9),
      c = new Array(9),
      b = new Array(9);
  var i, j;
  for (i = 0;i < 9;++i) {
      r[i] = new Array(9);
      c[i] = new Array(9);
      b[i] = new Array(9);
  }

  for (i = 0;i < 9;++i) {
      for (j = 0;j < 9;++j) {
          if (board[i][j] === '.') {
              continue;
          }
          var temp = +board[i][j] - 1;
          r[i][temp] = c[temp][j] = b[~~(j/3)+~~(i/3)*3][temp] = true;
          console.log(i, temp, j, ~~(j/3)+~~(i/3)*3)
      }
  }
  i = j = 0;
  var stack = [],k, coord;
  while (true) {
      if (i === 9 && j === 0) {
          break;
      }
      if (board[i][j] === '.') {
          for (k = 0;k < 9;++k) {
              if (!(r[i][k] || c[k][j] || b[~~(j/3)+~~(i/3)*3][k])) {
                  board[i][j] = String(k+1);
                  r[i][k] = c[k][j] = b[~~(j/3)+~~(i/3)*3][k] = true;
                  stack.push({i:i,j:j,v:k});
                  break;
              }
          }
          if (k >= 9) {
              //Assume that there exists at least one solution
              while ((coord=stack.pop()).v >= 8) {
                  board[coord.i][coord.j] = '.';
                  r[coord.i][coord.v]
                      = c[coord.v][coord.j]
                      = b[~~(coord.j/3)+~~(coord.i/3)*3][coord.v] = false;
              }
              i = coord.i;
              j = coord.j;
              board[i][j] = String(coord.v +2);
              stack.push({i:i,j:j,v:coord.v + 1});
              r[i][coord.v]
                  = c[coord.v][j]
                  = b[~~(j/3)+~~(i/3)*3][coord.v] = false;
              r[i][coord.v + 1]
                  = c[coord.v + 1][j]
                  = b[~~(j/3)+~~(i/3)*3][coord.v + 1] = true;
          }
      }
      if (j >= 8) {
          j = 0;
          ++i;
      } else {
          ++j;
      }
  }
};

module.exports = solveSudoku2;
