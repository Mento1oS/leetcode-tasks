/**
 * @param {string} s
 * @return {number}
 */
const minChanges = function (s) {
    let swaps = 0;
    let count = 1;
    let curChar = s[0];
    for (let i = 1; i < s.length; i++) {
        const elem = s[i];
        if (elem === curChar && count === 1) {
            count = 0;
        }
        else if(count===0){
            curChar=s[i];
            count++;
        }else if(elem!==curChar){
            swaps++;
            count=0;
        }
    }
    return swaps;
};