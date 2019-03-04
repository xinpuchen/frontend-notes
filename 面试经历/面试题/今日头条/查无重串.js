var fn = function(s) {
  var res = 0; // 用于存放当前最长无重复子串的长度
  var str = ''; // 用于存放无重复子串
  var len = s.length;
  for (var i = 0; i < len; i++) {
    var char = s.charAt(i);
    var index = str.indexOf(char);
    if (index === -1) {
      str += char;
      res = res < str.length ? str.length : res;
    } else {
      str = str.substr(index + 1) + char;
    }
  }
  return res;
};
let s = 'scjsdhvfdhvfhvjmscsdnmsdsndmcmsdmd';
console.log(fn(s));
