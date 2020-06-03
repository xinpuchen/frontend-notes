/**
 * 567. 字符串的排列
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

 * 换句话说，第一个字符串的排列之一是第二个字符串的子串。

 * 示例1:

 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").

 * 示例2:

 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False

 * 注意：

 * 输入的字符串只包含小写字母
 * 两个字符串的长度都在 [1, 10,000] 之间
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let left = 0,
    right = 0;
  let needs = {},
    windows = {};
  let match = 0;
  for (let i = 0; i < s1.length; i++) {
    needs[s1[i]] ? needs[s1[i]]++ : (needs[s1[i]] = 1);
  }
  let needsLen = Object.keys(needs).length;
  while (right < s2.length) {
    let c1 = s2[right];
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : (windows[c1] = 1);
      if (windows[c1] === needs[c1]) {
        match++;
      }
    }
    right++;
    while (match === needsLen) {
      if (right - left === s1.length) {
        return true;
      }
      let c2 = s2[left];
      if (needs[c2]) {
        windows[c2]--;
        if (windows[c2] < needs[c2]) {
          match--;
        }
      }
      left++;
    }
  }
  return false;
};

console.log(checkInclusion('hello', 'ooolleooolleh'));
