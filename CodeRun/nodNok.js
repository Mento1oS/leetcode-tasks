const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

const rec = (a, b) => {
    if (a === 0 || b === 0) {
        return Math.max(a, b)
    }
    return rec(b, a % b);
}

function NOD(A)
{
    var n = A.length, x = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
    { var y = Math.abs(A[ i ]);
        while (x && y){ x > y ? x %= y : y %= x; }
        x += y;
    }
    return x;
}

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [a_origin, b_origin] = input[0].split(' ').map(Number);
    let a = a_origin;
    let b = b_origin;
    let nod;
    while (a > 0 && b > 0) {
        if (a >= b) {
            a = a % b
        } else {
            b = b % a;
        }
    }
    nod = Math.max(a, b);
    console.log(nod, a_origin * b_origin / nod);
});