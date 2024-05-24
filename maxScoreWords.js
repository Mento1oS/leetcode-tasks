/** @format */

const maxScoreWords = function (words, letters, score) {
  const useDict = () => {
    const dictionary = {
      a: { weight: null, useCapacity: 0, index: 0, maxCapacity: 0 },
      b: { weight: null, useCapacity: 0, index: 1, maxCapacity: 0 },
      c: { weight: null, useCapacity: 0, index: 2, maxCapacity: 0 },
      d: { weight: null, useCapacity: 0, index: 3, maxCapacity: 0 },
      e: { weight: null, useCapacity: 0, index: 4, maxCapacity: 0 },
      f: { weight: null, useCapacity: 0, index: 5, maxCapacity: 0 },
      g: { weight: null, useCapacity: 0, index: 6, maxCapacity: 0 },
      h: { weight: null, useCapacity: 0, index: 7, maxCapacity: 0 },
      i: { weight: null, useCapacity: 0, index: 8, maxCapacity: 0 },
      j: { weight: null, useCapacity: 0, index: 9, maxCapacity: 0 },
      k: { weight: null, useCapacity: 0, index: 10, maxCapacity: 0 },
      l: { weight: null, useCapacity: 0, index: 11, maxCapacity: 0 },
      m: { weight: null, useCapacity: 0, index: 12, maxCapacity: 0 },
      n: { weight: null, useCapacity: 0, index: 13, maxCapacity: 0 },
      o: { weight: null, useCapacity: 0, index: 14, maxCapacity: 0 },
      p: { weight: null, useCapacity: 0, index: 15, maxCapacity: 0 },
      q: { weight: null, useCapacity: 0, index: 16, maxCapacity: 0 },
      r: { weight: null, useCapacity: 0, index: 17, maxCapacity: 0 },
      s: { weight: null, useCapacity: 0, index: 18, maxCapacity: 0 },
      t: { weight: null, useCapacity: 0, index: 19, maxCapacity: 0 },
      u: { weight: null, useCapacity: 0, index: 20, maxCapacity: 0 },
      v: { weight: null, useCapacity: 0, index: 21, maxCapacity: 0 },
      w: { weight: null, useCapacity: 0, index: 22, maxCapacity: 0 },
      x: { weight: null, useCapacity: 0, index: 23, maxCapacity: 0 },
      y: { weight: null, useCapacity: 0, index: 24, maxCapacity: 0 },
      z: { weight: null, useCapacity: 0, index: 25, maxCapacity: 0 },
    };
    letters.forEach((letter) => {
      dictionary[letter].maxCapacity += 1;
      dictionary[letter].weight = score[dictionary[letter].index];
    });
    return () => {
      for (let key in dictionary) {
        dictionary[key].useCapacity = dictionary[key].maxCapacity;
      }
      return dictionary;
    };
  };
  const getDict = useDict();
  let dictionary = getDict();
  const sumArray = [];
  const dumpBin = [];
  const counter = (word) => {
    let sum = 0;
    for (const element of word) {
      const dictLetter = dictionary[element];
      if (dictLetter.useCapacity) {
        sum += dictLetter.weight;
        dictLetter.useCapacity -= 1;
      } else {
        return 0;
      }
    }
    return sum;
  };
  const allArrComb = allArrCombination(words)
    .map((elem) => elem.join(""))
    .sort((a, b) => a.length - b.length);
  for (const element of allArrComb) {
    if (dumpBin.some((elem) => element.includes(elem))) {
      continue;
    }
    let sum = counter(element);
    dictionary = getDict();
    if (sum === 0) {
      dumpBin.push(element);
    }
    sumArray.push(sum);
  }

  return Math.max(...sumArray);

  function allArrCombination(arr) {
    const hash = {};
    const res = [];
    arr.sort();

    for (let i = 1; i < 1 << arr.length; i++) {
      const lineRes = [];
      for (let j = 0; j < arr.length; j++) {
        if ((i >> j) & 1) {
          lineRes.push(arr[j]);
        }
      }

      if (!hash[lineRes.join("-")]) {
        res.push(lineRes.slice());
        hash[lineRes.join("-")] = true;
      }
    }

    return res;
  }

  function nextPermutation(array) {
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) i--;
    if (i <= 0) return false;
    let j = array.length - 1;
    while (array[j] <= array[i - 1]) j--;
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;
    j = array.length - 1;
    while (i < j) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
    return true;
  }
};

console.log(
  maxScoreWords(
    [
      "ad",
      "dbacbbedc",
      "ae",
      "adbdacad",
      "dcdecacdcb",
      "ddbba",
      "dbcdbeaade",
      "aeccdcb",
      "bce",
    ],
    [
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "c",
      "c",
      "c",
      "c",
      "c",
      "c",
      "c",
      "c",
      "c",
      "c",
      "d",
      "d",
      "d",
      "d",
      "e",
      "e",
      "e",
      "e",
      "e",
      "e",
    ],
    [
      1, 8, 3, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0,
    ]
  )
);
