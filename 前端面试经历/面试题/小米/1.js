/**
 * 给定n个非负整数，表示直方图的方柱的高度，同时，每个方柱的宽度假定都为1。
 * 若使用这样形状的容器收集雨水，可以盛多少水量？
 */

const Arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
  // const Arr = read_line().split(','),
  fn = (arr = Arr) => {
    let left = 0,
      right = arr.length - 1,
      res = 0;
    if (left >= right) return res;
    let leftArr = arr[left],
      rightArr = arr[right];
    while (left < right) {
      if (leftArr < rightArr) {
        left++;
        if (leftArr > arr[left]) {
          res += leftArr - arr[left];
        } else {
          leftArr = arr[left];
        }
      } else {
        right--;
        if (rightArr > arr[right]) {
          res += rightArr - arr[right];
        } else {
          rightArr = arr[right];
        }
      }
    }
    return res;
  };
  console.log(fn());
// print(fn());
