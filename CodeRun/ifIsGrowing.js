const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const arr = input[0].split(' ').map(Number);
    let grows = true;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i-1]&&arr[i-1]>=arr[i]){
            grows = false;
        }
    }
    console.log(grows?'YES':'NO');
});