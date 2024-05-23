/** @format */

var join = function (arr1, arr2) {
  arr1.sort((a, b) => a.id - b.id);
  arr2.sort((a, b) => a.id - b.id);
  for (let i = arr1.length - 1; i >= 0; i--) {
    for (let j = 0; j < arr2.length; j++) {
      if (!(arr1[i].id == arr2[j].id)) continue;
      arr1[i] = { ...arr1[i], ...arr2[j] };
      arr2.splice(j, 1);
      break;
    }
  }
  return arr1.concat(arr2).sort((a, b) => a.id - b.id);
};

var objectJoin = function (arr1, arr2) {
  const array = [...arr1, ...arr2];
  const res = {};
  for (obj of array) {
    const id = obj.id;
    if (res[id]) {
      res[id] = { ...res[id], ...obj };
    } else {
      res[id] = obj;
    }
  }
  return Object.values(res).sort((a, b) => a.id - b.id);
};

arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
];
arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
];
obj = { ...arr1[1], ...arr2[0] };
console.log(obj);
