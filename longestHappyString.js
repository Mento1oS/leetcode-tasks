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
    while (this.hasParent(index) && this.parent(index).count < this.struct[index].count) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
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
        let biggerChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.rightChild(index).count > this.leftChild(index).count) {
            biggerChildIndex = this.getRightChildIndex(index);
        }
        if (this.struct[index].count > this.struct[biggerChildIndex].count) break;
        this.swap(index, biggerChildIndex);
        index = biggerChildIndex;
    }
}

const Node = function (letter, count) {
    this.letter = letter;
    this.count = count;
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */

const longestDiverseString = function (a, b, c) {
    const heap = new Heap();
    if (a > 0) {
        heap.insert(new Node('a', a));
    }
    if (b > 0) {
        heap.insert(new Node('b', b));
    }
    if (c > 0) {
        heap.insert(new Node('c', c));
    }
    let string = '';
    const current = {
        currentValue: '',
        currentCount: 0,
    }
    while (heap.size !== 0) {
        const node = heap.pop();
        const {currentCount, currentValue} = current;
        if (node.letter === currentValue && currentCount < 2) {
            current.currentCount++;
            node.count--;
            if (node.count !== 0) {
                heap.insert(node);
            }
        } else if (node.letter === currentValue && currentCount === 2) {
            if (heap.size === 0) break;
            const secondNode = heap.pop();
            secondNode.count--;
            current.currentCount = 1;
            current.currentValue = secondNode.letter;
            if (secondNode.count !== 0) {
                heap.insert(secondNode);
            }
            heap.insert(node);
        } else {
            current.currentValue = node.letter;
            current.currentCount = 1;
            node.count--;
            if (node.count !== 0) {
                heap.insert(node);
            }
        }
        string += current.currentValue;
    }
    return string;
};

console.log(longestDiverseString(7, 1, 0));