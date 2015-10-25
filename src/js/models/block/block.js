import Config from '../../config.js';

var id = 0;

class Block {

  static get BLOCK_BASE() { return 'BLOCK_BASE'; }
  static get BLOCK_CORE() { return 'BLOCK_CORE'; }
  static get BLOCK_MONO() { return 'BLOCK_MONO'; }

  _initialize() {}

  constructor(x, y, z) {

    this.id = ++id;

    this.x = x;
    this.y = y;
    this.z = z;

    this.type = Block.BLOCK_BASE;

    this.breakable = true;

    this.placedBy = null;

    this.color = 0x000000;
    this.borderColor = 0xffffff;

    this._initialize();

  }

  setColor(color) {

    this.color = color;

  }

  setBorderColor(color) {

    this.borderColor = color;

  }

}

export default Block;