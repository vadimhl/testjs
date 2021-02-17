/**
 * Initialize your data structure here.
 */
var Queue = function() {
    this.q = [];
}

Queue.prototype.pop = function()  {
    return this.q.shift();
}
Queue.prototype.push = function(el)  {
    return this.q.push(el);
}
Queue.prototype.peek = function()  {
    return this.q[0];
}
Queue.prototype.size = function()  {
    return this.q.length;
}
Queue.prototype.empty  = function() {
    return this.q.length==0;
}

var MyStack = function() {
    this.q = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    const qt = new Queue();
    qt.push(x);
    while ( !this.q.empty()) {
        qt.push(this.q.pop());
    }
    this.q= qt;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q.peek();
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.empty();
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
let q = new MyStack();
let rez=q.push(1);
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.push(2);
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.push(3);
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.push(4);
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.push(5);
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.q.q}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.q.q}`);
