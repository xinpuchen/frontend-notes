/**
 * 随着公司的快速发展，基层团队题渠趣多。近期公司希望对部门重新做个划分，尽可能把紧密合作的团队放到同一个部门。
 *
 * 给定一个MxM的2维数组，每个值1的元素代表一个团队。如果2个团队在上下或左右的方向上相邻，说明2个团队有紧密合作关系。
 * 需要把合作紧密的团队放到一起，形成一个部门；没有合作关系的团队，放到不同部门。
 * 判断给定输入中，有多少个部门。
 *
 * 例如，给定一个二维数组：
 * 10011
 * 10011
 * 00100
 * 00100
 * 00100
 * 其中有9个团队，一共需要组成3个部门，分别是：
 * 1
 * 1
 * 以及
 * 11
 * 11
 * 以及
 * 1
 * 1
 * 1
 *
 * 输入描述：
 * 第一行一个整数，代表M
 * 后面M行，每行M个整数（取值0或1）
 * 输出描述：
 * 一个整数素示织门数器
 */

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
  main = (array = getRamArr()) => {
    let num = 0;
    console.log(array);
    for (let x = 0; x < array.length; x++) {
      for (let y = 0; y < array.length; y++) {
        if (array[x][y]) {
          num += search(x, y, array);
        }
      }
    }
    return num;
  };
console.log(main());
