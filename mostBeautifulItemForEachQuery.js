/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
const maximumBeauty = function (items, queries) {
    const beautyMap = new Map();
    for (let i = 0; i < items.length; i++) {
        const [price, beauty] = items[i];
        const mapEl = beautyMap.get(price);
        beautyMap.set(price, (!mapEl || mapEl < beauty) ? beauty : mapEl);
    }
    const resultingArr = Array(queries.length).fill(0);

    const preformed = Array.from(beautyMap.entries()).sort((a, b) => b[0] - a[0]);

    for (let i = preformed.length - 2; i >= 0; i--) {
        const [_, lowerBeauty] = preformed[i];
        const [__, higherBeauty] = preformed[i + 1];
        preformed[i][1] = Math.max(higherBeauty, lowerBeauty);
    }

    const queriesMap = new Map();

    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const arr = queriesMap.get(query);
        if (!arr) {
            queriesMap.set(query, [i]);
        } else {
            queriesMap.set(query, [...arr, i]);
        }
    }

    console.log(queriesMap);
    const sortedQueries = [...queries].sort((a, b) => b - a);
    let stoppedIndex = 0;

    for (let i = 0; i < queries.length; i++) {
        const price = sortedQueries[i];
        for (let j = stoppedIndex; j < preformed.length; j++) {
            const [priceLoc, beauty] = preformed[j];
            if (priceLoc <= price) {
                const indexes = queriesMap.get(price);
                for (let k = 0; k < indexes.length; k++) {
                    resultingArr[indexes[k]] = beauty;
                }
                stoppedIndex = j;
                break;
            }
        }
    }

    // for (let i = 0; i < queries.length; i++) {
    //     const price = queries[i];
    //     let broke = false;
    //     for (const [priceLoc, beauty] of preformed) {
    //         if (priceLoc <= price) {
    //             resultingArr.push(beauty);
    //             broke = true;
    //             break;
    //         }
    //     }
    //     if (!broke) {
    //         resultingArr.push(0)
    //     }
    // }
    return resultingArr;
};

console.log(maximumBeauty([[193, 732], [781, 962], [864, 954], [749, 627], [136, 746], [478, 548], [640, 908], [210, 799], [567, 715], [914, 388], [487, 853], [533, 554], [247, 919], [958, 150], [193, 523], [176, 656], [395, 469], [763, 821], [542, 946], [701, 676]], [885, 1445, 1580, 1309, 205, 1788, 1214, 1404, 572, 1170, 989, 265, 153, 151, 1479, 1180, 875, 276, 1584]));