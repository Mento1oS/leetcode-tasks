/** @format */

const minIncrementForUnique = (nums) => {
  nums.sort((a, b) => a - b);
  let current = nums[0];
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= current) {
      current++;
      counter += current - nums[i];
    } else {
      current = nums[i];
    }
  }
  return counter;
};

console.log(minIncrementForUnique([1, 2, 2]));
