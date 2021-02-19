function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val=node.next.val;
    node.next=node.next.next;
};
const lst = new ListNode(4);
const node=new ListNode(5); 
lst.next = node;
lst.next.next = new ListNode(1);
lst.next.next.next = new ListNode(9);
console.log(lst);
deleteNode(node);
console.log(lst);