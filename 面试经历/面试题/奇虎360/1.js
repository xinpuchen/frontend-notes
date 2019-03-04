/**
 *
 * 题目描述：
 * 圈地运动，就是用很多木棍摆在地上组成一个面积大于0的多边形～
 * 小明喜欢圈地运动，于是他需要去小红店里面买一些木棍，期望圈出一块地来。小红想挑战一下小明，所以给小明设置了一些障碍。障碍分别是：
 * 1.如果小明要买第i块木棍的话，他就必须把前i-1块木棍都买下来。
 * 2.买了的木棍都必须用在圈地运动中。
 * 那么请问小明最少买多少根木棍，才能使得木棍围成的图形是个面积大于0多边形呢？
 * 输入
 * 第一行一个数n，表示木棍个数。 第二行n个数，第i个数表示第i个木棍的长度ai 1<=n<=10000 1<=ai<=10000
 *
 * 输出
 * 输出一个数，表示最少需要的木棍个数，如果无解输出-1
 *
 * 样例输入
 * 3
 * 6 8 10
 *
 * 样例输出
 * 3
 *
 * Hint
 * 【解释】
 * 用三根6，8，10的木棍可以组成一个直角三角形的图形。
 */
const N = 5,
  array = [6, 8, 14, 12, 14, 15, 16, 17],
  testPolygon = (n, arr) => {
    let testFlag = null;
    if (n === 3)
      return arr[0] + arr[1] > arr[2] && arr[2] > Math.abs(arr[0] - arr[1])
        ? true
        : -1;
    const max = Math.max(...arr),
      sum = arr.reduce((prev, curr, idx, arr) => {
        return prev + curr;
      });
    return sum > max * 2 ? true : -1;
  },
  count = (n, arr) => {
    let test = -1;
    for (let index = 3; index <= n; index++) {
      if (testPolygon(index, arr.slice(0, index)) !== -1) {
        return index;
      }
    }
    return -1;
  },
  main = (n = N, arr = array) => {
    const num = count(n, arr);
    if (num === -1) {
      console.log(`无解`);
    } else {
      console.log(`最少需要${num}个木棍`);
    }
    return;
  };

main();
