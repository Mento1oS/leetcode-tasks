/** @format */

var promiseAll = function (functions) {
  return Promise.all(functions.map((elem) => elem())).then((values) => values);
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log);
