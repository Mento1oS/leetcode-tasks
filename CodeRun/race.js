const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [carsAmount, time, lapLength] = input[0].split(' ');
    const carsSpeed = input[1].split(' ');
    let amount = 0;
    for (let i = 1; i < carsAmount; i++) {
        const deltaSpeed = carsSpeed[0] - carsSpeed[i];
        if (deltaSpeed > 0) {
            const overtakes = deltaSpeed * time / lapLength;
            amount += overtakes === Math.floor(overtakes) ? overtakes - 1 : Math.floor(overtakes);
        }
    }
    console.log(amount);
});