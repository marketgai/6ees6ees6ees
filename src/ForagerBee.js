class ForagerBee extends Bee {
  constructor () {
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
    super();
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
