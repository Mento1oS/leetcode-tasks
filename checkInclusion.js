function Node() {
    this.count = 0;
    this.live = 0;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    const wordBySymbols = new Map();
    for (let i = 0; i < s1.length; i++) {
        const letter = s1[i];
        const node = wordBySymbols.get(letter) || new Node();
        node.count++;
        wordBySymbols.set(letter, node);
    }
    let leftP = -s1.length;
    let rightP = 0;
    let accordance = 0;
    while (rightP < s2.length) {
        const leftLetter = s2[leftP];
        const rightLetter = s2[rightP];
        if(leftLetter&&wordBySymbols.has(leftLetter)){
            const leftNode = wordBySymbols.get(leftLetter);
            leftNode.live--;
            if(leftNode.count>leftNode.live){
                accordance--;
            }
        }
        if(wordBySymbols.has(rightLetter)){
            const rightNode = wordBySymbols.get(rightLetter);
            rightNode.live++;
            if(rightNode.live<=rightNode.count){
                accordance++
            }
        }
        if(accordance === s1.length) return true;
        leftP++;
        rightP++;
    }
    return false
};

console.log(checkInclusion("ab", "eidboaoo"))