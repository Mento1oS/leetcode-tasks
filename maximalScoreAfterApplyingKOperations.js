const Heap = function () {
    this.struct = [];
    this.size = 0;
}

Heap.prototype.getParentIndex = function (index) {
    return Math.floor((index - 1) / 2);
}

Heap.prototype.getLeftChildIndex = function (index) {
    return 2 * index + 1;
}

Heap.prototype.getRightChildIndex = function (index) {
    return 2 * index + 2;
}

Heap.prototype.hasParent = function (index) {
    return this.getParentIndex(index) >= 0;
}

Heap.prototype.hasLeftChild = function (index) {
    return this.getLeftChildIndex(index) < this.size;
}

Heap.prototype.hasRightChild = function (index) {
    return this.getRightChildIndex(index) < this.size;
}

Heap.prototype.parent = function (index) {
    return this.struct[this.getParentIndex(index)];
}

Heap.prototype.leftChild = function (index) {
    return this.struct[this.getLeftChildIndex(index)];
}

Heap.prototype.rightChild = function (index) {
    return this.struct[this.getRightChildIndex(index)];
}

Heap.prototype.swap = function (index1, index2) {
    [this.struct[index1], this.struct[index2]] = [this.struct[index2], this.struct[index1]];
}

Heap.prototype.peek = function () {
    return this.struct[0];
}

Heap.prototype.insert = function (data) {
    this.struct[this.size] = data;
    this.size++;
    this.heapifyUp();
}

Heap.prototype.heapifyUp = function () {
    let index = this.size - 1;
    while (this.hasParent(index) && this.parent(index) < this.struct[index]) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
    }
}

Heap.prototype.insertWithRec = function (data) {
    this.struct[this.size] = data;
    this.size++;
    this.heapifyUpRec(this.size - 1);
}

Heap.prototype.heapifyUpRec = function (index) {
    if (this.hasParent(index) && this.parent(index) < this.struct[index]) {
        this.swap(index, this.getParentIndex(index));
        this.heapifyUpRec(this.getParentIndex(index));
    }
}

Heap.prototype.pop = function () {
    if (this.size === 0) throw new Error('Empty heap!');
    this.swap(this.size - 1, 0);
    this.size--;
    this.heapifyDown();
    return this.struct.pop();
}

Heap.prototype.heapifyDown = function () {
    let index = 0;
    while (this.hasLeftChild(index)) {
        let biggestChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
            biggestChildIndex = this.getRightChildIndex(index);
        }
        if (this.struct[index] > this.struct[biggestChildIndex]) break;
        this.swap(index, biggestChildIndex);
        index = biggestChildIndex;
    }
}

Heap.prototype.popRec = function () {
    if (this.size === 0) throw new Error('Empty heap!');
    this.swap(this.size - 1, 0);
    this.size--;
    this.heapifyDown(0);
    return this.struct.pop();
}

Heap.prototype.heapifyDownRec = function (index) {
    let biggest = index;
    if (this.hasLeftChild(index) && this.struct[biggest] < this.leftChild(index)) {
        biggest = this.getLeftChildIndex(index);
    }
    if (this.hasRightChild(index) && this.struct[biggest] < this.rightChild(index)) {
        biggest = this.getRightChildIndex(index);
    }
    if (biggest !== index) {
        this.swap(index, biggest);
        this.heapifyDownRec(biggest);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxKelements = function (nums, k) {
    const heap = new Heap();
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        heap.insert(nums[i]);
    }
    for (let i = 0; i < k; i++) {
        const popped = heap.pop();
        sum += popped;
        heap.insert(Math.ceil(popped / 3));
    }
    return sum;
};

