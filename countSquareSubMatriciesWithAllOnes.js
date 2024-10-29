/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let ans = 0;
    const dp = [];

    const solve = (i, j) => {
        if (i >= rows || j >= cols || grid[i][j] === 0) return 0;

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        const right = solve(i, j + 1);
        const diagonal = solve(i + 1, j + 1);
        const below = solve(i + 1, j);

        dp[i][j] = 1 + Math.min(right, diagonal, below);
        return dp[i][j]
    }

    for (let i = 0; i < rows; i++) {
        dp.push([]);
        for (let j = 0; j < cols; j++) {
            dp[i].push(-1);
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ans += solve(i, j);
        }
    }
    return ans;
};

