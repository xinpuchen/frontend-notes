/** 1014. 在 D 天内送达包裹的能力
 * https://leetcode-cn.com/contest/weekly-contest-128/problems/capacity-to-ship-packages-within-d-days/
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
// var shipWithinDays1 = function(weights, D) {
//   return getShipWeight([...weights], weights.length - D);
// };

// function getShipWeight(array, n) {
//   let arr = [];
//   // console.log('===')
//   // console.log(
//   //   `${n}`.padStart(2, ' '),
//   //   ``.padStart(2, ' '),
//   //   array.map(e => `${e}`.padStart(4, ' ')).join(', '),
//   // );
//   for (let i = 0; i < array.length - 1; i++) {
//     arr[i] = array[i] + (array[i + 1] || 0);
//   }
//   let index = 0;
//   let index2 = undefined;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[index] > arr[i]) {
//       index2 = index;
//       index = i;
//     } else if (arr[index2] > arr[i]) {
//       index2 = i;
//     }
//   }
//   // console.log(
//   //   `${n}`.padStart(2, ' '),
//   //   `${index}`.padStart(2, ' '),
//   //   arr.map(e => `${e}`.padStart(4, ' ')).join(', '),
//   // );
//   if (!isNaN(index2) && n > 1) { // Math.abs(index - index2) === 1
//     return Math.min(
//       getShipWeight(getArr(array, index), n - 1),
//       getShipWeight(getArr(array, index2), n - 1),
//     );
//   }
//   // console.log(
//   //   `${n}`.padStart(2, ' '),
//   //   `${index}`.padStart(2, ' '),
//   //   array.map(e => `${e}`.padStart(4, ' ')).join(', '),
//   // );
//   array.splice(index, 2, array[index] + array[index + 1]);
//   if (n > 1) return getShipWeight([...array], n - 1);
//   return Math.max(...array);
// }

// function getArr(array, index) {
//   return array
//     .slice(0, index)
//     .concat([array[index] + array[index + 1]], array.slice(index + 2));
// }

var shipWithinDays1 = function(weights, D) {
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
    // console.log(weight, len)
    // console.log(...arr);
  }
  return weight;
};

const shipWithinDays2 = (weights, D) => {
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

console.log(shipWithinDays1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 10

console.log(shipWithinDays1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15

console.log(shipWithinDays1([1, 2, 3, 1, 1], 2)); // 5

console.log(shipWithinDays1([1, 2, 3, 1, 1], 4)); // 3

console.log(shipWithinDays1([3, 2, 2, 4, 1, 4], 3)); // 6

console.log(
  shipWithinDays1(
    [
      147,
      73,
      265,
      305,
      191,
      152,
      192,
      293,
      309,
      292,
      182,
      157,
      381,
      287,
      73,
      162,
      313,
      366,
      346,
      47,
    ],
    10,
  ),
); // 602

console.log(
  shipWithinDays1(
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
); // 631
