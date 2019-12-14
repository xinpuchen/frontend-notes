/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (36.04%)
 * Likes:    143
 * Dislikes: 0
 * Total Accepted:    11.4K
 * Total Submissions: 30.3K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 *
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 * 示例:
 *
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 *
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 *
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const head = findHead(board, word[0]);
  for (let index = 0; index < head.length; index++) {
    if (findMap(board, word.slice(1), [head[index]])) return true;
  }
  return false;
};

function findMap(board, word, points) {
  if (word.length === 0) return true;
  const array = findAround(board, points[points.length - 1], word[0]);
  for (let index = 0; index < array.length; index++) {
    if (points.every(e => e.toString() !== array[index].toString())) {
      if (findMap(board, word.slice(1), points.concat([array[index]])))
        return true;
    }
  }
  return false;
}
function findHead(board, c) {
  return board.reduce((p, e, i) => {
    let index = -1;
    while ((index = e.indexOf(c, index + 1)) !== -1) {
      p.push([i, index]);
    }
    return p;
  }, []);
}
function findAround(board, [x, y], c) {
  const array = [];
  if (x < board.length - 1 && board[x + 1][y] === c) {
    array.push([x + 1, y]);
  }
  if (x > 0 && board[x - 1][y] === c) {
    array.push([x - 1, y]);
  }
  if (board[x][y + 1] === c) {
    array.push([x, y + 1]);
  }
  if (board[x][y - 1] === c) {
    array.push([x, y - 1]);
  }
  return array;
}

// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")
