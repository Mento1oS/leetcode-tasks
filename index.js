/** @format */

var cancellable = function (fn, args, t) {
  let result = "";
  const timeout = setTimeout(() => {
    result = fn(...args);
  }, t);
  return () => {
    clearTimeout(timeout);
    return result;
  };
};
const func = (a, b) => a + b;
const cancellableAdd = cancellable(func, [2, 3], 1000);
setTimeout(cancellableAdd, 500);

const funcTool = (...args) => {
  console.log(typeof args);
};

funcTool(2, 34, 2);
funcTool("223", "13");
funcTool(2);
funcTool([]);
