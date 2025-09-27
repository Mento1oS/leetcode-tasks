const findLength = ([beg, end]: number[][]): number => {
    return Math.sqrt((beg[0] - end[0]) ** 2 + (beg[1] - end[1]) ** 2);
}


function largestTriangleArea(points: number[][]): number {
    let max = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const length1 = findLength([points[i], points[j]]);
            for (let k = j + 1; k < points.length; k++) {
                const length2 = findLength([points[i], points[k]]);
                const length3 = findLength([points[k], points[j]]);
                const p = (length1 + length2 + length3) / 2;
                const s = Math.sqrt(p * (p - length1) * (p - length2) * (p - length3));
                if (s > max) {
                    max = s;
                }
            }
        }
    }
    return max;
}