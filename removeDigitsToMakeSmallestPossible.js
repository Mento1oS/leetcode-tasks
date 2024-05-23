/** @format */

const removeKdigits = function (num, k) {
  if (num.length === k) return "0";
  let stringNum = num.split("");
  let deleteCount = 0;
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i - 1]) {
      if (stringNum[i - 1] > stringNum[i]) {
        stringNum[i - 1] = "";
        stringNum = stringNum.join("").split("");
        deleteCount++;
        i -= 2;
        if (deleteCount === k) break;
      } else if (stringNum[i - 1] === stringNum[i] && deleteCount) {
        const check = stringNum.slice(0, i);
        const elemToCheck = check.find((elem) => elem > stringNum[i]);
        if (elemToCheck) {
          const slice = check.reverse();
          const elemToDelete = slice.find((elem) => elem > stringNum[i]);
          const index = slice.indexOf(elemToDelete);
          stringNum[slice.length - index] = "";
          stringNum = stringNum.join("").split("");
          deleteCount++;
          i -= 1;
          if (deleteCount === k) break;
        }
      }
    }
  }
  if (deleteCount < k) {
    for (let i = 0; i < k - deleteCount; i++) {
      stringNum.pop();
    }
  }
  if (stringNum[0] === "0") {
    while (stringNum[0] === "0" && stringNum.length > 1) {
      stringNum.shift();
    }
  }
  return stringNum.join("");
};

const alternativeKdigits = function (num, k) {
  if (num.length === k) return "0";

  const stack = [];

  for (let i = 0; i < num.length; i++) {
    const current = num[i];
    while (stack.length && stack[stack.length - 1] > current && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(current);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("");
};

const inputNumber = "41034612423514564";

const mySmallNumber = removeKdigits(inputNumber, 14);

console.log(mySmallNumber);
