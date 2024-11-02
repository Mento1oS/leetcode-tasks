/**
 * @param {string} sentence
 * @return {boolean}
 */
const isCircularSentence = function(sentence) {
    const arr = sentence.split(' ');
    if(arr[0][0]!==arr[arr.length-1][arr[arr.length-1].length-1]){
        return false;
    }
    for (let i = 1; i < arr.length; i++) {
        const prevWord = arr[i-1];
        const curWord = arr[i];
        if(prevWord[prevWord.length-1]!==curWord[0]) return false;
    }
    return true;
};