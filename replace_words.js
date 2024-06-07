/** @format */

const replaceWords = (dictionary, sentence) => {
  dictionary.sort((a, b) => a.length - b.length);
  const result = [];
  sentence.split(" ").forEach((elem) => {
    const buffer = { value: "", index: "", length: "" };
    for (const element of dictionary) {
      const index = elem.indexOf(element);
      if (index >= 0) {
        if (buffer.index === "") {
          if (index === 0) {
            buffer.value = element;
            buffer.index = index;
            buffer.length = element.length;
          }
        } else if (buffer.length === element.length) {
          if (buffer.index > index) {
            buffer.value = element;
            buffer.index = index;
            buffer.length = element.length;
          }
        } else {
          break;
        }
      }
    }
    result.push(buffer.value ? buffer.value : elem);
  });
  return result.join(" ");
};

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));


