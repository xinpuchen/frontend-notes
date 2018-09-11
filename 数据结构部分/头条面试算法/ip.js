const ipN = "8888",
  insertDot = (str = ipN, x = 1, y = 2, z = 3) => {
    str = `${str.substring(0, x)}.${str.substring(x, y)}.${str.substring(y, z)}.${str.substring(z, str.length)}`;
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