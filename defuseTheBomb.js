/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function(code, k) {
    if(k>0){
        const array = code.concat(...code);
        let aggr = 0;
        for (let i = 0; i < k; i++) {
            aggr+=array[i];
        }
        const result = [];
        for (let i = k; i < code.length+k; i++) {
            aggr = aggr+array[i]-array[i-k];
            result.push(aggr)
        }
        return result;
    }else if(k===0){
        return Array(code.length).fill(0);
    }else{
        k = -k;
        const array = code.concat(...code);
        let aggr = 0;
        for (let i = code.length-k-1; i < code.length-1; i++) {
            aggr+=array[i];
        }
        const result = [];
        for (let i = code.length-1; i < code.length*2-1; i++) {
            aggr = aggr+array[i]-array[i-k];
            result.push(aggr)
        }
        return result;
    }

};

console.log( decrypt([2,4,9,3], -2));