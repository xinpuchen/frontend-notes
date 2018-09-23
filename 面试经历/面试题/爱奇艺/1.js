/**
 * 局长的食物
 *
 * 题目描述：
 * 局长有N种食物，每种食物有Ai份。
 * 每天局长会吃一份食物，或普买一份食物（即每天只能进行吃或买其中的一种动作），这样过了M天
 * 现在局长想知道M天后第p种食物的份数排名（从大到小，相同算并列，例如3 3 2，则排名为1 1 3）
 * N,M,P<=100,Ai<=1000
 *
 * 输入
 * 第一行N M P
 * 第二行N个数A i
 * 接下来M行，每行A i或者B i分别表示买一份食物i，吃一份食物i
 * 输出
 * 一个答案
 *
 * 样例输入
 * 3 4 2
 * 5 3 1
 * B 1
 * A 2
 * A 2
 * A 3
 * 样例输出
 * 1
 */

const N = 3,
  M = 4,
  P = 2,
  Arr = [
    5, 3, 1
  ],
  array = [
    [
      'B', 1
    ],
    [
      'A', 2
    ],
    [
      'A', 2
    ],
    ['A', 3]
  ],
  setI = (a = 'A', i = 0, arr = Arr) => {
    if (a === 'A') {
      arr[i - 1]++;
    } else if (a === 'B') {
      arr[i - 1]--;
    }
  },
  getI = (i = P, arr = Arr) => {
    const ARR = arr
        .map(e => e)
        .sort((a, b) => {
          if (a < b) {
            return 1;
          } else if (a > b) {
            return -1
          } else {
            return 0;
          }
        }),
      num = arr[i - 1];

    return ARR.findIndex((e) => e === num) + 1;
  },
  setDay = (arr = array) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      setI(element[0], element[1]);
    }
  };
setDay();
console.log(`${Arr} M天后第p种食物的份数排名为${getI()}`);