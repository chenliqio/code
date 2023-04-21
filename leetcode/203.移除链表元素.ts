/***
 * 一、题目
 * 给你一个链表的头节点 head和一个整数val ，请你删除链表中所有满足 Node.val == val 的节点，并返回新的头节点 。
 * 二、思路
 * 链表：A->B->C
 * ---删除的节点分为两种：在链表中间部分的节点和头节点，两种节点删除思路不同。
 *    头节点：将头节点向后移动一个位置，删除原来的头节点。
 *    链表中间部分的节点：A节点的next指针指向C节点，从而从链表中删掉B节点，而B节点会被释放掉。
 * ---链表操作的两种方式：
 *    直接使用原来的链表进行删除操作---这种删除方式，再删除头节点的是还需要为头节点单独写一段代码
 *    设置一个虚拟头节点进行删除操作---这种删除方式，保证了所有节点的删除操作都一样。
 *
 */

// 方法一、原链表上直接删除
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   // 删除头节点

//   while (head !== null && head.val === val) {
//     head = head.next;
//   }
//   if (head === null) return head;

//   // 删除非头节点
//   let pre: ListNode = head,
//     cur: ListNode | null = head.next;
//   while (cur) {
//     if (cur.val === val) {
//       pre.next = cur.next;
//     } else {
//       pre = pre.next as ListNode;
//     }
//     cur = cur.next;
//   }
//   return head;
// }

// 方法二、添加虚拟头节点
function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 添加虚拟节点
  const data = new ListNode(0,head);
  let pre = data,cur=data.next;
  while(cur){
    if(cur.val === val){
      pre.next = cur.next;
    }else {
      pre = cur;
    }
    cur = cur.next;
  }
  return data.next
}
