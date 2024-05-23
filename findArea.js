/** @format */

function maximalRectangle(matrix) {
  let maxArea = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === "1") {
        let width = 0;
        let rightIndex = j;
        while (rightIndex < matrix[0].length && matrix[i][rightIndex] === "1") {
          //find maximum length of rectangle
          width++;
          rightIndex++;
        }
        if ((matrix.length - i) * width > maxArea) {
          //check if maximum possible area is greater than current max
          let length = 0;
          let downIndex = i;
          while (downIndex < matrix.length && matrix[downIndex][j] === "1") {
            //move down while checking length of "1"s is same for all rows
            for (let k = 0; k < width; k++) {
              if (matrix[downIndex][j + k] === "1") continue;
              else {
                maxArea = Math.max(length * width, maxArea); //current area is the row length times column length
                width = k; //reduce the row length and continue moving down
                break;
              }
            }
            length++;
            downIndex++;
          }
          maxArea = Math.max(length * width, maxArea);
        }
      }
    }
  }
  return maxArea;
}
