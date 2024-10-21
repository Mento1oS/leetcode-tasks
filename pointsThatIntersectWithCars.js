/**
 * @param {number[][]} nums
 * @return {number}
 */
const numberOfPoints = function (nums) {
    const arr = [];
    let misses = 0;
    for (const [start, end] of nums) {
        if (arr[start] !== undefined) {
            arr[start]++;
        } else {
            arr[start] = 1
        }
        if (arr[end + 1]) {
            arr[end + 1]--;
        } else {
            arr[end + 1] = -1;
        }
    }
    let balance = 0;
    const stack = [];
    for (const arrKey in arr) {
        const val = arr[arrKey];
        balance += val;
        const prev = stack.pop();
        if ((prev && balance - val === 0) || (!prev)) {
            misses += arrKey - (prev || 1);
            stack.push(prev);
        }
        stack.push(arrKey);
    }
    return stack.pop() - misses - 1;
};

console.log(numberOfPoints([[5, 10], [3, 8], [3, 9]]));
console.log(numberOfPoints([[1, 3], [5, 8]]));
console.log(numberOfPoints([[3, 6], [1, 5], [4, 7]]));
console.log(numberOfPoints([[6, 10], [6, 9], [1, 2], [6, 9], [5, 7], [6, 9], [1, 3], [5, 7], [5, 5]]));