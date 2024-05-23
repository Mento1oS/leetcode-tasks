/** @format */

class EventEmitter {
  subscribe(eventName, callback) {
    if (!this[eventName]) {
      this[eventName] = [];
    }
    this[eventName].push(callback);
    return {
      unsubscribe: () => {
        this[eventName] = this[eventName].filter((elem) => elem !== callback);
        return undefined;
      },
    };
  }
  emit(eventName, args = []) {
    if (!Array.isArray(this[eventName])) return [];
    return this[eventName].map((elem) => elem(...args));
  }
}

const emitter = new EventEmitter();
function onClickCallback() {
  return 99;
}
function onClickCallback() {
  return 97;
}
function onClickCallback() {
  return 96;
}
const sub = emitter.subscribe("onClick", function onClickCallback() {
  return 99;
});
emitter.subscribe("onClick", function onClickCallback() {
  return 97;
});
emitter.subscribe("onClick", function onClickCallback() {
  return 96;
});
emitter.subscribe("onClick", function onClickCb() {
  return 97;
});
console.log(emitter.emit("onClick"));
