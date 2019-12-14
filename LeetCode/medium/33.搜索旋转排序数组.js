/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (35.85%)
 * Likes:    217
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 60.3K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 *
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 *
 * 你可以假设数组中不存在重复的元素。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 示例 1:
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 *
 *
 * 示例 2:
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let i = 0,
    j = nums.length - 1;
  if (target < nums[i] && target > nums[j]) return -1;
  while (i <= j) {
    if (target === nums[i]) return i;
    if (target === nums[j]) return j;
    const m = Math.floor((i + j) / 2);
    if (
      (nums[m] < target && (target < nums[i] || nums[i] < nums[m])) ||
      (target < nums[i] && nums[i] < nums[m]) ||
      (target < nums[j] && nums[j] < nums[m])
    ) {
      i = m;
      j--;
    } else {
      i++;
      j = m;
    }
  }
  return -1; // nums.findIndex(e => e === target);
};

// console.log(search([1], 0)); // -1
// console.log(search([1], 1)); // 0
// console.log(search([1,3,5], 3)); // 1
// console.log(search([5,1,2,3,4], 1)); // 1
// console.log(search([8,9,2,3,4], 9)); // 1
// console.log(search([1,2,3,4,5,6], 4)); // 3
// console.log(search([4,5,6,7,0,1,2], 5)); // 1
// console.log(search([4,5,6,7,0,1,2], 5)); // 1
// console.log(search([4,5,6,7,0,1,2], 0)); // 4
// console.log(search([2,3,4,5,6,7,8,9,1], 9)); // 7
