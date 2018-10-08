/**
 * 小 A 有两个幸运数字字符 a 和 b。他认为一个数很美当且仅当这个数字只包含数字字符 a 和 b，
 * 且这个数字每位数字只和也只包含数字字符 a 和 b。
 * 例如：幸运数字字符为 1 和 2，那么 11 就很美，其美味数字只和为 2，11 和 2 都只含有数字
 * 字符 1 和 2。但是 12、21、111 都不美，虽然他们本身都只含有数字字符 1 和 2，但他们每位
 * 数字只和都为 3，而 3 不是幸运数字字符。
 * 现在小 A 想知道对于所有的 k 位数字，有多少个美丽的数字？
 *
 * 输入描述：
 * 一行包含 3 个数字，a、b、k，含义如题意描述。
 * 1 <= a, b <= 9
 * 对于 10% 的数据： 1 <= k <= 10
 * 对于 20% 的数据： 1 <= k <= 10^3
 * 对于 100% 的数据： 1 <= k <= 10^6
 *
 * 输入描述：
 * 一行包含一个数字，即美丽的数字个数，由于答案可能很大，请对 1000000007（10^9 + 7）取模。
 *
 * 输入：
 * 1 2 2
 *
 * 输出：
 * 1
 */


const A = 1,
  B = 2,
  K = 2,
  ARRAY = [],
  count = (a = A, b = B, k = K, arr1 = ARRAY, arr2 = []) => {
    if (arr2.length < k) {
      if (check(a, b, arr2)) {
        return [];
      }
      let cA = count(a, b, k, arr1, [...arr2, a]),
        cB = count(a, b, k, arr1, [...arr2, b]);
      // console.log(...cA, ...cB);
      return [...cA, ...cB];
    } else if (arr2.length === k) {
      if (check(a, b, arr2, true)) {
        return [arr2];
      }
      return [];
    } else {
      console.warn("发生了错误", arr2);
      return null;
    }
  },
  check = (a = A, b = B, arr = [], isEqual = false) => {
    let total = [0, ...arr.filter(x => x > 0 && x < 10)].reduce(function(
      prev,
      curr,
      idx,
      arr
    ) {
      return prev + curr;
    });
    // console.log(arr, total, isEqual, total > a && total > b);
    if (isEqual) {
      if (total === a) {
        return !0;
      } else if (total === b) {
        return !0;
      } else {
        return !1;
      }
    } else {
      return total > a && total > b;
    }
  };

console.log(...count());
