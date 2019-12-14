/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (34.94%)
 * Likes:    126
 * Dislikes: 0
 * Total Accepted:    16K
 * Total Submissions: 44.2K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 *
 * 示例 1:
 *
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2:
 *
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  return intervals
    .sort((a, b) => a[0] - b[0])
    .reduce((p, e, i, a) => {
      if (i === 0 || p[p.length - 1][1] < e[0]) {
        p.push(e);
      } else {
        p[p.length - 1][1] = Math.max(e[1], p[p.length - 1][1]);
      }
      return p;
    }, []);
};
