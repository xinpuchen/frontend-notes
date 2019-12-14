/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] k个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (49.68%)
 * Total Accepted:    9.6K
 * Total Submissions: 18.8K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。
 *
 * 示例 :
 *
 * 给定这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 * 说明 :
 *
 *
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let l = head;
  let index = 0;
  let start = null;
  let a = [];
  while (k > 1 && (l || (index === 0 && l))) {
    try {
      a = [];
      for (let i = 0; i < k; i++) {
        a.unshift(l);
        l = l.next;
      }
      let i = 0;
      for (; i < a.length; i++) {
        if (i === 0) {
          if (index === 0) head = a[i];
          else start.next = a[i];
        } else {
          a[i - 1].next = a[i];
          start = a[i];
        }
      }
      a[i - 1].next = null;
    } catch (error) {
      if (a.length && start) start.next = a[a.length - 1];
      break;
    }
    index++;
  }
  return head;
};
