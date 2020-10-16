class RetiredForagerBee extends ForagerBee {
  constructor () {
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    super();
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
