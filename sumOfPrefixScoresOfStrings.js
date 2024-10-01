/**
 * @param {string[]} words
 * @return {number[]}
 */

const {
    arr5: array3,
    arr6: array4,
    arr7: array5,
    arr8: array6,
    arr9: array7
} = require('./testData');

const Node = function () {
    this.children = new Map();
    this.indexes = [];
}

const Trie = function () {
    this.root = new Node();
    this.nodes = [];
};

Trie.prototype.insert = function (word, index) {
    let currentNode = this.root;
    for (const letter of word) {
        if(!currentNode.children.has(letter)){
            currentNode.children.set(letter, new Node());
            this.nodes.push(currentNode.children.get(letter));
        }
        currentNode = currentNode.children.get(letter);
        currentNode.indexes.push(index);
    }
};

const sumPrefixScores = (words) => {
    const myTrie = new Trie();
    const data = new Array(words.length).fill(0);
    for (let i = 0; i < words.length; i++) {
        myTrie.insert(words[i], i);
    }
    myTrie.nodes.forEach(node=>{
        const indexes = node.indexes;
        const len = indexes.length;
        for (let i = 0; i < len; i++) {
            data[indexes[i]]+=len;
        }
    })
    return data;
};

const sumPrefixScoresSlow = (words) => {
    const data = new Array(words.length).fill(0);
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const sub = words[i].slice(0, j + 1);
            for (let k = 0; k < words.length; k++) {
                // console.log("word: ", words[i], ' sub: ', sub, ' word: ', words[k]);
                if (words[k].startsWith(sub)) {
                    data[i]++;
                }
            }
        }
    }
    return data;
};

const sumPrefixScoresLessSlower = (words) => {
    const data = new Array(words.length).fill(0);
    const map = new Map();
    let different = false;
    const initialSymbol = words[0][0];
    const counterMap = new Map();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const symbol = words[i][j];
            if (symbol !== initialSymbol) {
                j = words[i].length;
                i = words.length - 1;
                different = true;
            }
        }
        if (!different) {
            const localLength = words[i].length;
            const struct = counterMap.get(localLength) || {cnt: 0, i: []};
            counterMap.set(localLength, {cnt: struct.cnt + 1, i: [...struct.i, i]});
        }
    }
    if (!different) {
        const returningArray = new Array(words.length).fill(0);
        const keysOfMap = new Set();
        counterMap.forEach((_, key) => {
            keysOfMap.add(key);
        });
        console.log(keysOfMap);
        counterMap.forEach((elem, key) => {
            const {cnt, i} = elem;
            for (let j = 0; j < i.length; j++) {
                const index = i[j];
                const toAdd = Math.min(key, ...Array.from(keysOfMap));
                returningArray[index] = (key * cnt) + cnt * (keysOfMap.size > 1 ? toAdd : 0);
            }
        })
        return returningArray;
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            const sub = words[i].slice(0, j + 1);
            const struct = map.get(sub) || {i: [], cnt: 0};
            map.set(
                sub, {
                    cnt: struct.cnt + 1,
                    i: [...struct.i, i],
                }
            );
        }
    }
    map.forEach((el) => {
        const {cnt, i} = el;
        for (let j = 0; j < i.length; j++) {
            const index = i[j];
            data[index] += cnt;
        }
    });
    return data;
};

const array1 = ["abc", "ab", "bc", "b"];
const array2 = ["abcd"];
const array8 = ["bfiaaaaifb","aaaaooaaaa"];
const start = Date.now();
const res1 = sumPrefixScores(array1);
const res2 = sumPrefixScores(array2);
const res3 = sumPrefixScores(array3);
const res4 = sumPrefixScores(array4);
const res5 = sumPrefixScores(array5);
const res6 = sumPrefixScores(array6);
const res7 = sumPrefixScores(array7);
const res8 = sumPrefixScores(array8);
console.log(
    res1,
    ', ',
    res2,
    ', ',
    res3,
    ', ',
    res4,
    ', ',
    res5,
    ', ',
    res6,
    ', ',
    res7,
    ', ',
    res8,
    ' time: ',
    Date.now() - start
);