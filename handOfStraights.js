/** @format */

const isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  const map = new Map();
  hand.sort((a, b) => a - b);
  for (const element of hand) {
    map.set(element, map.get(element) ? map.get(element) + 1 : 1);
  }
  for (let i = 0; i < hand.length / groupSize; i++) {
    const array = [];
    for (let [key, value] of map) {
      if (value !== 0) {
        const popped = array.pop();
        if (popped !== undefined) {
          if (key - popped === 1) {
            array.push(popped, key);
            map.set(key, value - 1);
          } else return false;
        } else {
          array.push(key);
          map.set(key, value - 1);
        }
        if (array.length === groupSize) break;
      } else {
        map.delete(key);
      }
    }
    if (array.length !== groupSize) return false;
  }
  return true;
};
console.log(isNStraightHand([8, 8, 9, 7, 7, 7, 6, 7, 10, 6], 2));
