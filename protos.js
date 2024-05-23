/** @format */

class Lol {
  #region;
  constructor(region) {
    this.#region = region;
  }
  setRegion(region) {
    this.#region = region;
  }
  getRegion() {
    return this.#region;
  }
}
console.log(Lol.__proto__ === Function.prototype);
console.log(Lol.__proto__);
console.log(Lol.prototype);
