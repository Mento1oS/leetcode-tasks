/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function (candidates) {
    const map = new Map();
    for (let i = 0; i < candidates.length; i++) {
        const binary = candidates[i].toString(2);
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === '1') {
                const index = binary.length - 1 - j;
                const prevCnt = map.get(index);
                map.set(index, prevCnt ? prevCnt + 1 : 1);
            }
        }
    }
    return Math.max(...map.values());
};

console.log(largestCombination([8, 8]))