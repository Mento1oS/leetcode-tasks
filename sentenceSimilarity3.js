/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
const areSentencesSimilar = function (sentence1, sentence2) {
    const arr1 = sentence1.split(' ');
    const arr2 = sentence2.split(' ');
    let stops = 0;
    let onStop = true;
    let cnt1 = 0;
    let cnt2 = 0;
    let hasSim = false;
    let direct = true;
    if (arr1.length > arr2.length) {
        while (cnt1 < arr1.length && cnt2 < arr2.length) {
            const arr1Elem = arr1[cnt1];
            const arr2Elem = arr2[cnt2];
            if (arr1Elem === arr2Elem) {
                onStop = false;
                cnt2++;
                hasSim = true;
            } else {
                if (!onStop) {
                    onStop = true;
                    stops++;
                } else if (onStop && stops === 0) {
                    stops++;
                }
            }
            if (stops > 1) direct = false;
            cnt1++;
        }
    } else if (arr1.length === arr2.length) {
        while (cnt1 < arr1.length && cnt2 < arr2.length) {
            const arr1Elem = arr1[cnt1];
            const arr2Elem = arr2[cnt2];
            if (arr1Elem === arr2Elem) {
                cnt1++;
                cnt2++;
                hasSim = true;
            } else {
                return false;
            }
        }
    } else {
        while (cnt1 < arr1.length && cnt2 < arr2.length) {
            const arr1Elem = arr1[cnt1];
            const arr2Elem = arr2[cnt2];
            if (arr1Elem === arr2Elem) {
                onStop = false;
                cnt1++;
                hasSim = true;
            } else {
                if (!onStop) {
                    onStop = true;
                    stops++;
                } else if (onStop && stops === 0) {
                    stops++;
                }
            }
            if (stops > 1) direct = false;
            cnt2++;
        }
    }

    let reverse = true;
    const arr1Rev = [...arr1].reverse();
    const arr2Rev = [...arr2].reverse();
    let stopsRev = 0;
    let onStopRev = true;
    let cnt1Rev = 0;
    let cnt2Rev = 0;
    let hasSimRev = false;

    if (arr1Rev.length > arr2Rev.length) {
        while (cnt1Rev < arr1Rev.length && cnt2Rev < arr2Rev.length) {
            const arr1Elem = arr1Rev[cnt1Rev];
            const arr2Elem = arr2Rev[cnt2Rev];
            if (arr1Elem === arr2Elem) {
                onStopRev = false;
                cnt2Rev++;
                hasSimRev = true;
            } else {
                if (!onStopRev) {
                    onStopRev = true;
                    stopsRev++;
                } else if (onStopRev && stopsRev === 0) {
                    stopsRev++;
                }
            }
            if (stopsRev > 1) reverse = false;
            cnt1Rev++;
        }
    } else if (arr1Rev.length < arr2Rev.length) {
        while (cnt1Rev < arr1Rev.length && cnt2Rev < arr2Rev.length) {
            const arr1Elem = arr1Rev[cnt1Rev];
            const arr2Elem = arr2Rev[cnt2Rev];
            if (arr1Elem === arr2Elem) {
                onStopRev = false;
                cnt1Rev++;
                hasSimRev = true;
            } else {
                if (!onStopRev) {
                    onStopRev = true;
                    stopsRev++;
                } else if (onStopRev && stopsRev === 0) {
                    stopsRev++;
                }
            }
            if (stopsRev > 1) reverse = false;
            cnt2Rev++;
        }
    }

    if (!(reverse || direct)) {
        return false;
    }

    if (stops > 1) {
        if (!(hasSim && (arr1[arr1.length - 1] === arr2[arr2.length - 1]))) return false;
    }
    if (stopsRev > 1) {
        if (!(hasSim && (arr1Rev[arr1Rev.length - 1] === arr2Rev[arr2Rev.length - 1]))) return false;
    }
    return hasSim;
};

console.log(areSentencesSimilar("Eating right now", "Eating") === true);
console.log(areSentencesSimilar("of", "a of lot") === false);
console.log(areSentencesSimilar("a BaabbAABbBbbaAb", "a BbbA baaaaBaAabB bbab AaAB") === false);
console.log(areSentencesSimilar("bb aa aa bb", "aa bb") === true);
console.log(areSentencesSimilar("A a a a A A A", "A A a a a") === false);