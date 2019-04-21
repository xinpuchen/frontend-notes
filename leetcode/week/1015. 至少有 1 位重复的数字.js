/** 1015. 至少有 1 位重复的数字
 * https://leetcode-cn.com/contest/weekly-contest-128/problems/numbers-with-repeated-digits/
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var numDupDigitsAtMostN1 = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const str = i
      .toString()
      .split('')
      .sort(function(a, b) {
        return a.localeCompare(b);
      })
      .join('');
    if (/(\d)\1{1}/.test(str)) count++;
  }
  return count;
};

var numDupDigitsAtMostN2 = function(N) {
  let count = 0;
  for (let i = 1; i <= N; i++) {
    const arr = i.toString().split('');
    const arr2 = [];
    if (
      arr.some(e => {
        if (arr2[e]) return true;
        else arr2[e] = 1;
      })
    )
      count++;
  }
  return count;
};

var numDupDigitsAtMostN3 = function(N) {
  let arr = [];
  for (let i = 1; i <= N; i++) {
    const str = i.toString();
    let flag = null;
    for (let j = 0; j < str.length && j < 10; j++) {
      const reg = new RegExp(`${str[j]}`, 'g');
      flag = str.match(reg);
      if (flag && flag.length > 1) {
        arr.push(i);
        break;
      }
    }
  }
  return arr.length;
};

var numDupDigitsAtMostN4 = function(N) {
  let x = 0;
  let index = N;
  while (index > 0) {
    const str = index.toString();
    const hash = [];
    let i = 0;
    for (; i < str.length; i++) {
      if (hash.indexOf(str[i]) === -1) {
        hash.push(str[i]);
      } else {
        const num = str.substring(i + 1) * 1 + 1;
        x += num;
        index -= num;
        break;
      }
    }
    if (i === str.length) index--;
  }
  return x;
};

var numDupDigitsAtMostN5 = function(N) {
  let x = N;
  let index = 1;
  while (index <= N) {
    const str = index.toString();
    const hash = [];
    let i = str.length - 1;
    while (i >= 0) {
      if (hash.indexOf(str[i]) === -1) {
        hash.push(str[i]);
      } else {
        i = 1;
        break;
      }
      i--;
    }
    index++;
    if (i < 0) {
      x--;
    }
  }
  return x;
};

function numDupDigitsAtMostN(N) {
  // Transform N + 1 to arrayList
  let L = new Array();
  for (let x = N + 1; x > 0; x = Math.floor(x / 10)) {
    L.unshift(x % 10);
  }

  // Count the number with digits < N
  let res = 0;
  let n = L.length;
  for (let i = 1; i < n; ++i) {
    console.log(i)
    res += 9 * A(9, i - 1);
  }

  // Count the number with same prefix
  let seen = new Set();
  for (let i = 0; i < n; ++i) {
    for (let j = i > 0 ? 0 : 1; j < L[i]; ++j)
      if (!seen.has(j)) {
        res += A(9 - i, n - i - 1);
      }
    if (seen.has(L[i])) break;
    seen.add(L[i]);
  }
  return N - res;
}

function A(m, n) {
  return n == 0 ? 1 : A(m, n - 1) * (m - n + 1);
}

// console.log(numDupDigitsAtMostN(20)); // 1

console.log(numDupDigitsAtMostN(100)); // 10

// console.log(numDupDigitsAtMostN(738935)); // 609230

// console.log(numDupDigitsAtMostN(6718458)); // 6205653

// console.log(numDupDigitsAtMostN(29947500)); // 28871730

// console.log(numDupDigitsAtMostN(31034990)); // 29938700

// console.log(numDupDigitsAtMostN(44753017)); // 43415167
