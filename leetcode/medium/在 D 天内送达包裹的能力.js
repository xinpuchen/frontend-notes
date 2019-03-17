/**
 * 在 D 天内送达包裹的能力
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。
 * 传送带上的第 i 个包裹的重量为 @param {Array} weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。
 * 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。
 */

/*
  示例 1：
  输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
  输出：15
  解释：
  船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
  第 1 天：1, 2, 3, 4, 5
  第 2 天：6, 7
  第 3 天：8
  第 4 天：9
  第 5 天：10
  请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。

  示例 2：
  输入：weights = [3,2,2,4,1,4], D = 3
  输出：6
  解释：
  船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
  第 1 天：3, 2
  第 2 天：2, 4
  第 3 天：1, 4

  示例 3：
  输入：weights = [1,2,3,1,1], D = 4
  输出：3
  解释：
  第 1 天：1
  第 2 天：2
  第 3 天：3
  第 4 天：1, 1

  提示：
  1 <= D <= weights.length <= 50000
  1 <= weights[i] <= 500
*/

/**
 *
 * @param {Array} weights 货物数组
 * @param {Number} D 天数
 */
const shipWithinDays = (weights, D) => {
  const len = weights.length;
  let minresult = Math.max(...weights);
  let day = 1;
  let i = 1;
  let [startNum] = weights;
  while (i < len) {
    if (startNum + weights[i] <= minresult) {
      startNum += weights[i];
      i++;
    } else {
      if (day == D && i < len) {
        // 货没送完，时间到了
        day = 1;
        i = 0;
        minresult++;
        startNum = 0;
      } else if (day <= D && i > len) {
        // 货刚好或提前送完了
        break;
      } else {
        day++;
        startNum = 0;
      }
    }
  }
  return minresult;
};

const shipWithinDays = (weights = [3, 2, 2, 4, 1, 4], D = 3) => {
  let len = weights.length;
  let weight = Math.max(...weights);
  let i = 0;
  while (len > D) {
    weight = Math.max(...weights) + i;
    const arr = [...weights];
    for (let i = 1; i < arr.length; i++) {
      if (weight >= arr[i - 1] + arr[i]) {
        arr[i] += arr[i - 1];
        arr[i - 1] = 0;
      }
    }
    len = arr.filter(e => e).length;
    i++;
  }
  return weight;
};

console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3));
console.log(
  shipWithinDays(
    [
      180,
      373,
      75,
      82,
      497,
      23,
      303,
      299,
      53,
      426,
      152,
      314,
      206,
      433,
      283,
      370,
      179,
      254,
      265,
      431,
      453,
      17,
      189,
      224,
    ],
    12,
  ),
);
