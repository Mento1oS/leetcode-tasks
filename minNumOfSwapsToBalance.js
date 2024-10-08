/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const popped = stack.pop();
        const elem = s[i];
        if (!popped) {
            stack.push(elem);
        } else if (popped === '[' && elem === '[') {
            stack.push(popped, elem);
        } else if (popped === ']' && elem === ']') {
            stack.push(popped, elem);
        } else if (popped === ']' && elem === '[') {
            stack.push(popped, elem);
        }

    }
    if (stack.length / 2 < 2) {
        return stack.length / 2;
    } else {
        return Math.ceil(stack.length / 4);
    }
};

console.log('Answer:', minSwaps("][]["), minSwaps("][][") === 1, 'Correct:', 1, '\n');
console.log('Answer:', minSwaps("]]][[["), minSwaps("]]][[[") === 2, 'Correct:', 2, '\n');
console.log('Answer:', minSwaps("[]"), minSwaps("[]") === 0, 'Correct:', 0, '\n');
console.log('Answer:', minSwaps("][][]["), minSwaps("][][][") === 1, 'Correct:', 1, '\n');
console.log('Answer:', minSwaps("]]]][[][[][[[]]][[]][[[[][]]][[]]]]]][]][[][][[]][][[]]]][[[[[[["), minSwaps("]]]][[][[][[[]]][[]][[[[][]]][[]]]]]][]][[][][[]][][[]]]][[[[[[[") === 4, 'Correct:', 4, '\n');