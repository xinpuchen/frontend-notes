/**
 * 题目描述
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

const find = (
  target = 9,
  array = [[1, 2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 6, 7, 8, 9]],
) => {
  let colLength = array.length;
  let rowLength = array[0].length;
  let col = colLength - 1;
  let row = 0;
  while (row < rowLength && col >= 0) {
    if (array[col][row] < target) {
      row++;
      continue;
    } else if (array[col][row] > target) {
      col--;
      continue;
    } else {
      return true;
    }
  }
  return false;
};

const test = {
  tagrget: 9,
  arr: [[1, 2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7, 8], [3, 4, 5, 6, 7, 8, 9]],
};

console.log(find(test.tagrget, test.arr) ? '找到啦！' : '没有找到！');
