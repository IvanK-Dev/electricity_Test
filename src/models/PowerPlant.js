class PowerPlant {
  #isAlive;
  constructor(id) {
    this.id = id;
    this.#isAlive = true;
  }

  get isAlive() {
    return this.#isAlive;
  }

  kill() {
    this.#isAlive = false;
  }

  repair() {
    this.#isAlive = true;
  }
}

export default PowerPlant;
