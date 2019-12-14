/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (38.91%)
 * Likes:    110
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 27.6K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 *
 *
 * 示例 2:
 *
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let prev = head;
  let curr = prev && prev.next;
  let el;
  while (prev) {
    if (curr && prev.val === curr.val) {
      el = prev.val;
      head = curr.next;
      prev = head;
    } else if (prev.val === el) {
      head = prev.next;
      prev = head;
    } else {
      let next = curr && curr.next;
      if (next && curr.val === next.val) {
        el = curr.val;
        prev.next = next.next;
      } else if (curr && curr.val === el) {
        prev.next = next;
      } else {
        prev = curr;
      }
    }
    curr = prev && prev.next;
  }
  return head;
};
