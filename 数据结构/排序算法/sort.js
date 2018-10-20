module.exports = {
  check: array => {
    if (!array || array.length <= 2) return;
  },
  swap: (array, left, right) => {
    let rightValue = array[right];
    array[right] = array[left];
    array[left] = rightValue;
    return;
  },
  Arr: [3, 4, 5, 9, 10, 2, 4, 6, 8, 11]
};
