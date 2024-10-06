const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str = [];

rl.on('line', (line) => {
    str = line;
}).on('close', () => {
    const regExp = new RegExp('[+-]');
    const arr = str.split(regExp);
    const signsStack = [];
    for (let i = 0; i < str.length; i++) {
        if(regExp.test(str[i])) signsStack.push(str[i]);
    }
    let sum = +arr[0];
    for (let i = 1; i < arr.length; i++) {
        const sign = signsStack[i-1];
        const number = +arr[i];
        if(sign==='-'){
            sum-=number;
        }
        else{
            sum+=number;
        }
    }
    console.log(sum);
});