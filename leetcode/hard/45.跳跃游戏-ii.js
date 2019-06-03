/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (29.24%)
 * Likes:    191
 * Dislikes: 0
 * Total Accepted:    9.9K
 * Total Submissions: 32.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 示例:
 *
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 *
 * 说明:
 *
 * 假设你总是可以到达数组的最后一个位置。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let n = 0;
  while (nums[0] === 1 || nums.length <= nums[0] + 1 && nums[0] > 0) {
    if (nums.length <= 1) {
      return n;
    }
    nums.splice(0, nums[0]);
    n++;
  }
  if (nums.length <= 1) {
    return n;
  } else if (nums[0] === 0) {
    return Infinity;
  }
  n++;
  let maxIndex = Math.min(nums[0], nums.length - 1);
  let max = nums[maxIndex];
  for (let index = maxIndex; index > 0; index--) {
    if (max + maxIndex < nums[index] + index) {
      max = nums[index];
      maxIndex = index;
    }
  }
  n += jump(nums.slice(maxIndex));
  return n;
};
