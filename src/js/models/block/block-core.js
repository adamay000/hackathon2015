import Block from './block.js';

class BlockCore extends Block {

  _initialize() {

    this.type = Block.BLOCK_CORE;

    this.breakable = false;

    this.setColor(0x404040);
    this.setBorderColor(0x808080);

  }

}

export default BlockCore;