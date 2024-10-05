/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

const {arr10, arr11} = require('./testData.js');
const slowMinSubarray = function (nums, p) {
    const partialSum = [];
    //можно сделать массив частичных остатков
    //этот массив потом перебрать, как-то используя map, находя нужные закономерности
    //потом пройтись по map и записать ответ
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const elem = nums[i];
        sum += elem;
        partialSum[i] = sum;
    }
    if (sum < p) return -1;
    if (sum % p === 0) return 0;
    const neededRst = sum % p;
    for (let i = 0; i < partialSum.length - 1; i++) {
        for (let j = i; j < partialSum.length; j++) {
            const rightElem = partialSum[j];
            const leftElem = partialSum[j - i - 1] || 0;
            const deletion = rightElem - leftElem;
            if (deletion % p === neededRst) return i + 1;
        }
    }
    return -1;
};

const Node = function (rem, indexes) {
    this.rem = rem;
    this.indexes = indexes;
}

const MinSubarray = function (nums, p) {
    const partialSum = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const elem = nums[i];
        sum += elem;
        partialSum[i] = sum;
    }
    const map = new Map();
    if (sum < p) return -1;
    if (sum % p === 0) return 0;
    const neededRst = sum % p;
    for (let i = 0; i < nums.length; i++) {
        const rem = partialSum[i] % p;
        const node = map.get(rem) || new Node(rem, []);
        node.indexes.push(i);
        map.set(rem, node);
    }
    let minDist = Infinity;
    // console.log(map, partialSum, neededRst);
    map.forEach(elem => {
        const neededNode = map.get((elem.rem - neededRst + p) % p) ? map.get((elem.rem - neededRst + p) % p) : elem.rem - neededRst === 0 ? new Node(0, [-1]) : null;
        if (neededNode) {
            const indexesFromNeededNode = neededNode.indexes;
            const indexesFromCurrentNode = elem.indexes;
            for (let i = 0; i < indexesFromNeededNode.length; i++) {
                for (let j = 0; j < indexesFromCurrentNode.length; j++) {
                    const diff = indexesFromCurrentNode[j] - indexesFromNeededNode[i];
                    if (diff > 0 && diff < minDist && diff < nums.length) {
                        minDist = diff;
                    }
                }
            }
        }
    })
    return minDist === Infinity ? -1 : minDist;
};

// console.log(slowMinSubarray(arr10, 43524814));
// console.log(slowMinSubarray(
//     [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2], 148));
// console.log(slowMinSubarray(arr11, 949467102));
console.log(MinSubarray([3, 1, 4, 2], 6));
console.log(MinSubarray(arr10, 43524814));
console.log(MinSubarray(
    [8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2], 148));

console.log(MinSubarray([5, 2, 6, 3], 9));
console.log(MinSubarray(arr11, 949467102));