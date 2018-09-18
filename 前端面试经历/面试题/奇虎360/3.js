/**
 * 题目描述：
 * 众所周知，集合{1 2 3 … N}有N!种不同的排列，假设第i个排列为Pi且P(i,j)是该排列的第j个数。
 * 将N个点放置在x轴上，第i个点的坐标为xi且所有点的坐标两两不同。
 * 对于每个排列（以Pi为例），可以将其视为对上述N个点的一种遍历顺序，即从第P(i,1)个点出发，沿直线距离到达第P(i,2)个点，再沿直线距离到达第P(i,3)个点，以此类推，最后到达第P(i,N)个点，将该路线的总长度定义为L(Pi)，那么所有N!种路线的总长度之和是多少，即L(P1)+L(P2)+L(P3)+...+L(PN!)的结果是多少？
 *
 * 输入
 * 第一行包含一个整数N，1≤N≤10^5。
 *
 * 第二行包含N个空格隔开的整数x1到xN，0≤x1<x2<x3<...<xN≤10^9。
 *
 *
 * 输出
 * 输出L(P1)+L(P2)+L(P3)+...+L(PN!)对10^9+7取模后的结果。
 *
 * 样例输入
 * 3
 * 0 1 3
 * 样例输出
 * 24
 *
 * Hint
 * P1={1 2 3}，P2={1 3 2}，P3={2 1 3}，P4={2 3 1}，P5={3 1 2}，P6={3 2 1}；
 * L(P1)=3，L(P2)=5，L(P3)=4，L(P4)=5，L(P5)=4，L(P6)=3。
 */
const N = 3,
  ARR = [
    0, 1, 3
  ],
  getList = (arr = [], array = ARR) => {
    let list = [],
      str = arr.join('');
    for (let index = 0; index < array.length; index++) {
      if (str.indexOf(array[index]) === -1) {
        let listInner = [
          ...arr,
          array[index]
        ];
        if (listInner.length < array.length) {
          list.push(...getList(listInner, array));
        } else {
          list.push(listInner);
        }
      }
    }
    return list;
  },
  main = (arr = [], array = ARR) => {
    const LIST = getList(arr, ARR);
    let total = 0;
    for (let index = 0; index < LIST.length; index++) {
      const element = LIST[index];
      let a = element.reduce((prev, curr, idx, arr) => {
        return Math.abs(arr[idx - 1] - curr) + (idx === 1
          ? 0
          : prev);
      });
      console.log(element, a);
      total += a;
    }
    console.log(`所有${array.length}!种路线的总长度之和是${total}`);
  };

main();