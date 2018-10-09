/**
 * 小明非常喜欢与区间相关的问题？
 * 这一次他有一对数字 l 和 r。小明想找出多少个数字 x(l <= x <= r),
 * 满足 x 的十进制表示的第一位数字和最后一位数字，当然 x 不能含有前
 * 导 0 。比如 989， 2， 1001 就满足条件的数字，但是 49，10，972
 * 都不满足条件。
 *
 * 输入描述：
 * 两个数字 l 和 r，用一个空格分隔。
 * 满足 1 <= l <= r <= 10^18
 *
 * 输出描述：
 * 一个整数，满足条件的数字的个数。
 *
 * 示例一：
 * 输入
 * 1 10
 * 输出
 * 9
 *
 * 示例二：
 * 输入
 * 88 100
 * 输出
 * 2
 */

const L = 88,
  R = 100,
  check = i => {
    let arr1 = i.split(""),
      arr2 = arr1.slice(0).reverse();
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] == arr2[i]) {
        return true;
      } else {
        return false;
      }
    }
  },
  Num = (l = L, r = R, count = 0) => {
    if (l >= 1 && l <= Math.pow(10, 18) && r >= 1 && r <= Math.pow(10, 18)) {
      for (let i = l; i <= r; i++) {
        i = i.toString();
        if (check(i)) count++;
        // if (i.length === 1 || i.charAt(0) === i.charAt(i.length - 1)) {
        //   count++;
        // }
      }
      return count;
    }
    return 0;
  };
console.log(`满足条件的数字的个数:${Num()}`);
