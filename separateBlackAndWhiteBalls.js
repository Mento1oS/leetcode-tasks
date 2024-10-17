/**
 * @param {string} s
 * @return {number}
 */
const minimumSteps = function (s) {
    let left = 0;
    let right = s.length - 1;
    let counter = 0;
    while (left<right){
        const leftLet = s[left];
        const rightLet = s[right];
        // console.log(leftLet, rightLet)
        if(leftLet === '1' && rightLet==='0'){
            counter += (right-left);
            right--;
            left++;
        }
        else if(leftLet === '1' && rightLet==='1'){
            right--;
        }
        else if(leftLet === '0' && rightLet==='0'){
            left++;
        }
        else{
            right--;
            left++;
        }
    }
    return counter;
};

console.log(minimumSteps("0111"));