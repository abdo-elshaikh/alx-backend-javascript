export default class Car {
  constructor(brand, model, color) {
    this.__brand = brand;
    this.__model = model;
    this.__color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
