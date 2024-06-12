/** @format */

const sortColors = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  console.log(map);
  let index = 0;
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < map.get(j); i++) {
      nums[index] = j;
      index++;
    }
  }
};
const numbers = [2, 0, 2, 1, 1, 0];
console.log(numbers);
sortColors(numbers);
console.log(numbers);
