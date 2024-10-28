/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    const length = s.length;
    const arr = [];
    if (numRows === 1) return s;
    for (let i = 0; i < numRows; i++) {
        arr.push([]);
    }
    const columnSet = new Set();

    let colCount = 0;
    let diagCount = 0;
    for (let i = 0; i < length; i++) {
        if (colCount < numRows) {
            columnSet.add(i);
            colCount++;
            diagCount = 0;
        } else {
            diagCount++;
            if (diagCount === colCount - 2) {
                diagCount = 0;
                colCount = 0;
            }
        }
    }

    let colNum = 0;
    let rowNum = -1;
    let column = true;

    if (numRows === 2) {
        let firstPart = '';
        let secondPart = '';
        for (let i = 0; i < length; i++) {
            !(i % 2) ? firstPart += s[i] : secondPart += s[i];
        }
        return firstPart + secondPart;
    }

    for (let i = 0; i < length; i++) {
        const letter = s[i];
        if (columnSet.has(i) && rowNum < numRows - 1 && column) {
            rowNum++;
            arr[rowNum][colNum] = letter;
        } else {
            column = false;
            rowNum--;
            colNum++;
            arr[rowNum][colNum] = letter;
            if (rowNum === 1) {
                rowNum = -1;
                colNum++;
                column = true;
            }
        }
    }
    return arr.map(array => array.filter(Boolean).join('')).join('')
};

console.log(
    convert("PAYPALISHIRING", 3)
);