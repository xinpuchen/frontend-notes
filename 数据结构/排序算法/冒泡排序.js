const { check, swap, Arr } = require('./sort');

/**
 * 冒泡排序的原理如下：
 * 从第一个元素开始，把当前元素和下一个索引元素进行比较。
 * 如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素，那么此时最后一个元素就是该数组中最大的数。
 * 下一轮重复以上操作，但是此时最后一个元素已经是最大数了，所以不需要再比较最后一个元素，只需要比较到 length - 1 的位置。
 *
 * 该算法的操作次数是一个等差数列 n + (n - 1) + (n - 2) + 1 ，去掉常数项以后得出时间复杂度是 O(n * n)
 */

((arr = Arr) => {
  check(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return console.log(...arr);
})();
