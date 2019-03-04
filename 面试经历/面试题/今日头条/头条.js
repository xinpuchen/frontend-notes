const M = 5,
  getRamArr = (m = M) => {
    let arr = [];
    for (let x = 0; x < m; x++) {
      arr[x] = [];
      for (let y = 0; y < m; y++) {
        arr[x][y] = Math.round(Math.random());
      }
    }
    return arr;
  },
  search = (x, y, array, m = M) => {
    if (array[x][y]) {
      console.log(x, y);
      array[x][y] = 0;
      if (x + 1 < m && array[x + 1][y]) {
        search(x + 1, y, array);
      }
      if (x - 1 >= 0 && array[x - 1][y]) {
        search(x - 1, y, array);
      }
      if (y + 1 < m && array[x][y + 1]) {
        search(x, y + 1, array);
      }
      if (y - 1 >= 0 && array[x][y - 1]) {
        search(x, y - 1, array);
      }
      return 1;
    }
    return 0;
  },
  main = (ARRAY = getRamArr()) => {
    let array = ARRAY.map(e => e.map(e => e)),
      num = 0;
    console.log('ARRAY:', ARRAY);

    for (let x = 0; x < array.length; x++) {
      for (let y = 0; y < array.length; y++) {
        if (array[x][y]) {
          num += search(x, y, array);
        }
      }
    }
    return num;
  };
