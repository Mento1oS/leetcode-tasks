/** @format */

var TimeLimitedCache = function () {};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let flag = false;
  if (this[key]) {
    flag = true;
    clearTimeout(this[key].time);
  }
  this[key] = {
    value: value,
    time: setTimeout(() => {
      delete this[key];
    }, duration),
  };
  return flag;
};

TimeLimitedCache.prototype.get = function (key) {
  if (!this[key]) return -1;
  return this[key].value;
};

TimeLimitedCache.prototype.count = function () {
  return Object.getOwnPropertyNames(this).length;
};

const timeLimited = new TimeLimitedCache();

timeLimited.set(1, 3, 6000);
timeLimited.set(3, 5, 8000);
timeLimited.set(2, 2, 0);
console.log(timeLimited.count());
setTimeout(() => {
  console.log(timeLimited.count());
}, 2000);
