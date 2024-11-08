/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function (nums, maximumBit) {
    const result = [];
    const partialXor = [];
    let xored = nums[0];
    for (let i = 1; i < nums.length; i++) {
        partialXor.push(xored);
        xored^=nums[i];
    }
    partialXor.push(xored);
    for (let i = nums.length-1; i >=0; i--) {
        result.push(2**maximumBit-partialXor[i]-1);
    }
    return result
};

getMaximumXor([2,3,4,7],3)