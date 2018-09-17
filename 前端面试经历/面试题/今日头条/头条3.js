/**
 * 工程师小张的代码出Bug了。在上报用户IP的时候，漏掉了“.”符号，例如10.0.0.1变成了10001。
 * 请你帮小张对这些异常数据进行处理，还原出所有可能的原始IP，输出可能的原始IP的数量。
 *
 * 输入描述：
 * 第一行一个字符串，代表抹掉。符号的ip
 * 输出描述：
 * 一行一个整数，表示答案
 * 输入
 * 8888
 * 输出
 * 1
 */

const ipN = "101001",
  insertDot = (str = ipN, x = 1, y = 2, z = 3) => {
    str = `${str.substring(0, x)}.${str.substring(x, y)}.${str.substring(y, z)}.${str.substring(z, str.length)}`;
    console.log(str);
    return str;
  },
  checkIP = (str) => {
    str = str.split(".");
    for (let index = 0; index < str.length; index++) {
      const element = Number(str[index]);
      if (element < 0 || element >= 256 || str[index].length > 1 && str[index].search(/^0/g) !== -1) {
        return false;
      }
    }
    return true;
  },
  parseIP = (ipn = ipN) => {
    let ipG = [],
      len = ipn.length;
    for (let x = 1; x < len - 2; x++) {
      for (let y = x + 1; y < len - 1; y++) {
        for (let z = y + 1; z < len; z++) {
          const IP = insertDot(ipn, x, y, z);
          if (checkIP(IP)) {
            ipG.push(IP);
          }
        }
      }
    }
    return ipG;
  }
  console.log(parseIP('10100101'));
