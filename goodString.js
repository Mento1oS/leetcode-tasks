/** @format */

var makeGood = function (s) {
  const string = s.split("");
  const result = [];
  while (string.length) {
    const el = string.shift();
    const popped = result.pop();
    if (
      popped !== undefined &&
      popped !== el &&
      el.toUpperCase() === popped.toUpperCase()
    ) {
      continue;
    }
    if (popped !== undefined) {
      result.push(popped);
    }
    result.push(el);
  }
  if (s.length === result.length) {
    return result.join("");
  } else {
    return makeGood(result.join(""));
  }
};
makeGood("abBAcC");
