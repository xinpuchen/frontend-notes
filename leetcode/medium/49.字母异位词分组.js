/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (54.47%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    17.3K
 * Total Submissions: 30.9K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 *
 * 示例:
 *
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * 说明：
 *
 *
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 *
 *
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const o = {};
  for (let index = 0; index < strs.length; index++) {
    const el = strs[index].split('').sort((a, b) => a.localeCompare(b)).join('');
    if (!o.hasOwnProperty(el)) {
      o[el] = [];
    }
    o[el].push(strs[index]);
  }
  return Object.values(o);
};

