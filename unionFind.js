/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = (s1, s2, baseStr) => {
    const array = [];

    const find = (x) => {
        if (array[x] !== x) {
            return find(array[x]);
        }

        return x;
    }

    for (let i = 0; i < s1.length; i++) {
        const l1 = s1[i];
        const l2 = s2[i];

        array[l1] = l1;
        array[l2] = l2;
    }

    for (let i = 0; i < baseStr.length; i++) {
        const l = baseStr[i];

        array[l] = l;
    }

    for (let i = 0; i < s1.length; i++) {
        const l1 = s1[i];
        const l2 = s2[i];

        const found1 = find(array[l1]);
        const found2 = find(array[l2]);

        if (found1 < found2) {
            array[found2] = found1;
        } else if (found1 > found2) {
            array[found1] = found2;
        }
    }

    return baseStr.split('').map(find).join('');
}

smallestEquivalentString(
    "leetcode",
    "programs",
    "sourcecode",
);

