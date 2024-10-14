/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const curEl = s[i];
        const popped = stack.pop();
        if (!popped) {
            stack.push(curEl);
        } else if (curEl === ')' && popped === '(') {
        } else {
            stack.push(popped, curEl)
        }
    }
    return stack.length;
};