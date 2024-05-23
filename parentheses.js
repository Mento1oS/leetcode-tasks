/** @format */

const minRemoveToMakeValid = function (s) {
  let counterLeft = 0;
  let counterRight = 0;
  const string = s.split("");
  for (let i = 0; i < string.length; i++) {
    string[i] === "(" ? counterLeft++ : "";
    string[i] === ")" ? counterRight++ : "";
    if (counterRight > counterLeft) {
      string[i] = "";
      counterRight--;
    }
  }
  counterLeft = 0;
  counterRight = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    string[i] === "(" ? counterLeft++ : "";
    string[i] === ")" ? counterRight++ : "";
    if (counterLeft > counterRight) {
      string[i] = "";
      counterLeft--;
    }
  }
  return string.join("");
};
