/**
 * 小明非常喜欢序列，他喜欢感受序列的各种美。
 * 现在他又得到了一个序列，包含n个整数。小明把一个序列的子段定义如下：
 * 序列x的一个子段是一个序列Xp，Xp+1,Xp+2….Xk（1<=p<=k<=n)，这个序列的长度是k-p+1。
 * 现在小明用这个序列出了一个题目来考验你的编码能力：
 * 找出一个最长的子段，改变其中最多一个整数，变为其它任何一个整数之后，这个子段是严格递增的。
 * 你需要输出这个子段的长度。
 *
 * 输入描述：
 * 第一行一个整数n，表示序列中数字的个数；
 * 第二行n个整数Xi，每两个整数之间用一个空格分隔。
 * 满足1<=n<=10^5；1<=ai<=10^9。
 * 输出描述：
 * 一个整数，表示满足条件的最长子段的长度。
 *
 * 示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
 * 2
 * 3 6
 * 输出
 * 2
 * 示例2 输入输出示例仅供调试，后台判题数据一般不包含示例
 * 输入
 * 3
 * 7 1 9
 * 输出
 * 3
 */
const N = 2,
  ARRAY = [
    7, 1, 9, 5, 10
  ],
  getArr = (index = 0, n = N, arr = ARRAY) => {
    let lastIndex = index,
      flag = 0;
    for (let i = 0; i < arr.length; i++) {
      const e = arr[i];
      if (i > index) {
        if (e <= arr[i - 1]) {
          // console.log(i, e, e <= arr[i - 1], lastIndex);
          if (arr[i + 1] - arr[i - 1] <= 1) {
            arr[i] = 'b';
          } else {
            arr[i] = 'a';
          }
        } else {
          lastIndex = i;
        }
      }
    }
    return arr;
  },
  count = (str = "", arr = []) => {
    let a1 = str.split('a');
    a1.forEach((e, i, a) => {
      a[i] = a[i]
        .split(',')
        .filter(e => e);
      if (i > 0) {
        // console.log(a[i - 1], a[i]);
        arr.push(a[i - 1].length + a[i].length + 1)
      } else if (a.length === 1) {
        // console.log(e, i, a);
        arr.push(a[i].length)
      }
    });
  };

const arr = getArr()
    .toString()
    .split('b'),
  nums = [];
arr.forEach(e => count(e, nums));
console.log(`满足条件的最长子段的长度${Math.max(...nums)}`);