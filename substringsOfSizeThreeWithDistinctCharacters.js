/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = function(s) {
    let good = 0;
    let count = 0;
    const seen = new Map();
    for (let i = 0; i < s.length; i++) {
        const newElem = s[i];
        const backElem = s[i-3];
        const newElemVal = seen.get(newElem);
        if(newElemVal){
            seen.set(newElem, newElemVal+1);
            good--;
        }else{
            seen.set(newElem, 1);
            good++;
        }
        if(backElem){
            const backElemVal = seen.get(backElem);
            if(backElem===1){
                seen.delete(backElem);
                good--;
            }else {
                seen.set(backElem,backElemVal-1);
                good++
            }
        }
        if(good===3){
            count++;
        }
    }
    return count;
};


console.log(countGoodSubstrings("aababcabc"));