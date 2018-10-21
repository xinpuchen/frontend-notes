const N = 3,
  ARRAY = [
    'variable', 'oneVariable', 'OneHTTPRequest'
  ],
  isUpperCase = (char) => {
    const regexp = /^[A-Z]+$/;
    return regexp.test(char);
  }
  tansWord = (str) => {
    str = str
      .split('')
      .map((e, i, a) => {
        if (i > 0 && i < a.length - 1) {
          if (!isUpperCase(e) && isUpperCase(a[i + 1]))
            return `${e}_`;
          else if (!isUpperCase(a[i - 1]) && isUpperCase(e) || !isUpperCase(a[i + 1]) && isUpperCase(e))
            return `_${e}`;
          else if (!isUpperCase(a[i + 1]) && isUpperCase(e))
            return `_${e}`;
          }
        return e;
      })
      .join('')
      .replace(/_+/g, '_')
      .toLowerCase();
    console.log(str);
    return str;
  },
  main = (n = N, arr = ARRAY) => {
    const tansArr = arr.map(e => tansWord(e));
    return tansArr;
  };

console.log(`${main()}`);
