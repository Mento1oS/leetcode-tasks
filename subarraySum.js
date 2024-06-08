/** @format */

const checkSubarraySum = (nums, k) => {
  if (
    nums.some(
      (elem, index) =>
        nums[index + 1] !== undefined && (elem + nums[index + 1]) % k === 0
    )
  )
    return true;
  const sum = nums.reduce((a, b) => a + b);
  const max = Math.max(...nums);
  if (sum / k - max / k < 1 && max % k !== 0) return false;
  if (sum > 0 && sum < k) return false;
  for (let i = 0; i < nums.length; i++) {
    let subSum = 0;
    subSum += nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      subSum += nums[j];
      if (subSum % k === 0) return true;
    }
  }
  return false;
};

console.log(checkSubarraySum([1, 1], 2));
