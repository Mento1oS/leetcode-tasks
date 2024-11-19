/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canSortArray = function (nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const sortedSets = [];
    const numsSets = [];
    for (let i = 0; i < nums.length; i++) {
        const numSort = sorted[i];
        const numCur = nums[i];
        const sortBin = numSort.toString(2);
        const curBin = numCur.toString(2);
        let sortSet = 0;
        let curSet = 0;

        for (let j = 0; j < sortBin.length; j++) {
            if (sortBin[j] === '1') {
                sortSet++;
            }
        }

        for (let j = 0; j < curBin.length; j++) {
            if (curBin[j] === '1') {
                curSet++;
            }
        }

        sortedSets.push(sortSet);
        numsSets.push(curSet);

        if (curSet !== sortSet) {
            return false;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const numSort = sorted[i];
        const numCur = nums[i];
        if(numSort>numCur){
            for (let j = i; j >= 0; j--) {
                const elem = sorted[j];
                if(elem===numCur){
                    break;
                }else{
                    if(sortedSets[j]!==numsSets[i]){
                        return false;
                    }
                }
            }
        }else if(numSort<numCur){
            for (let j = i; j < nums.length; j++) {
                const elem = sorted[j];
                if(elem===numCur){
                    break;
                }else{
                    if(sortedSets[j]!==numsSets[i]){
                        return false;
                    }
                }
            }
        }
    }
    // console.log(sortedSets, numsSets)
    return true;
};

console.log(canSortArray([20, 6, 7, 10, 20, 6, 20]));