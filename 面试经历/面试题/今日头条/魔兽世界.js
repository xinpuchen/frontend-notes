/**
 * 玩家小豆是一位魔兽世界玩家，里面每件装备有装备等级的概念，装备等级越高游戏角色越厉害，现在小豆手中有n个金币，
 * 但身上最多穿m件装备，每件装备的对应的价格×金币，对应的装备等级是y。
 * 现在小豆想要用手中的金币买到装备等级最大的装备组合。
 * 问小豆能买到最大的装备等级。
 *
 * 输入描述：
 * 金币数量n
 * 最多穿装备的数量m
 * 价格x，装备等级y
 * 输出描述：
 * 能买到装备的等级加和
 *
 * 示例1  输入输出示例仅供调试，前台列题数据一般不创含示例
 * 输入
 * 130
 * 3
 * 100 380
 * 20 320
 * 40 360
 * 50 310
 * 输出
 * 990
 */

const N = 130,
  M = 3,
  ARRAY = [
    [
      100, 380
    ],
    [
      20, 320
    ],
    [
      40, 360
    ],
    [
      50, 310
    ],
    [100, 380]
  ],
  count = (n = N, m = M, arr1 = ARRAY, arr2 = [], a = 0) => {
    if (arr2.length < m) {
      let array = [];
      for (let index = a; index < arr1.length - (m - 1 - arr2.length); index++) {
        if (countCheck(arr2, 0) + arr1[index][0] <= n && !findIndex(index, arr2)) {
          // console.log(arr2.length, index, arr1[index][0]);
          arr1[index][2] = index;
          arr1[index][3] = findIndex(index, arr2);
          let temp = [
            ...arr2,
            arr1[index]
          ];
          // console.log(...temp);
          array.push(...count(n, m, arr1, temp, index));
        }
      }
      return array;
    } else if (arr2.length === m) {
      if (arr2[0][0] + arr2[1][0] + arr2[2][0] <= n) {
        console.log(...arr2[0]);
        console.log(...arr2[1]);
        console.log(...arr2[2]);
        console.log(countCheck(arr2, 1));
        console.log("==========");
        return [arr2];
      } else {
        return null;
      }
    } else {
      console.warn("发生了错误", arr2);
    }
  },
  countCheck = (arr = [], n = 0) => {
    let total = 0;
    for (let index = 0; index < arr.length; index++) {
      total += arr[index][n];
    }
    return total;
  },
  findIndex = (i = 0, arr = []) => {
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      if (element[2] === i) 
        return !0;
      }
    return !1;
  };

const c = count(),
  a = [];
for (let index = 0; index < c.length; index++) {
  const element = c[index];
  a.push(countCheck(element, 1));
}
console.log(`${N}枚金币买${M}件装备的等级加和最大为${Math.max(...a)}。`);