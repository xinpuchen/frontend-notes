/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.02%)
 * Likes:    959
 * Dislikes: 0
 * Total Accepted:    60.2K
 * Total Submissions: 133K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;

  return Math.max(...nums.map(maxSumCenter));
};

function maxSumCenter(max, index, nums) {
  if (max <= 0) return max;
  let i = (j = index);
  let maxR = (maxL = sumR = sumL = 0);
  while (--i >= 0) {
    sumR += nums[i];
    maxR = Math.max(maxR, sumR);
  }
  while (++j < nums.length) {
    sumL += nums[j];
    maxL = Math.max(maxL, sumL);
  }
  return maxR + max + maxL;
}
