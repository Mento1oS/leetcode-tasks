const Node = function (index, value) {
    this.index = index;
    this.value = value;
}

/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
    let string = num.toString().split('');
    let isDesc = true;
    for (let i = 1; i < string.length; i++) {
        if (string[i] > string[i - 1]) {
            isDesc = false;
            i = string.length;
        }
    }
    if (isDesc) return num;
    const array = [];
    let currentMax = new Node(0,0);
    for (let i = string.length - 1; i >= 0; i--) {
        const elem = string[i];
        if (elem > currentMax.value) {
            currentMax = new Node(i, elem);
        }
        array.push(currentMax);
    }
    array.reverse();
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        const {index, value} = array[i];
        if(value>letter){
            [string[i],string[index]] = [string[index], string[i]];
            break;
        }
    }
    return Number(string.join(''));
};

console.log(maximumSwap(12));