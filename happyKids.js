/**
 * @format
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

const maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);
  let sum = 0;
  const length = Math.min(happiness.length, k);
  for (let i = 0; i < length; i++) {
    if (happiness[i] > i) {
      sum += happiness[i] - i;
    } else {
      break;
    }
  }
  // let i = 0;
  // while(happiness[0] && i<k){
  //     i++;
  //     const elem = happiness.shift();
  //     sum+=elem;
  //     for(let j = 0; j<happiness.length; j++){
  //         if(happiness[j]>0){
  //             happiness[j] -= 1;
  //         }
  //         else{
  //             break;
  //         }
  //     }
  // }
  return sum;
};
