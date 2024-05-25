/** @format */

const wordBreak = function (s, wordDict) {
  const res = [];
  const hash = new Set();
  modifiedWordDict = [...wordDict];
  wordDict.forEach((elem) => {
    const count = Array.from(s.matchAll(elem));
    for (let i = 0; i < count.length - 1; i++) {
      modifiedWordDict.push(elem);
    }
  });
  const allArrays = permutation(modifiedWordDict);

  allArrays.forEach((elem) => {
    getArray(elem, s);
  });

  function getArray(array, str) {
    for (let i = 1; i < 1 << array.length; i++) {
      const lineRes = [];
      let counter = 0;
      for (let j = 0; j < array.length; j++) {
        if ((i >> j) & 1) {
          lineRes.push(array[j]);
          array.push(array[j]);
          counter++;
        }
        if (lineRes.join("").length >= str.length) break;
      }
      for (let index = 0; index < counter; index++) {
        array.pop();
      }
      const strToHash = lineRes.join("-");
      if (lineRes.join("") === str && !hash.has(strToHash)) {
        hash.add(strToHash);
        res.push(lineRes.join(" "));
      }
    }
  }

  function permutation(array) {
    function p(array, temp) {
      var i, x;
      if (!array.length) {
        result.push(temp);
      }
      for (i = 0; i < array.length; i++) {
        x = array.splice(i, 1)[0];
        p(array, temp.concat(x));
        array.splice(i, 0, x);
      }
    }

    var result = [];
    p(array, []);
    return result;
  }
  return res;
};

// console.log(wordBreak("aaaaaaa", ["aaaa", "aa", "a"]));

const wordBreak2 = function (s, wordDict) {
  const dfs = (word, result, array) => {
    if (!word.length || array.join("").length >= s.length) {
      result.push(array.join(" "));
      return result;
    }
    for (let i = 0; i < wordDict.length; i++) {
      const candidate = wordDict[i];
      const foundIndex = word.indexOf(candidate);
      if (foundIndex === 0) {
        array.push(candidate);
        dfs(word.slice(candidate.length), result, [...array]);
        array.pop();
      }
    }
    return result;
  };
  return dfs(s, [], []);
};

console.log(wordBreak2("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
