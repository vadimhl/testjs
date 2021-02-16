/**
 * Definition for singly-linked list.
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let pre = null;
    let next = head.next;
    let cur = head;
    while ( cur ) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};
const param = new  ListNode(1, 
            new  ListNode(2, 
            new  ListNode(3, 
            new  ListNode(4, 
            new  ListNode( 5, null )))));
console.log(reverseList(param)) ;