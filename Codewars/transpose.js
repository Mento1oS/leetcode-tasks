function transpose(matrix) {
    const rows = matrix[0].length;
    const cols = matrix.length;
    const transposed = [];
    for (let i = 0; i < rows; i++) {
        transposed.push([]);
    }
    for(let i = 0; i < cols;i++){
        for(let j = 0; j < rows; j++){
            transposed[j][i] = matrix[i][j];
            console.log(i, j, matrix[i][j], transposed);
        }
    }
    return transposed;
}
const res = transpose([[1,2,3],[4,5,6]]);

console.log(res);