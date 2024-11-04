/**
 * @param {string} word
 * @return {string}
 */
const compressedString = function (word) {
    let count = 1;
    let letter = word[0];
    let result = ''
    for (let i = 1; i < word.length; i++) {
        const elem = word[i];
        if (elem !== letter || count===9) {
            result += '' + count + letter;
            letter = elem;
            count = 1;
        }else{
            count++;
        }
    }
    result += '' + count + letter;
    return result;
};

console.log(compressedString("aaaaaaaaaaaaaabb"))