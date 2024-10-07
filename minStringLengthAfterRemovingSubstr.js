/**
 * @param {string} s
 * @return {number}
 */
const minLength = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const stackEnd = stack.pop();
        const wordLetter = s[i];
        if ((stackEnd === "A" && wordLetter === "B") || (stackEnd === 'C' && wordLetter === 'D')) continue;
        else {
            if (!stackEnd) stack.push(wordLetter);
            else stack.push(stackEnd, wordLetter);
        }
    }
    return stack.length;
};

console.log(minLength("ABFCACDB"))