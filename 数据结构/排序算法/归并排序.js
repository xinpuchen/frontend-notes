const { check, swap, Arr } = require('./sort');

/**
 * 归并排序的原理如下：
 * 递归的将数组两两分开直到最多包含两个元素，然后将数组排序合并，最终合并为排序好的数组。
 * 假设我有一组数组 [3, 1, 2, 8, 9, 7, 6]，中间数索引是 3，先排序数组 [3, 1, 2, 8] 。
 * 在这个左边数组上，继续拆分直到变成数组包含两个元素（如果数组长度是奇数的话，会有一个拆分数组只包含一个元素）。
 * 然后排序数组 [3, 1] 和 [2, 8] ，然后再排序数组 [1, 3, 2, 8] ，这样左边数组就排序完成，
 * 然后按照以上思路排序右边数组，最后将数组 [1, 2, 3, 8] 和 [6, 7, 9] 排序。
 *
 * 该算法的操作次数是可以这样计算：
 * 递归了两次，每次数据量是数组的一半，并且最后把整个数组迭代了一次，
 * 所以得出表达式 2T(N / 2) + T(N) （T 代表时间，N 代表数据量）。
 * 根据该表达式可以套用 该公式 得出时间复杂度为 O(N * logN)
 */

const mergeSort = (arr, left, right) => {
  // 左右索引相同说明已经只有一个数
  if (left === right) return;
  // 等同于 `left + (right - left) / 2`，相比 `(left + right) / 2` 来说更加安全，不会溢出
  // 使用位运算是因为位运算比四则运算快
  let mid = parseInt(left + ((right - left) >> 1));
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);

  let help = [];
  let i = 0;
  let p1 = left;
  let p2 = mid + 1;
  while (p1 <= mid && p2 <= right) {
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    help[i++] = arr[p1++];
  }
  while (p2 <= right) {
    help[i++] = arr[p2++];
  }
  for (let i = 0; i < help.length; i++) {
    arr[left + i] = help[i];
  }
  return arr;
};

(arr => {
  check(arr);
  mergeSort(arr, 0, arr.length - 1);
  return console.log(...arr);
})(Arr);
