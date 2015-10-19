import Block from './block.js';

class BlockMono extends Block {

  _initialize() {

    this.type = Block.BLOCK_MONO;

  }

  constructor(x, y, z, color, borderColor) {

    super(x, y, z);

    this.setColor(color);
    this.setBorderColor(borderColor);

  }

}

export default BlockMono;