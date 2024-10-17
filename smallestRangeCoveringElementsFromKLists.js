const arrElem = function (value, array) {
    this.value = value;
    this.arrayIndex = array;
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */

const smallestRangeFrom3Arrs = function (nums) {
    const pointersArray = [];
    const [arr1, arr2, arr3] = nums;
    let fp = 0;
    let sp = 0;
    let tp = 0;
    while (fp < arr1.length || sp < arr2.length || tp < arr3.length) {
        const firstArrEl = arr1[fp] ?? Infinity;
        const secArrEl = arr2[sp] ?? Infinity;
        const thirdArrEl = arr3[tp] ?? Infinity;
        const minEl = Math.min(firstArrEl, secArrEl, thirdArrEl);
        switch (minEl) {
            case firstArrEl:
                pointersArray.push(new arrElem(minEl, 1));
                fp++;
                break;
            case secArrEl:
                pointersArray.push(new arrElem(minEl, 2));
                sp++;
                break;
            case thirdArrEl:
                pointersArray.push(new arrElem(minEl, 3));
                tp++;
                break;
        }
    }
    let intervalValues = [];
    let smallestInterval = Infinity;
    const valuesMap = new Map();

    for (let i = 0; i < pointersArray.length; i++) {
        const {value, arrayIndex} = pointersArray[i];
        valuesMap.set(arrayIndex, value);
        const fe = valuesMap.get(1);
        const se = valuesMap.get(2);
        const te = valuesMap.get(3);

        //проверка на наличие всех членов

        if (fe === undefined || se === undefined || te === undefined) continue;

        const interval = Math.max(Math.abs(fe - se), Math.abs(fe - te), Math.abs(se - te));

        if (interval < smallestInterval) {
            smallestInterval = interval;
            const min = Math.min(fe, se, te);
            intervalValues = [min, min + interval];
        }
    }

    return intervalValues;
};

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
    while (this.hasParent(index) && this.parent(index).value > this.struct[index].value) {
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
        let smallerChildIndex = this.getLeftChildIndex(index);
        if (this.hasRightChild(index) && this.rightChild(index).value < this.leftChild(index).value) {
            smallerChildIndex = this.getRightChildIndex(index);
        }
        if (this.struct[index].value < this.struct[smallerChildIndex].value) break;
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
    }
}

function Node(value, arrIndex, elIndex) {
    this.value = value;
    this.arrIndex = arrIndex;
    this.elIndex = elIndex;
}

/**
 * @param {number[][]} nums
 * @return {number[]}
 */

const smallestRange = function (nums) {
    let rangeStart = 0;
    const heap = new Heap();
    let maxVal = -Infinity;
    let rangeEnd = Infinity;

    for (let i = 0; i < nums.length; i++) {
        heap.insert(new Node(nums[i][0], i, 0));
        maxVal = Math.max(maxVal, nums[i][0]);
    }

    while (heap.size === nums.length) {
        const {value, arrIndex, elIndex} = heap.pop();
        if (maxVal - value < rangeEnd - rangeStart) {
            rangeStart = value;
            rangeEnd = maxVal;
        }
        if (elIndex + 1 < nums[arrIndex].length) {
            const nextVal = nums[arrIndex][elIndex + 1];
            heap.insert(new Node(nextVal, arrIndex, elIndex + 1));
            maxVal = Math.max(maxVal, nextVal)
        }
    }
    return [rangeStart, rangeEnd]
};

console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]))