const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
input.push('**********');
const getNum = (elemIn, elemUp, elemDown, elemLeft, elemRight)=>{
    let count = 0;
    if(elemIn==='.'&&elemDown==='.'&&elemRight==='.'&&elemLeft==='.'){
        count++;
    }
    if(elemIn==='.'&&elemUp==='.'&&elemRight==='.'&&elemLeft==='.'){
        count++;
    }
    if(elemIn==='.'&&elemUp==='.'&&elemRight==='.'&&elemDown==='.'){
        count++;
    }
    if(elemIn==='.'&&elemUp==='.'&&elemDown==='.'&&elemLeft==='.'){
        count++;
    }
    return count;
}
let sum = 0;
rl.on('line', (line) => {
    input.push('*'+line+'*');
}).on('close', () => {
    input.push('**********');
    for (let i = 1; i < input.length-1; i++) {
        for(let j = 1; j < input[i].length-1; j++){
            const elemIn = input[i][j];
            const elemUp = input[i-1][j];
            const elemDown = input[i+1][j];
            const elemLeft = input[i][j-1];
            const elemRight = input[i][j+1];
            const num = getNum(elemIn, elemUp, elemDown, elemLeft, elemRight);
            sum+=num;
        }
    }
    console.log(sum);
});
