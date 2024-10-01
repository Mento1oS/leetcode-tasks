/**
 * @param {number} maxSize
 */
const CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.stack.length) {
        return this.stack.pop();
    }
    return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    const len = k > this.stack.length ? this.stack.length : k
    for (let i = 0; i < len; i++) {
        this.stack[i]+=val;
    }
};


const obj = new CustomStack(6);
obj.push(4);
console.log(obj);
const param_2 = obj.pop();
obj.push(4);
obj.push(4);
obj.push(4);
console.log(obj);
obj.increment(4,4);
console.log(obj);


