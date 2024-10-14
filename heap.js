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
    while (this.hasParent(index) && this.parent(index) > this.struct[index]) {
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
    if (this.hasParent(index) && this.parent(index) > this.struct[index]) {
        this.swap(index, this.getParentIndex(index));
        this.heapifyUpRec(this.getParentIndex(index));
    }
}

Heap.prototype.removeMin = function () {
    if(this.size===0) throw new Error('Empty heap!');
    this.swap(this.size-1, 0);
    this.size--;
    this.heapifyDown();
    return this.struct.pop();
}

Heap.prototype.heapifyDown = function () {
    let index = 0;
    while(this.hasLeftChild(index)){
        let smallerChildIndex = this.getLeftChildIndex(index);
        if(this.hasRightChild(index) && this.rightChild(index)<this.leftChild(index)){
            smallerChildIndex = this.getRightChildIndex(index);
        }
        if(this.struct[index]<this.struct[smallerChildIndex]) break;
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
    }
}

Heap.prototype.removeMinRec = function () {
    if(this.size===0) throw new Error('Empty heap!');
    this.swap(this.size-1, 0);
    this.size--;
    this.heapifyDown(0);
    return this.struct.pop();
}

Heap.prototype.heapifyDownRec = function (index) {
    if(this.hasLeftChild(index)){
        let smallerChildIndex = this.getLeftChildIndex(index);
        if(this.hasRightChild(index) && this.rightChild(index)<this.leftChild(index)){
            smallerChildIndex = this.getRightChildIndex(index);
        }
        if(!this.struct[index]<this.struct[smallerChildIndex]){
            this.swap(index, smallerChildIndex);
            this.heapifyDownRec(smallerChildIndex);
        }
    }
}



const heap = new Heap();

console.log(heap);

heap.insert(12);

heap.insert(4);

heap.insert(45);

heap.insertWithRec(1);

heap.insert(14);

heap.insert(16);

console.log(heap);

heap.removeMin();

console.log(heap);

heap.removeMin();

console.log(heap);