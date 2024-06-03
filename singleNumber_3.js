/** @format */

const singleNumber = function (nums) {
  const collection = new Set();
  nums.forEach((elem) => {
    if (collection.has(elem)) {
      collection.delete(elem);
    } else {
      collection.add(elem);
    }
  });
  return [...collection];
};
