/**
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function (nums) {
    const array = [];
    for (let i = 0; i < nums.length; i++) {
        array.push(i);
    }
    array.sort((a, b) => nums[a] - nums[b]);
    let rampLength = 0;
    let smallestIndex = nums.length;
    for (let i = 0; i < array.length; i++) {
        if(array[i] - smallestIndex > rampLength){
            rampLength = array[i] - smallestIndex;
        }
        if(array[i] < smallestIndex){
            smallestIndex = array[i];
        }
    }
    console.log(array)
    return rampLength;
};

console.log(maxWidthRamp([9,8,1,0,1,9,4,0,4,1]));