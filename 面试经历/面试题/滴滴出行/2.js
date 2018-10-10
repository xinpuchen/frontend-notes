/**
 * 题目描述：
 * 有一把魔法权杖，权杖上有n顺并排的法术石（编号为1到n），每顺法术石具有一
 * 个能量值，权杖的法术强度等同于法术石的最小能量值。权杖可以强化，一次强化
 * 可以将两颗相邻的法术石融合为一颗，融合后的能量值为这两颗法术石能量值之
 * 和。现在有m次强化的机会，请问权杖能强化到的最大法术强度是多少？
 *
 * 输入
 * 第一行包含两个正整数n，m，表示n颗法术石，m次强化机会。
 * 第二行为n个用空格隔开的正改V1，v2….Vn，V表示编号为的法术石具有的能
 * 数据范围：1<mcn<100000，1<vy≤100000
 *
 * 输出
 * 输出1个整致，表示权杖的最大的法术强度。
 *
 * 样例输入
 * 6 3
 * 1 7 2 2 5 9
 *
 * 样例输出
 * 8
 * Hint
 * 样例说明：合并1、7得到 [8,2,2,5,9]。合并2、2得到 [8,4,5,9]，合并
 * 4、5得到 [8,9,9]，法术强度等于8。
 */

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
      arr.push(arr[index] + arr[index2]);
      console.log(arr);
      if (index < index2) {
        arr.splice(index, 2);
      } else {
        arr.splice(index2, 2);
      }
    }
    console.log(arr);
    return arr;
  };
console.log(Math.min.apply(null, count()));
