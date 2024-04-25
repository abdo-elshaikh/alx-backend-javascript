import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, model, color, range) {
    super(brand, model, color);
    this.__range = range;
  }

  cloneCar() {
    return new Car();
  }
}
