/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l1Val = l1.val;
    let l2Val = l2.val;
    let numb = '';
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2;
        numb += `${sum}` + ' ';
        l1 ? l1 = l1.next : '';
        l2 ? l2 = l2.next : '';
    }
    const arr = numb.split(' ');
    arr.pop();
    const resultingSum = arr.map((elem, index) => {
        return Number(elem) * Math.pow(10, index);
    }).reduce((u, v) => u + v, 0);
    const stringRes = String(resultingSum).split('');
    const result = new ListNode(null, null);
    let runner = result;
    for (let i = stringRes.length - 1; i >= 0; i--) {
        runner.val = Number(stringRes[i]);
        if (i === 0) {
            runner.next = null;
        } else {
            const newOne = new ListNode(null, null);
            runner.next = newOne;
            runner = newOne;
        }
    }
    return result;
};

const lol = (l1, l2)=>{
    let l1Val = l1.val;
    let l2Val = l2.val;
    let numb = '';
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2;
        numb += `${sum}` + ' ';
        l1 ? l1 = l1.next : '';
        l2 ? l2 = l2.next : '';
    }
    let arr = numb.split(' ');
    arr.pop();
    arr = arr.map(Number);
    const arrayLength = arr[arr.length-1] > 8 ? arr.length + 1 : arr.length;
    const resultingArray = new Array(arrayLength).fill(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 9) {
            resultingArray[i] += arr[i] % 10;
            resultingArray[i + 1] += 1;
        } else {
            const newVal = arr[i] + resultingArray[i];
            if(newVal>9){
                resultingArray[i] = newVal%10;
                resultingArray[i + 1] += 1;
            }else{
                resultingArray[i] = newVal;
            }
        }
    }
    if(resultingArray[arrayLength-1]===0&&resultingArray.length>1){
        resultingArray.pop();
    }
    const result = new ListNode(null, null);
    let runner = result;
    for (let i = 0; i < resultingArray.length; i++) {
        runner.val = resultingArray[i];
        if (i === resultingArray.length - 1) {
            runner.next = null;
        } else {
            const newOne = new ListNode(null, null);
            runner.next = newOne;
            runner = newOne;
        }
    }
    return result;
}