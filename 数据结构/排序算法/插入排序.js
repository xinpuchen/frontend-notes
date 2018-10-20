const { check, swap, Arr } = require("./sort");

/**
 * 插入排序的原理如下：
 * 第一个元素默认是已排序元素，取出下一个元素和当前元素比较，如果当前元素大就交换位置。
 * 那么此时第一个元素就是当前的最小数，所以下次取出操作从第三个元素开始，向前对比，重复之前的操作。
 *
 * 该算法的操作次数是一个等差数列 n + (n - 1) + (n - 2) + 1 ，去掉常数项以后得出时间复杂度是 O(n * n)
 */

((arr = Arr) => {
  check(arr);
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return console.log(...arr);
})();
