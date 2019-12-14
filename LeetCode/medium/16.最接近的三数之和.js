/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (39.15%)
 * Total Accepted:    22.1K
 * Total Submissions: 55.4K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 *
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let n;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1;
    let R = nums.length - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      n = minimum(target, n, sum);
      if (sum === target) return target;
      else if (sum < target) L++;
      else R--;
    }
  }
  return n;
};

function minimum(n, a, b) {
  if (Number.isNaN(a * 1) && Number.isNaN(b * 1))
    throw 'All compare value is undefined!';
  const x = Math.abs(n - a);
  const y = Math.abs(n - b);
  if (x >= y || Number.isNaN(x)) return b;
  else return a;
}

// console.log(threeSumClosest([-1,2,1,-4], 1)); // 2
// console.log(threeSumClosest([1,1,1,1], 0)); // 3
// console.log(threeSumClosest([-1,2,1,-4], 1)); // 2
