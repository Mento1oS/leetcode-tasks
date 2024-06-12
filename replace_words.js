/** @format */

const replaceWords = (dictionary, sentence) => {
  dictionary.sort((a, b) => a.length - b.length);
  return sentence
    .split(" ")
    .map((elem) => {
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
      return buffer.value ? buffer.value : elem;
    })
    .join(" ");
};

console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
