const arrayRankTransform = function (arr) {
    let rank = 0;
    const map = new Map();
    const sorted = Array.from(new Set([...arr].sort((a, b) => a - b)));
    for (let i = 0; i < arr.length; i++) {
        const elemNS = arr[i];
        const mapElem = map.get(elemNS) || {indexes: []};
        mapElem.indexes.push(i);
        map.set(elemNS, mapElem);
    }
    const answer = [];
    // const seen = new Set();
    for (let i = 0; i < sorted.length; i++) {
        const elemS = sorted[i];
        // if(!seen.has(elemS)){
            rank++;
            const mapElem = map.get(elemS);
            const indexes = mapElem.indexes;
            for (let j = 0; j < indexes.length; j++) {
                const index = indexes[j];
                answer[index] = rank;
            }
            // seen.add(elemS);
        // }
    }
    // console.log(map)
    return answer;
};
console.log(arrayRankTransform([100,100,100]));