/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (57.78%)
 * Total Accepted:    19.1K
 * Total Submissions: 32.4K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 *
 *
 * 示例:
 *
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 *
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
var swapPairs = function(head) {
  let a = head, b = a ? a.next : null, c = null, d = null, index = 0;
  while (index === 0 && a && b || a && b && c && d) {
    // a = index === 0 ? head : a.next;
    b = a ? a.next : null;
    c = b ? b.next : null;
    d = c ? c.next : null;
    if (index === 0) {
      head = b;
      a.next = c;
      b.next = a;
    } else {
      if (index % 2 === 1) {
        b.next = d;
        c.next = b;
        a.next = c;
      }
      a = a.next;
    }
    index++;
  }
  return head;
};

