/**
 * 抖音工程师想要找到抖音里的红人！假设用户数为N，有M个关注关系对（A,B）。
 * （A,B）表示用户A关注了用户B。关注关系具有传递性，例如：用户A关注了用户B，用户B关注了用户C，那么认为用户A间接关注了用户C。
 * 如果一个用户被所有的N个用户直接或者间接关注，那么我们认为这个用户就是抖音红人。
 * 求抖音红人的总数。
 *
 * 输入描述：
 * 第一行一个整数，代表N
 * 第二行一个整数，代表M
 * 第三行空格分隔的M*2个整数，代表关注关系对
 * 输出描述：
 * 一行一个整数，表示答案
 * 输入
 * 3
 * 3
 * 1 2 2 1 2 3
 * 输出
 * 1
 * 备注：
 * 1<=N<=10~4
 * 1<=M<=5*10~4
 * 1<=A，B<=N
 */

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
console.log(main());
