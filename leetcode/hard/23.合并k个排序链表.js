/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (43.88%)
 * Total Accepted:    20.1K
 * Total Submissions: 44.9K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 *
 * 示例:
 *
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let L = null;
  for (let i = 0, l = null; lists.some(e => e); i++) {
    let min = null;
    lists.forEach(e => {
      if (!e)
        return false;
      if (min === null || min > e.val)
        min = e.val;
    });
    let index = lists.findIndex(e => e && e.val === min);
    if (l)
      l.next = lists[index];
    else
      l = lists[index];

    // console.log(lists[index], index, min)
    lists[index] = lists[index].next;
    if (!L)
      L = l;
    if (i > 0)
      l = l.next;
  }
  return L;
};

