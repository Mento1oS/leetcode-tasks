/** @format */

var flat = function (arr, n) {
  let result = [...arr];
  for (let j = 0; j < n; j++) {
    // const buff = [...result];
    // result = [];
    for (let i = 0; i < buff.length; i++) {
      const mini = buff[i];
      if (mini.length) {
        result = result.concat(mini);
      } else {
        result.push(mini);
      }
    }
  }
  return result;
};

var flatten = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const mini = arr[i];
    if (mini.length) {
      arr.splice(i, 1, ...mini);
    }
  }
  return arr;
};

var recFlat = function (arr, n) {
  if (n === 0) return arr;
  const flatAr = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatAr.push(...flat(item, n - 1));
    } else {
      flatAr.push(item);
    }
  });
  return flatAr;
};

console.log(
  recFlat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
