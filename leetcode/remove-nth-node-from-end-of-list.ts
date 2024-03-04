// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

{
  /**
   * Definition for singly-linked list.
   * class ListNode {
   *     val: number
   *     next: ListNode | null
   *     constructor(val?: number, next?: ListNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */

  const removeNthFromEnd = (
    head: ListNode | null,
    n: number
  ): ListNode | null => {
    let first = head;
    for (let i = 0; i < n; ++i) {
      first = first.next;
    }
    if (!first) {
      return head.next;
    }
    let second = head;
    while (first.next) {
      first = first.next;
      second = second.next;
    }
    second.next = second.next.next ?? null;
    return head;
  };
}

{
  /**
   * Definition for singly-linked list.
   * class ListNode {
   *     val: number
   *     next: ListNode | null
   *     constructor(val?: number, next?: ListNode | null) {
   *         this.val = (val===undefined ? 0 : val)
   *         this.next = (next===undefined ? null : next)
   *     }
   * }
   */

  const removeNthFromEnd = (
    head: ListNode | null,
    n: number
  ): ListNode | null => {
    const arr: ListNode[] = [];
    let node = head;
    while (node) {
      arr.push(node);
      node = node.next;
    }
    if (arr.length - n - 1 >= 0) {
      arr[arr.length - n - 1].next = arr[arr.length - n + 1] ?? null;
    } else {
      head = arr[1] ?? null;
    }
    return head;
  };
}
