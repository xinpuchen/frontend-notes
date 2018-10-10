const N = 6,
  M = 3,
  Arr = [1, 7, 2, 2, 5, 9],
  check = (arr, min) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == min) {
        return i;
      }
    }
  },
  count = (n = N, m = M, arr = Arr) => {
    for (let i = 0; i < m; i++) {
      let min = Math.min.apply(null, arr),
        index = check(arr, min),
        index2 = arr[index - 1] >= arr[index + 1] ? index + 1 : index - 1;
        console.log(min);
      arr.push(arr[index] + arr[index2]);
      arr.splice(index, 1);
      arr.splice(index2, 1);
    }
    return arr;
  };
console.log(Math.min.apply(null, count()));