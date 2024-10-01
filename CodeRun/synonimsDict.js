const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const map = new Map();
let num = null;
let counter = 0;
let theLonelyWord = '';
rl.on('line', (line) => {
    if (num === null) {
        num = Number(line);
    } else if (counter<num) {
        const [w1, w2] = line.split(' ');
        map.set(w1,w2);
        map.set(w2, w1);
        counter++;
    } else {
        theLonelyWord = line;
    }
}).on('close', () => {
    // console.log(map);
    console.log(map.get(theLonelyWord));
});