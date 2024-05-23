/** @format */

const kthSmallestPrimeFraction = function (arr, k) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      array.push({
        val: arr[i] / arr[j],
        head: arr[i],
        bottom: arr[j],
      });
    }
  }
  array.sort((a, b) => a.val - b.val);
  const element = array[k - 1];
  return [element.head, element.bottom];
};

const digitsArray = [1, 2, 3, 5];

console.log(kthSmallestPrimeFraction(digitsArray, 3));
