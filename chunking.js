/** @format */

var chunk = function (arr, size) {
  const chunkedArray = [];
  arr.map((value, index) => {
    if (index * size < arr.length) {
      console.log(index, size, arr.length);
      const chunk = [...arr].splice(size * index, size);
      chunkedArray.push(chunk);
    }
  });
  console.log(chunkedArray);
  return chunkedArray;
};

var steppedChunk = function (arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }
  return chunkedArray;
};

var chunkRec = function (arr, size) {
  if (arr.length === 0) return [];

  let res = [arr.slice(0, size)];
  res.push(...chunk(arr.slice(size), size));
  return res;
};

const array1 = [
  2, 3, 4, 5, 7, 67, 4, 8, 8, 9, 9, 0, 0, 2, 2, 2, 4, 3, 2, 3, 12, 12,
];
const array2 = [...array1, 4, 6, 7, 8, 343];
const array3 = [2, 4, 5];
const array4 = [...array3, 2, 4, 5];
const array5 = [...array4, ...array2];

chunk(array1, 4);
chunk(array2, 2);
