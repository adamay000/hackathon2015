import Config from '../../config.js';
import BlockCore from '../block/block-core.js';

var world = null;

class World {

  static get EVENT_SETBLOCK() { return 'EVENT_SETBLOCK'; }
  static get EVENT_REMOVEBLOCK() { return 'EVENT_REMOVEBLOCK'; }
  static get EVENT_RESET() { return 'EVENT_RESET'; }
  static getInstance() { return world; }

  constructor() {

    this._data = [];
    this._resetEvents();

    this.reset();

  }

  _resetEvents() {

    this._events = {
      EVENT_SETBLOCK: [],
      EVENT_REMOVEBLOCK: [],
      EVENT_RESET: []
    };

  }

  reset() {

    debug.log.world('reset');

    for (let x = 0; x < Config.world.size; x++) {
      this._data[x] = [];
      for (let y = 0; y < Config.world.size; y++) {
        this._data[x][y] = [];
        for (let z = 0; z < Config.world.size; z++) {
          this._data[x][y][z] = null;
        }
      }
    }

    this._setCoreBlock();

    this._execute(World.EVENT_RESET);

  }

  _setCoreBlock() {

    var half = Config.world.size / 2 << 0;

    this._data[half][half][half] = new BlockCore(half, half, half);

  }

  setBlock(block) {

    if (
      block.x < 0 ||
      Config.world.size <= block.x ||
      block.y < 0 ||
      Config.world.size <= block.y ||
      block.z < 0 ||
      Config.world.size <= block.z
    ) {

      return;

    }

    var old = this.getBlock(block.x, block.y, block.z);

    if (old !== null) {

      this.removeBlock(old);

    }

    debug.log.world(`setBlock(${block.x}, ${block.y}, ${block.z}):`, old, block);

    this._data[block.x][block.y][block.z] = block;

    this._execute(World.EVENT_SETBLOCK, [old, block]);

  }

  getBlock(x, y, z) {

    return this._data[x][y][z];

  }

  getBlocks() {

    var blocks = [];

    for (let x = 0; x < Config.world.size; x++) {
      for (let y = 0; y < Config.world.size; y++) {
        for (let z = 0; z < Config.world.size; z++) {

          this._data[x][y][z] !== null && blocks.push(this._data[x][y][z]);

        }
      }
    }

    return blocks;

  }

  removeBlock(block) {

    if (!block.breakable) {

      return;

    }

    var old = block;

    debug.log.world(`removeBlock(${block.x}, ${block.y}, ${block.z}):`, old, null);

    this._data[block.x][block.y][block.z] = null;

    this._execute(World.EVENT_REMOVEBLOCK, [old, null]);

  }

  on(eventType, fn) {

    if (!this._events[eventType]) {

      return;

    }

    this._events[eventType].push(fn);

  }

  off() {

    this._resetEvents();

  }

  _execute(eventType, args = []) {

    this._events[eventType].forEach(function(fn) {

      typeof fn === 'function' && fn.apply(world, args);

    });

  }

}

world = new World();

export default World;