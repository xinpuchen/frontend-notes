const N = 3,
  M = 3,
  ARRARY = [
    1,
    2,
    2,
    1,
    2,
    3
  ],
  parseRelp = (array) => {
    let arr = [];
    for (let index = 0; index < array.length;) {
      arr.push([
        array[index],
        array[index + 1]
      ]);
      index += 2;
    }
    return arr;
  },
  persons = (arr, n = N) => {
    let persons = [
      {
        concern: [],
        followers: []
      }
    ];
    for (let index = 1; index <= n; index++) {
      persons[index] = {
        concern: arr.filter(e => {
          if (e[0] === index) 
            return true
        }).map(e => e[1]),
        followers: arr.filter(e => {
          if (e[1] === index) 
            return true
        }).map(e => e[0])
      };
    }
    return persons;
  },
  main = (n = N, m = M, array = ARRARY) => {
    let num = 0,
      relp = parseRelp(array);
    persons(relp, n).forEach((e, i, a) => {
      let arr = [
        i, ...e
          .followers
          .map(e => e)
      ];
      console.log(e, arr);
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index],
          findNew = (j) => {
            a[j]
              .followers
              .forEach((e) => {
                // console.log(arr, e, index);
                if (arr.indexOf(e) === -1) {
                  arr.push(e);
                  findNew(e);
                }
              })
          };
        findNew(element);
      }
      console.log(arr);
      if (arr.length === n) {
        num++;
      }
    });
    return num;
  };