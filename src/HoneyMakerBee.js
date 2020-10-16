class HoneyMakerBee extends Bee {
  constructor() {
    this.age = 10;
    this.job = 'make honey';
    super();
    this.honeyPot = 0;
  }

  makeHoney() {
    return this.honeyPot + 1;
  }

  giveHoney() {
    return this.honeyPot - 1;
  }
};
