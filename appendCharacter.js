/** @format */

//easy ones
const appendCharactersEasy = function (s, t) {
  if (s.includes(t)) return 0;
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) {
      return t.length - i;
    }
  }
  return 0;
};

const appendCharacters = (s, t) => {
  const sLength = s.length;
  const tLength = t.length;
  let count = 0;
  let sIndex = 0;
  let tIndex = 0;
  while (sIndex < sLength && tIndex < tLength) {
    if (t[tIndex] === s[sIndex]) {
      sIndex++;
      tIndex++;
      count++;
      continue;
    }
    sIndex++;
  }
  return tLength - count;
};

console.log(appendCharacters("coaching", "coding"));
