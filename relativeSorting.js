/** @format */

const relativeSortArray = (arr1, arr2) => {
  const arr2Set = new Set([...arr2]);
  const arrMap = new Map();
  const arr2Ext = [];
  arr1.forEach((elem) => {
    if (arrMap.get(elem)) {
      arrMap.set(elem, arrMap.get(elem) + 1);
    } else {
      arrMap.set(elem, 1);
    }
  });
  arr2.forEach((elem) => {
    const amount = arrMap.get(elem);
    for (let i = 0; i < amount; i++) {
      arr2Ext.push(elem);
    }
  });
  const arrayToSort = arr1.filter((elem) => !arr2Set.has(elem));
  return [...arr2Ext].concat(arrayToSort.sort((a, b) => a - b));
};

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
