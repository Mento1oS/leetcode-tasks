/** @format */

const commonChars = function (words) {
  const result = [];
  const word = words.pop();
  let flag = false;
  for (const letter of word) {
    flag = true;
    for (let i = 0; i < words.length; i++) {
      const index = words[i].indexOf(letter);
      console.log(index, letter, words[i]);
      if (index >= 0) {
        console.log();
        words[i] = words[i].replace(letter, "");
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(letter);
    }
  }
  return result;
};

console.log(commonChars(["cool", "lock", "cook"]));
