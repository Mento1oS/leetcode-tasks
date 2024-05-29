/** @format */

var numSteps = function (s) {
  let count = 0;
  let number = BigInt("0b" + s);
  const numberOne = BigInt("1");
  const numberTwo = BigInt("2");
  while (number !== numberOne) {
    if (number % numberTwo) {
      number += numberOne;
    } else {
      number /= numberTwo;
    }
    count++;
  }
  return count;
};
console.log(
  numSteps("1111011110000011100000110001011011110010111001010111110001")
);
