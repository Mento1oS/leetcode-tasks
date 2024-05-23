/** @format */

const isPali = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    if (s[right] !== s[left]) return false;
    right -= 1;
    left += 1;
  }
  return true;
};

const partition = function (s) {
  const result = [];
  const part = [];
  const splitter = (index) => {
    if (index >= s.length) {
      result.append([...part]);
      return;
    }
    for (let j = index; j < s.length; j++) {
      const sliced = s.slice(index, j + 1);
      if (isPali(sliced)) {
        part.push(sliced);
        splitter(j + 1);
        part.pop();
      }
    }
  };
  splitter(0);
  return result;
};

console.log(isPali("aadaalaadaa"));

console.log("first".slice(0));
