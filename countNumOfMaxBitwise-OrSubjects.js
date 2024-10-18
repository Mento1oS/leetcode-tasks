/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
    const maxBitwise = nums.reduce((u, v) => u | v, 0);
    let count = 0;
    const recStep = (acc, index) => {
        if (index === nums.length - 1) {
            if (acc === maxBitwise) {
                count += 1;
            }
        } else {
            const newIndex = index + 1;
            recStep(acc | nums[newIndex], newIndex);
            recStep(acc, newIndex);
        }
    }
    recStep(nums[0], 0);
    recStep(0, 0);
    return count;
};

countMaxOrSubsets([3, 2, 1, 5]);