/**
 * 小C有一张票，这张票的ID是长度为6的字符串，每个字符都是数字，他想让这个ID变成他的辛运ID，所以他就开始更改ID，每一次操作，他可以选择任意一个数字并且替换它。
 * 如果这个ID的前三位数字之和等于后三位数字之和，那么这个ID就是辛运的。你帮小C求一下，最少需要操作几次，能使ID变成辛运ID
 *
 * 输入
 * 输入只有一行，是一个长度为6的字符串。
 * 输出
 * 输出这个最小操作次数
 *
 * 样例输入
 * 000000
 * 样例输出
 * 0
 * Hint
 * 输入样例2
 * 000018
 * 输出样例2
 * 1
 * 样例解释：将前三位任意一个改为9即可满足条件，操作数为1
 */
const NUM = '000118',
  getA = (n) => {
    return n[0] + n[1] + n[2];
  },
  getAM = (n, i) => {
    if (i) {
      return Math.max(n[0], n[1], n[2]);
    }
    return Math.min(n[0], n[1], n[2]);
  },
  getB = (n) => {
    return n[3] + n[4] + n[5];
  },
  getBM = (n, i) => {
    if (i) {
      return Math.max(n[3], n[4], n[5]);
    }
    return Math.min(n[3], n[4], n[5]);
  },
  add = (t, n) => {
    let total = t,
      a = getA(n),
      amin = getAM(n, 0),
      b = getB(n),
      bmin = getBM(n, 0);
    console.log('add', total, a, b, n);
    if (a > b) {
      if (a - b >= 9 - bmin) {
        n[n.lastIndexOf(bmin)] = 9;
      } else {
        n[n.lastIndexOf(bmin)] += (a - b);
      }
      n[n.lastIndexOf(bmin)] = 9;
      return add(++total, n);
    } else if (a < b) {
      if (b - a >= 9 - amin) {
        n[n.lastIndexOf(amin)] = 9;
      } else {
        n[n.lastIndexOf(amin)] += (b - a);
      }
      return add(++total, n);
    } else {
      return total;
    }
  },
  mult = (t, n) => {
    let total = t,
      a = getA(n),
      amax = getAM(n, 1),
      b = getB(n),
      bmax = getBM(n, 1);
    console.log('mult', total, a, b, n);
    if (a > b) {
      if (a - b >= amax) {
        n[n.lastIndexOf(amin)] = 0;
      } else {
        n[n.lastIndexOf(amin)] -= (a - b);
      }
      return mult(++total, n);
    } else if (a < b) {
      if (b - a >= bmax) {
        n[n.lastIndexOf(bmax)] = 0;
      } else {
        n[n.lastIndexOf(bmax)] -= (b - a);
      }
      return mult(++total, n);
    } else {
      return total;
    }
  },
  main = (num = NUM) => {
    num = num.split('');
    const ADD = add(0, num.map(e => Number(e))),
      MULT = mult(0, num.map(e => Number(e)));
    console.log(`${NUM} 最少需要${Math.min(ADD, MULT)}次操作 ${ADD}, ${MULT}`);
  };
main();
