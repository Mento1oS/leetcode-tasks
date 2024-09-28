const Node = function (number) {
    this.value = number;
    this.before = null;
    this.after = null;
    this.isEntry = false;
}

const MyCircularDeque = function (k) {
    this.size = 0;
    this.maxSize = k;
    this.entry = null;
};

MyCircularDeque.prototype.insertFront = function (value) {
    if (this.size >= this.maxSize) return false;
    let currentElem = this.entry;
    if (!currentElem) {
        currentElem = new Node(value);
        currentElem.isEntry = true;
        this.entry = currentElem;
        this.size++;
        return true;
    }
    while (currentElem.before) {
        currentElem = currentElem.before;
    }
    currentElem.before = new Node(value);
    let newElem = currentElem.before;
    newElem.after = currentElem;
    this.size++;
    // console.log(this.entry);
    return true;
};

MyCircularDeque.prototype.insertLast = function (value) {
    if (this.size >= this.maxSize) return false;
    let currentElem = this.entry;
    if (!currentElem) {
        currentElem = new Node(value);
        currentElem.isEntry = true;
        this.entry = currentElem;
        this.size++;
        return true;
    }
    while (currentElem.after) {
        currentElem = currentElem.after;
    }
    currentElem.after = new Node(value);
    let newElem = currentElem.after;
    newElem.before = currentElem;
    this.size++;
    return true;
};

MyCircularDeque.prototype.deleteFront = function () {
    if (this.size === 0) return false;
    let currentElem = this.entry;
    while (currentElem.before) {
        currentElem = currentElem.before;
    }
    let newFront = currentElem.after;
    if (!newFront) {
        this.size = 0;
        this.entry = null;
        return true;
    }
    if (currentElem.isEntry) {
        newFront.isEntry = true;
        this.entry = newFront;
    }
    this.size--;
    newFront.before = null;
    return true;
};

MyCircularDeque.prototype.deleteLast = function () {
    if (this.size === 0) return false;
    let currentElem = this.entry;
    while (currentElem.after) {
        currentElem = currentElem.after;
    }
    let newLast = currentElem.before;
    if (!newLast) {
        this.size = 0;
        this.entry = null;
        return true;
    }
    if (currentElem.isEntry) {
        newLast.isEntry = true;
        this.entry = newLast;
    }
    this.size--;
    newLast.after = null;
    return true;
};

MyCircularDeque.prototype.getFront = function () {
    if (this.size === 0) return -1;
    let currentElem = this.entry;
    while (currentElem.before) {
        currentElem = currentElem.before;
    }
    return currentElem.value;
};

MyCircularDeque.prototype.getRear = function () {
    if (this.size === 0) return -1;
    let currentElem = this.entry;
    while (currentElem.after) {
        currentElem = currentElem.after;
    }
    return currentElem.value;
};

MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

MyCircularDeque.prototype.isFull = function () {
    return this.size === this.maxSize;
};

const circDeq = new MyCircularDeque(5);

const res1 = circDeq.insertFront(5);
const res2 = circDeq.insertFront(4);
const res3 = circDeq.insertFront(6);
const res4 = circDeq.insertFront(41);
const res5 = circDeq.insertLast(12);
const res6 = circDeq.insertFront(24);

const res7 = circDeq.deleteLast();

console.log(circDeq.entry);

console.log(res1, res2, res3, res4, res5, res6, res7);