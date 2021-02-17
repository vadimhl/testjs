/**
 * Initialize your data structure here.
 */
var Stack = function() {
    this.st = [];
};

Stack.prototype.push = function(el) {
    return this.st.push(el);
}

Stack.prototype.pop = function() {
    return this.st.pop();
}

Stack.prototype.peek = function() {
    return this.st[this.st.length];
}

Stack.prototype.empty = function() {
    return this.st.length === 0;
}

 var MyQueue = function() {
    this.in = new Stack();
    this.out = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    return this.in.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if ( this.out.empty()  )  {
        while (!this.in.empty()) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if ( this.out.empty()  )  {
        while (!this.in.empty()) {
            this.out.push(this.in.pop());
        }
    }
    return this.out.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.in.empty() && this.out.empty();
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
let q = new MyQueue();
let rez=q.push(1);
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.push(2);
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.push(3);
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.push(4);
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.push(5);
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);
rez=q.pop();
console.log(`rez=${rez}  ${q.in.st} ${q.out.st}`);