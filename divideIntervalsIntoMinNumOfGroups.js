/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minGroups = function (intervals) {
    const array = [];
    let balance = 0;
    let max = 0;
    for (let i = 0; i < intervals.length; i++) {
        const [left, right] = intervals[i];
        if(array[left]!==undefined){
            array[left] += 1;
        }else{
            array[left] = 1;
        }
        if(array[right + 1]!==undefined){
            array[right+1]-= 1;
        }
        else{
            array[right+1] = -1;
        }
    }
    for (const arrayKey in array) {
        balance+=array[arrayKey];
        if(balance>max){
            max = balance;
        }
    }
    return max;
};

console.log(minGroups([[5,10],[6,8],[1,5],[2,3],[1,10]]));