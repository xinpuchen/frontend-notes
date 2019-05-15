/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (30.11%)
 * Likes:    184
 * Dislikes: 0
 * Total Accepted:    12.5K
 * Total Submissions: 40.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 *
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 *
 * 必须原地修改，只允许使用额外常数空间。
 *
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 *
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  for (let index = nums.length - 2; index >= 0; index--) {
    const n = nums.reduceRight((a, e, i) => a < 0 && i > index && e > nums[index] ? i : a, -1);
    if (n !== -1) {
      swap(nums, index, n);
      sort(nums, index);
      break;
    }
    if (index === 0) {
      nums.reverse();
    }
  }
};

var nextPermutation2 = function(nums) {
  let j = nums.length - 1, i = j - 1;
  while (nums[i + 1] <= nums[i]) i--;
  if (~i) {
    while (nums[j] <= nums[i]) j--;
    swap(nums, i, j);
  }
  for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
    swap(nums, k, nums.length - k + i);
  }
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function sort(nums, index) {
  for (let i = index + 1; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        swap(nums, i ,j);
      }
    }
  }
}

// function test(arr) {
//   nextPermutation2(arr);
//   console.log(arr);
// }

// test([1,1,5]); // [1,5,1]
// test([3,2,1]); // [1,2,3]
// test([1,3,2]); // [2,1,3]
// test([4,2,0,2,3,2,0]); // [4,2,0,3,0,2,2]

