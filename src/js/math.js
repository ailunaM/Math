export class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this._stoned = false;

    this.buffer = new ArrayBuffer(4);
    this.view = new DataView(this.buffer);
  }
  get baseAttack() {
    return this._baseAttack;
  }
  set baseAttack(value) {
    if (value < 0) {
      throw new Error("Base attack cannot be negative");
    }
    this._baseAttack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  getAttack(distance) {
    let attack;

    switch (distance) {
      case 1:
        attack = this.baseAttack;
        break;
      case 2:
        attack = this.baseAttack * 0.9;
        break;
      case 3:
        attack = this.baseAttack * 0.8;
        break;
      case 4:
        attack = this.baseAttack * 0.7;
        break;
      case 5:
        attack = this.baseAttack * 0.6;
        break;
      default:
        attack = 0;
    }

    if (this._stoned) {
      attack -= Math.log2(distance) * 5;
    }

    this.view.setFloat32(0, Math.max(attack, 0));

    return Math.max(attack, 0);
  }
}

export class Magician extends Character {
  constructor(baseAttack) {
    super(baseAttack);
  }
}

export class Daemon extends Character {
  constructor(baseAttack) {
    super(baseAttack);
  }
}
const magician = new Magician(100);
const daemon = new Daemon(100);
console.log("Magician attack on distance 2:", magician.getAttack(2));
console.log("Daemon attack on distance 3:", daemon.getAttack(3));
