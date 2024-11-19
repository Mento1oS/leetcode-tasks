/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function (nums, k) {
    let sum = 0;
    let maxSum = 0;
    const map = new Map();
    let length = 0;
    for (let i = 0; i < k; i++) {
        const num = nums[i];
        const count = map.get(num);
        sum += num;
        if (!count) {
            length++;
            map.set(num, 1);
        } else {
            map.set(num, count + 1);
        }
    }
    if (length === k) {
        maxSum = sum;
    }
    for (let i = k; i < nums.length; i++) {
        const newNum = nums[i];
        const oldNum = nums[i - k];
        sum += newNum;
        sum -= oldNum;
        const oldNumCount = map.get(oldNum);
        if (oldNumCount > 1) {
            length++;
        }
        map.set(oldNum, oldNumCount - 1);

        const newNumCount = map.get(newNum);
        if (!newNumCount) {
            map.set(newNum, 1);
        } else {
            map.set(newNum, newNumCount + 1);
            length--;
        }
        if (k === length) {
            if (maxSum < sum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
};

console.log(maximumSubarraySum([1,1,1,7,8,9], 3));