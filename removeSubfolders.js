/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function (folder) {
    const simplified = folder.map(elem => {
        const arrElem = elem.split('/');
        arrElem.shift();
        return arrElem;
    });

    simplified.sort((a, b) => a.length - b.length);

    console.log(simplified)

    const seen = new Set();

    const newArr = []

    simplified.forEach(elem => {
        let string = '';
        let inSet = false;
        for (let i = 0; i < elem.length; i++) {
            const letters = elem[i];
            string += letters;
            if (seen.has(string)) {
                inSet = true;
                break;
            }
        }
        if (!inSet) {
            seen.add(string);
            newArr.push(elem);
        }
    })

    return newArr.map(elem => '/' + elem.join('/'));
};

console.log(removeSubfolders(["/a/b/c","/a/b/ca","/a/b/d"]));