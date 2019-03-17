/** 1014. 在 D 天内送达包裹的能力
 * https://leetcode-cn.com/contest/weekly-contest-128/problems/capacity-to-ship-packages-within-d-days/
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  return Math.max(...getArr([...weights], weights.length - D));
};

function getArr(array, n) {
  let arr = [];
  let len = false ? array.length : array.length - 1;
  console.log(`${n}`.padStart(2, ' '), ``.padStart(2, ' '), array.map(e => `${e}`.padStart(4, ' ')).join(', '));
  for (let i = 0; i < len; i++) {
    arr[i] = (false && array[i - 1] ? array[i - 1] : 0) + array[i] + (array[i + 1] || 0);
  }
  let index = arr.indexOf(Math.min(...arr));
  if ((array[index - 1] || Infinity) < (array[index + 1] || Infinity))
    index--;
  array.splice(index, 2, array[index] + array[index + 1]);
  console.log(`${n}`.padStart(2, ' '), `${index}`.padStart(2, ' '), arr.map(e => `${e}`.padStart(4, ' ')).join(', '));
  console.log(`${n}`.padStart(2, ' '), `${index}`.padStart(2, ' '), array.map(e => `${e}`.padStart(4, ' ')).join(', '));
  if (n > 1)
    return getArr([...array], n - 1);
  return array;
}

// var shipWithinDays1 = function(weights, D) {
//   let array = [weights];
//   for (let i = weights.length; i > D; i--) {
//     array = checkoutAllArray(...array);
//   }
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     array[i] = Math.max(...array[i]);
//   }
//   // console.log(array)
//   return Math.min(...array);
// };

// function checkoutAllArray () {
//   let arrays = [];
//   // console.log('a', ...arguments)
//   for (let index = 0; index < arguments.length; index++) {
//     const array = arguments[index];
//     for (let i = 0; i < array.length - 1; i++) {
//       let arr = [...array];
//       arr.splice(i, 2, array[i] + array[i + 1]);
//       arrays.push(arr);
//     }
//   }
//   // console.log('b', ...arrays)
//   return arrays;
// }

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)); // 15

console.log(shipWithinDays([1, 2, 3, 1, 1], 2)); // 5

console.log(shipWithinDays([1, 2, 3, 1, 1], 4)); // 3

console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3)); // 6

console.log(shipWithinDays([147,73,265,305,191,152,192,293,309,292,182,157,381,287,73,162,313,366,346,47], 10)); // 602
