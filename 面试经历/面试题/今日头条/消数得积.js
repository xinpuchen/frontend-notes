/**
 * 给定一个一维的正整数数组，逐次选择其中一个数做消除，
 * 消除所获得的分数为当前数字和左右相邻数字的乘积（当左边或者右边没有数字可以认为是1）。
 * e.g.输入数组：[3, 1, 5, 8]
 * ·step1：消除1，获得分数15=3*1*5，数组变为[3, 5, 8]
 * ·step2：消除5，获得分数120=3*5*8，数组变为[3, 8]
 * ·step3：消除3，获得分数24=3*8，数组变为[8]
 * ·step4：消除8，获得分数8=8，数组变为[]
 * 最终获得分数：15+120+24+8=167
 * 求消除能够获取的最大分数w
 * 输入描述：
 * 第一行为数组的长度，后面依次为数组内的数字：
 * 4
 * 3
 * 1
 * 5
 * 8
 * 输出描述：
 * 输出数字，对应分数，如167
 *
 * 示例1 输入输出示例仪供调试，后台判题效据一般不包含示例
 * 输入
 * 4
 * 3
 * 1
 * 5
 * 8
 * 输出
 * 167
 * 备注：
 * 数据范围
 * 前30%的数据，小数据集（n<10）
 * 中间30%的数据，中等数据集（n<30）
 * 后40%的数据，大数据集（50<=n<=200）
 */
const N = 4,
  ARRAY = [3, 1, 5, 8],
  filterMin = (arr = ARRAY) => {
    let min = null;
    if (arr.length >= 3) {
      min = Math.min(...arr.slice(1, -1));
    } else {
      min = Math.min(...arr);
    }
    let score = 0;
    arr = arr.filter((e, i, a) => {
      if (e === min) {
        score = e;
        if (i > 0) score *= a[i - 1];
        if (i < a.length - 1) score *= a[i + 1];
        // console.log(e, score);
      }
      return e !== min;
    });
    return { score: score, arr: arr };
  },
  main = (n = N, arr = ARRAY) => {
    let score = 0;
    for (let index = 0; index < 4; index++) {
      const e = filterMin(arr);
      score += e.score;
      arr = e.arr;
    }
    return score;
  };

console.log(`消除能够获取的最大分数为${main()}`);
