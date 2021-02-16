/**
 * Initialize your data structure here.
 */
var Queue = function() {
    this.q = [];
}

Queue.prototype.pop() {
    return this.q.unshift();
}
Queue.prototype.push(el) {
    return this.q.push(el);
}
Queue.prototype.peek() {
    return this.q[0]);
}
Queue.prototype.size() {
    return this.q.length);
}
Queue.prototype.empty() {
    return this.q.length==0);
}



var MyStack = function() {
    this.q = [];
    
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    return this.q.push()
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */