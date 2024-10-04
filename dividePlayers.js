/**
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers = function (skill) {
    const sorted = [...skill].sort((a, b) => a - b);
    // console.log(sorted);
    let sum = 0;
    let left = 0;
    let right = skill.length - 1;
    const neededSum = sorted[left] + sorted[right];
    while (right > left) {
        const leftElem = sorted[left];
        const rightElem =  + sorted[right];
        if(leftElem+rightElem!==neededSum) return -1;
        sum+=leftElem*rightElem;
        right--;
        left++
    }
    return sum;
};

const arr1 = [3, 2, 5, 1, 3, 4];

console.log(dividePlayers(arr1));