import Config from '../../config.js';
import BlockCore from '../block/block-core.js';

var world = null

  , currentDirection = 0
  , direction = [
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 1, 0),
      new THREE.Vector3(0, -1, 0)
    ];

class World {

  static get EVENT_SETBLOCK() { return 'EVENT_SETBLOCK'; }
  static get EVENT_REMOVEBLOCK() { return 'EVENT_REMOVEBLOCK'; }
  static get EVENT_RESET() { return 'EVENT_RESET'; }
  static get DIRECTION1() { return direction[0]; }
  static get DIRECTION2() { return direction[1]; }
  static get DIRECTION3() { return direction[2]; }
  static get DIRECTION4() { return direction[3]; }
  static get DIRECTION5() { return direction[4]; }
  static get DIRECTION6() { return direction[5]; }
  static getInstance() { return world; }

  constructor() {

    this._data = [];
    this._resetEvents();

    this.direction = World.DIRECTION1;

    this.reset();

    // TODO: 消す
    var self = this;
    var b = new BlockCore(16, 16, 17);
    window.w = function() {

      self.setBlock(b);

    };

    window.w2 = function() {

      self.removeBlock(b);

    };

  }

  _resetEvents() {

    this._events = {
      EVENT_SETBLOCK: [],
      EVENT_REMOVEBLOCK: [],
      EVENT_RESET: []
    };

  }

  changeView() {

    ++currentDirection >= direction.length && (currentDirection = 0);

    this.direction = direction[currentDirection];

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