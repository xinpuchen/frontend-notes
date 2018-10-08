const A = 1,
  B = 2,
  K = 2,
  ARRAY = [],
  count = (a = A, b = B, k = K, arr1 = ARRAY, arr2 = []) => {
    if (arr2.length < k) {
      if (check(a, b, arr2)) {
        return [];
      }
      let cA = count(a, b, k, arr1, [
          ...arr2,
          a
        ]),
        cB = count(a, b, k, arr1, [
          ...arr2,
          b
        ]);
      // console.log(...cA, ...cB);
      return [
        ...cA,
        ...cB
      ]
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
    let total = [
      0, ...arr.filter(x => x > 0 && x < 10)
      ].reduce(function (prev, curr, idx, arr) {
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