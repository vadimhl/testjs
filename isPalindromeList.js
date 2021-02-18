function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if ( !head || !head.next ) return true;
    const arr = [];
    var slow = head;
    var fast = head;
    while (fast && fast.next) {
        arr.push(slow.val);
        slow = slow.next;
        fast=fast.next.next;
    }
    if (fast) slow=slow.next;
    let i = arr.length-1;
    //console.log(`arr=${arr} i=${i} slow=${slow.val} fast=${fast.val}`);
    while ( slow ) {
        if (slow.val !== arr[i]) return false;
        slow=slow.next;
        i--;
    }
    return true;
};

const param = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1, null))));
console.log(isPalindrome( param));