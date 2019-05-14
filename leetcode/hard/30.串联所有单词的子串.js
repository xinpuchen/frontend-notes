/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (24.90%)
 * Likes:    80
 * Dislikes: 0
 * Total Accepted:    6.1K
 * Total Submissions: 24K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 *
 *
 * 示例 2：
 *
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 *
 *
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const keyMap = {};
  const result = [];
  const wordLen = words.length > 0 ? words[0].length : 0; // 所有单词等长
  const boundary = s.length - wordLen * words.length;

  if (words.length === 0 || boundary < 0) {
    return result;
  }

  let index;
  for (index = 0; index < words.length; index++) {
    keyMap[words[index]] = keyMap.hasOwnProperty(words[index])? keyMap[words[index]] + 1 : 1;
  }

  outerloop:
  for (index = 0; index <= boundary; index++) {
    let resultMap = {};

    for (let n = 0; n < words.length; n++) {
      const key = s.substring(index + wordLen * n, index + wordLen * n + wordLen);
      if (!keyMap.hasOwnProperty(key)) {
        continue outerloop;
      }
      resultMap[key] = resultMap.hasOwnProperty(key)? resultMap[key] + 1 : 1;
    }

    for (const key of Object.keys(keyMap)) {
      if (keyMap[key] !== resultMap[key]) {
        continue outerloop;
      }
    }

    result.push(index);
  }

  return result;
};

// console.log(findSubstring("a", [])); // "a"\n[]
// console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])); // "barfoofoobarthefoobarman"\n["bar","foo","the"]
// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"])); // "wordgoodgoodgoodbestword"\n["word","good","best","good"]
// console.log(findSubstring("aaaaaaaa", ["aa","aa","aa"])); // "aaaaaaaa"\n["aa","aa","aa"]

