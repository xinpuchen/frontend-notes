/**
 * 给定序列a：a1、a2、……、an 从左到右依次操作a[i]，生成新序列：
 * a[1]直接放新序列，从第二个数开始若a[i]>a[i-1]，放入当前新序列最右边，否则放入序列最左边，
 * 得到新序列b：b1、b2、……、bn
 * 现给定最终新序列，求原始序列有多少种可能?
 * 输入描述：
 * 第一行一个数n
 * 第二行n个数表示bi，且各不相同
 * 输出描述：
 * 一行一个数m，满足情况的原始序列数量mod 12345678
 *
 * 示例1 输入输出示例仅供调试，后台判题数据一般不包含示例
 * 4
 * 1 2 3 4
 * 输出
 * 8
 * 备注：
 * 数据约定：
 * n <= 1000
 * bi <= 5000
 */
const N = 4,
  ARRAY = [1, 2, 3, 4],
  pushCheck = (n = 0, arr = [], isR) => {
    arr = arr
      .map(e => {
        if ((isR && e[e.length - 1] > n) || (!isR && e[e.length - 1] < n)) {
          e.push(n);
          return e;
        } else {
          return false;
        }
      })
      .filter(e => !!e);
    return arr;
  },
  getWay = (arr = ARRAY) => {
    if (arr.length >= 2) {
      // const f=0,fArr = [arr[f]], e=arr.length-1,eArr = [arr[e]];
      const arr1 = arr.map(e => e),
        arr2 = arr.map(e => e),
        s = arr1.shift(),
        e = arr2.pop(),
        sArr = pushCheck(s, getWay(arr1), true),
        eArr = pushCheck(e, getWay(arr2), false);
      // debugger
      const res = [...sArr, ...eArr];
      return res;
    } else {
      // console.log(arr); debugger
      return [arr];
    }
  },
  mod = (n = N, arr = ARRAY) => {
    const array = getWay(arr);
    return array.length;
  };
const M = mod();
console.log(`满足情况的原始序列数量mod为${M}`);
