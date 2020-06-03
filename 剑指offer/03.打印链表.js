// 题目描述
// 输入一个链表，从尾到头打印链表每个节点的值。

// 链表 IN js
function ListNode(x, n = undefined) {
  return {
    val: x,
    next: n,
  };
}

function printListFromTailToHead(head) {
  if (!head) return [];
  let res = [];
  while (head) {
    res.unshift(head.val);
    head = head.next;
  }
  return res;
}
const testList = ListNode(1, ListNode(2, ListNode(3, ListNode(4))));

console.log(printListFromTailToHead(testList));
