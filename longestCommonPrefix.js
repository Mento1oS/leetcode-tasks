/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
const {arr1, arr2} = require('./testData');
const longestCommonPrefix = function (arr1, arr2) {
    const arr1String = arr1.map(String);
    const arr2String = arr2.map(String);
    let numb = 0;
    const set = new Set();
    const seenSet1 = new Set();
    const seenSet2 = new Set();
    for (let i = 0; i < arr1String.length; i++) {
        if(seenSet1.has(arr1String[i])) continue;
        for (let j = 0; j < arr1String[i].length; j++) {
            const part = arr1String[i].slice(0, j + 1);
            set.add(part);
        }
        seenSet1.add(arr1String[i]);
    }
    for (let i = 0; i < arr2String.length; i++) {
        if(seenSet2.has(arr2String[i])) continue;
        for (let j = 0; j < arr2String[i].length; j++) {
            const part = arr2String[i].slice(0, j + 1);
            if (set.has(part) && part.length > numb) {
                numb = part.length;
            }
        }
        seenSet2.add(arr2String[i]);
    }
    return numb;
};

const res1 = longestCommonPrefix(arr1, arr2);

console.log(res1)