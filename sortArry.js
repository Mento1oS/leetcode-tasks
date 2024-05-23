/** @format */

var sortBy = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (let j = arr.length - 1; j > i; j--) {
      if (fn(arr[j]) < fn(arr[i])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
array = [{ x: 1 }, { x: 0 }, { x: -1 }];
func = (d) => d.x;

var quickSortBy = function (arr, fn) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (fn(arr[i]) < fn(pivot)) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSortBy(leftArr, fn), pivot, ...quickSortBy(rightArr, fn)];
};

const quickestSortBy = function (arr, fn) {
  return arr.sort((a, b) => {
    if (fn(a) < fn(b)) {
      return -1;
    } else {
      return 0;
    }
  });
};

console.log(sortBy([5, 4, 1, 2, 3], (x) => x));
console.log(sortBy(array, func));
