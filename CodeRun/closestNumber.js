const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [arrSize, line, number] = input;
    const arr = line.split(' ').map(Number);
    let minDiff = Math.abs(number-arr[0]);
    let curNumb = arr[0];
    for (let i = 1; i < arrSize; i++) {
        const diff = Math.abs(arr[i]-number);
        if(diff<minDiff) {
            minDiff = diff;
            curNumb = arr[i];
        }
    }
    console.log(curNumb);
});