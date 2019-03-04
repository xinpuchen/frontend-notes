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

function replaceSpace(str) {
  return str.replace(/\s/g, '%20');
}

module.exports = {
  find,
  replaceSpace,
};
