/** @format */

Array.prototype.groupBy = function (fn) {
  const aggregator = {};
  this.map((value, index) => {
    const key = fn(value);
    if (!aggregator[key]) {
      aggregator[key] = [];
    }
    aggregator[key].push(value);
  });
  return aggregator;
};

fn1 = function (item) {
  return item.id;
};

fn2 = function (list) {
  return String(list[0]);
};

fn3 = function (n) {
  return String(n > 5);
};

array1 = [{ id: "1" }, { id: "1" }, { id: "2" }];
array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array1.groupBy(fn1));
