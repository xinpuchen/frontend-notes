const { check, swap, Arr } = require("./sort");

/**
 * 选择排序的原理如下：
 * 遍历数组，设置最小值的索引为 0，如果取出的值比当前最小值小，就替换最小值索引，
 * 遍历完成后，将第一个元素和最小值索引上的值交换。
 * 如上操作后，第一个元素就是数组中的最小值，下次遍历就可以从索引 1 开始重复上述操作。
 *
 * 该算法的操作次数是一个等差数列 n + (n - 1) + (n - 2) + 1 ，去掉常数项以后得出时间复杂度是 O(n * n)
 */

((arr = Arr) => {
  check(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minindex = arr[j] < arr[minindex] ? j : minindex;
    }
    swap(arr, i, minindex);
  }
  return console.log(...arr);
})();
