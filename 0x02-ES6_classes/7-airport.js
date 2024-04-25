export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') this.__name = name;
    if (typeof code === 'string') this.__code = code;
  }

  get [Symbol.toStringTag]() {
    return this.__code;
  }
}
