class Group {
    elements = new Set();
    min = Infinity;
}

const min = (a, b) => a < b ? a : b;

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
const smallestEquivalentString = (s1, s2, baseStr) => {
    const length = s1.length;

    let groups = [];

    for (let i = 0; i < length; i++) {
        const l1 = s1[i];
        const l2 = s2[i];

        const index1 = groups.findIndex(el => el.elements.has(l1));
        const index2 = groups.findIndex(el => el.elements.has(l2));

        if (!(index1 + 1) && !(index2 + 1)) {
            const group = new Group();
            group.elements.add(l1);
            group.elements.add(l2);
            group.min = min(l1, l2);
            groups.push(group);
        } else if (!(index1 + 1)) {
            groups[index2].elements.add(l1);
            groups[index2].min = min(groups[index2].min, l1);
        } else if (!(index2 + 1)) {
            groups[index1].elements.add(l2);
            groups[index1].min = min(groups[index1].min, l2);
        } else if (index1 !== index2) {
            groups[index1].elements = groups[index1].elements.union(groups[index2].elements);
            groups[index1].min = min(groups[index1].min, groups[index2].min);

            groups = groups.filter((_, index) => index !== index2);
        }
    }

    const forest = {};

    for (const { min, elements } of groups) {
        for (const element of Array.from(elements.values())) {
            forest[element] = min;
        }
    }

    return baseStr.split('').map(el=> forest[el]??el).join('');
};