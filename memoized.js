/** @format */

function memoize(fn) {
  // const callData = [];
  const callObjData = {};
  return function (...args) {
    // const found = callData.find(elem => args.toString()===elem.params);
    // if(found){
    //     return found.value;
    // }
    // const value = fn(...args);
    // callData.push({
    //     params: args.toString(),
    //     value: value
    // });
    // return value;
    const arguments = args.toString();
    const found = callObjData[arguments];
    if (found!==undefined) {
      return found;
    }
    const value = fn(...args);
    callObjData[arguments] = value;
    return value;
  };
}
let callCount = 0;
const sum = (a, b) => {
  callCount++;
  return a + b;
};

const memoizedSum = memoize(sum);
// console.log(memoizedSum(1, 2), callCount);
// console.log(memoizedSum(1, 2), callCount);
// console.log(memoizedSum(1, 2), callCount);
// console.log(memoizedSum(1, 2), callCount);
// console.log(memoizedSum(1, 2), callCount);
// console.log(memoizedSum(2, 1), callCount);
// console.log(memoizedSum(2, 2), callCount);
// console.log(memoizedSum(2, 2), callCount);
// console.log(memoizedSum(0, 0), callCount);
// console.log(memoizedSum(0, 0), callCount);
// console.log(memoizedSum(0, 0), callCount);
const eyes = [0, 0];
console.log(eyes.toString() === eyes.toString());
const obj = {
  [eyes]: 0,
};
console.log(obj[eyes]);
