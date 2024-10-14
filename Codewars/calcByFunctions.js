function zero(obj ={}) {
    const leftVal = 0;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function one(obj ={}) {
    const leftVal = 1;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function two(obj ={}) {
    const leftVal = 2;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function three(obj ={}) {
    const leftVal = 3;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function four(obj ={}) {
    const leftVal = 4;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function five(obj ={}) {
    const leftVal = 5;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function six(obj ={}) {
    const leftVal = 6;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function seven(obj ={}) {
    const leftVal = 7;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function eight(obj ={}) {
    const leftVal = 8;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}
function nine(obj={}) {
    const leftVal = 9;
    const {sign, rightVal} = obj;
    switch (sign) {
        case '-':
            return leftVal-rightVal;
        case '*':
            return leftVal*rightVal;
        case '/':
            return Math.floor(leftVal/rightVal);
        case '+':
            return leftVal+rightVal;
    }
    return leftVal;
}

function plus(rightVal) {
    const sign = '+';
    return {rightVal, sign};
}
function minus(rightVal) {
    const sign = '-';
    return {rightVal, sign};
}
function times(rightVal) {
    const sign = '*';
    return {rightVal, sign};
}
function dividedBy(rightVal) {
    const sign = '/';
    return {rightVal, sign};
}

console.log(seven(times(five())))