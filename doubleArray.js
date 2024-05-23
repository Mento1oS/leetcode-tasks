/** @format */

var firstDouble = function (head) {
  let addOn = 0;
  let array = head[0] > 4 ? Array(head.length + 1) : Array(head.length);
  if (array.length !== head.length) {
    addOn = 1;
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  for (let i = head.length - 1; i >= 0; i--) {
    let doubled = 2 * head[i];
    if (doubled > 9) {
      doubled -= 10;
      array[i + addOn - 1] = 1;
    }
    array[i + addOn] += doubled;
  }
  return array;
};

const simpleDouble = (head) => {
  return String(2 * Number(head.join("")))
    .split("")
    .map(Number);
};

console.log(firstDouble([7, 5, 6]));

console.log(simpleDouble([5, 4, 5, 6, 4]));

// Definition for singly-linked list.
// function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//      this.next = (next===undefined ? null : next)
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
  const createStructure = (array) => {
    const firstEl = array.shift();
    if (!array.length) {
      return {
        val: firstEl,
        next: null,
      };
    }
    return {
      val: firstEl,
      next: createStructure(array),
    };
  };
  var doubleFunc = function (head) {
    let addOn = 0;
    let array = head[0] > 4 ? Array(head.length + 1) : Array(head.length);
    if (array.length !== head.length) {
      addOn = 1;
    }
    for (let i = 0; i < array.length; i++) {
      array[i] = 0;
    }
    for (let i = head.length - 1; i >= 0; i--) {
      let doubled = 2 * head[i];
      if (doubled > 9) {
        doubled -= 10;
        array[i + addOn - 1] = 1;
      }
      array[i + addOn] += doubled;
    }
    return array;
  };
  let val;
  let elem = head;
  const array = [];
  do {
    val = elem.val;
    elem = elem.next;
    array.push(val);
  } while (elem);
  const result = doubleFunc(array);
  const object = createStructure(result);

  return object;
};
