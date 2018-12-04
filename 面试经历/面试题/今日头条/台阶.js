/**
 * 已知从山脚到山顶共有 m 个台阶，一次可爬 a～b 个台阶，由于年久失修，
 * 部分台阶已坏无法站立，已知坏的台阶共有 n 个并给出所有位置，
 * 问共有多少种方案（如果无法登上山顶返回 0，结果大于 10^9+7 则返回除以（10^9+7）后的余数？）
 *
 * 输入描述：
 * 台阶总数 m，一次最少可爬台阶数 a，一次最大可爬台阶数 b，坏掉的台阶 n，之后 n 行为坏掉台阶的编号，
 * 编号从 1 开始
 *
 * 输出描述：
 * 一个数字，代表登山方案的个数
 *
 * 示例一：
 * 输入：
 * 3
 * 1
 * 1
 * 0
 *
 * 输出：
 * 1
 *
 * 说明：
 * 0 < m < 2^20
 * 1 <= a <= b < m
 * 0 <= n < m
 */
const M = 3,
  A = 1,
  B = 1,
  N = 0,
  ARRAY_N = [],
  getNum = async(index = 0, m = M, a = A, b = B, arrn = ARRAY_N) => {
    const arr = [];
    if (index === -1 || index === m) {
      return index;
    }
    // console.log(index);
    for (let i = 0; i + a <= b; i++) {
      const num = index + a + i;
      arr[i] = (ARRAY_N.find(e => e * 1 === num) || num > m
        ? -1
        : await getNum(num));
      // (num === 4) && console.log(index, i, arr[i]);
    }
    return arr;
  },
  getRouteNum = async(array = [], m = M) => {
    let length = await array.reduce(async(s, e) => {
      s = await s;
      if (e === m) {
        s += 1;
      } else if (e !== -1) {
        s += await getRouteNum(e);
      }
      return s;
    }, 0);
    // console.log(`length: ${length}`);
    return length;
  };

// console.log(getRouteNum());
getNum(0).then(e1 => getRouteNum(e1).then(e2 => console.log(e2)));
