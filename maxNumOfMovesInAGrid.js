/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxMoves = function (grid) {
    const gridLength = grid.length;
    const gridElemLength = grid[0].length;
    let maxMoves = 0;
    const seen = new Set();
    const stringify = (r, c) => {
        return String(r) + ',' + String(c);
    }
    const runSearch = (row, column, count) => {
        const elem = grid[row][column];
        if (count > maxMoves) {
            maxMoves = count;
        }
        if (grid[row - 1] && grid[row - 1][column + 1] && grid[row - 1][column + 1] > elem) {
            const key = stringify(row - 1, column + 1);
            if (!seen.has(key)) {
                runSearch(row - 1, column + 1, count + 1);
                seen.add(key);
            }
        }
        if (grid[row + 1] && grid[row + 1][column + 1] && grid[row + 1][column + 1] > elem) {
            const key = stringify(row + 1, column + 1);
            if (!seen.has(key)) {
                runSearch(row + 1, column + 1, count + 1);
                seen.add(key);
            }
        }
        if (grid[row][column + 1] && grid[row][column + 1] > elem) {
            const key = stringify(row, column + 1);
            if (!seen.has(key)) {
                runSearch(row, column + 1, count + 1);
                seen.add(key);
            }
        }
    }

    for (let i = 0; i < gridLength; i++) {
        runSearch(i, 0, 0);
    }
    return maxMoves;
};

console.log(maxMoves([[3, 2, 4], [2, 1, 9], [1, 1, 7]]));