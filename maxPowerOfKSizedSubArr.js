/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultsArray = function (nums, k) {
    if (nums.length === 1) return [nums[0]];
    if (k === 1) {
        return nums;
    }
    const result = [];
    let unsortedOcc = 0;
    let leftPointer = -k + 2;
    const arr = [];
    arr.push(nums[0]);
    for (let i = 1; i < nums.length; i++, leftPointer++) {
        const prevFront = nums[i - 1];
        const curFront = nums[i];
        arr.push(curFront);

        const prevBack = nums[leftPointer - 1];
        const curBack = nums[leftPointer];

        if (curFront !== prevFront + 1) {
            unsortedOcc++;
        }

        if (curBack) {
            if (curBack && prevBack && curBack !== prevBack + 1) {
                unsortedOcc--;
            }

            if (arr.length > k) {
                arr.shift();
            }

            if (arr.length === k) {
                if (unsortedOcc) {
                    result.push(-1)
                } else {
                    result.push(arr[k-1]);
                }
            }
        }
        console.log(result, arr, unsortedOcc)
    }
    return result
};
console.log(resultsArray([1, 2, 3, 4, 3, 2, 5], 3))
console.log(resultsArray([2, 2, 2, 2, 2]
    , 4));
console.log(resultsArray([1, 3, 4], 2))
