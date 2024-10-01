const Node = function (remainder) {
    this.remainder = remainder;
    this.count = 0;
}
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
const canArrange = function (arr, k) {
    const remaindersMap = new Map();
    let pairsCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        const remainder = arr[i] % k;
        const searchKey = Math.abs((k-remainder) % k);
        const nodeToDecrease = remaindersMap.get(searchKey);
        const k_SearchKey = Math.abs(k-searchKey)% k;
        if (nodeToDecrease && nodeToDecrease.count > 0) {
            nodeToDecrease.count--;
            remaindersMap.set(searchKey, nodeToDecrease);
            pairsCounter++;
        } else {
            const nodeToIncrease = remaindersMap.get(k_SearchKey) || new Node(k_SearchKey);
            nodeToIncrease.count++;
            remaindersMap.set(k_SearchKey, nodeToIncrease);
        }
        // console.log('pairs: ', pairsCounter, '\nsearchKey: ', searchKey, '\nremainder: ', k_SearchKey);
        // console.log('map: ', remaindersMap, '\ncurrentEl: ', arr[i], '\n');
    }
    return pairsCounter === arr.length / 2;
};

const arr1 = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
const arr2 = [1, 2, 3, 4, 5, 6];
const arr3 = [1, 2, 3, 4, 5, 6];
const arr4 = [-1, 1, -2, 2, -3, 3, -4, 4];

// console.log(canArrange(arr1, 5));
// console.log(canArrange(arr2, 7));
// console.log(canArrange(arr3, 10));
console.log(canArrange(arr4, 3));