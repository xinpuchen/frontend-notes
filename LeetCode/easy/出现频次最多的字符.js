const str = 'asdrtfgwertmkmuynppooooojjjjjjjgtryqwqewretrqwert';

const findMaxStr1 = str => {
  const result = { char: '', num: 0 };
  const strArr = [...str];
  new Set(strArr).forEach(key => {
    const active = strArr.filter(i => i === key);
    if (active.length > result.num) {
      result.char = key;
      result.num = active.length;
    }
  });
  return result;
};

const findMaxStr2 = str => {
  const obj = {};
  const result = { char: '', num: 0 };
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > result.num) {
      result.char = key;
      result.num = obj[key];
    }
  }
  return result;
};

console.log(findMaxStr1(str));
console.log(findMaxStr2(str));
