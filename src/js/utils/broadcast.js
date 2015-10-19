var broadcast = null;

class Broadcast {

  static get BLOCK_HOVER_ADD() { return 'BLOCK_HOVER_ADD'; }
  static get BLOCK_HOVER_REMOVE() { return 'BLOCK_HOVER_REMOVE'; }
  static getInstance() { return broadcast; }

  constructor() {

    this._functions = {};

  }

  register(broadcastType, fn) {

    if (!this._functions.hasOwnProperty(broadcastType)) {

      this._functions[broadcastType] = [];

    }

    this._functions[broadcastType].push(fn);

  }

  execute(broadcastType, args = []) {

    if (this._functions.hasOwnProperty(broadcastType)) {

      this._functions[broadcastType].forEach(function(fn) {

        typeof fn === 'function' && fn.apply(fn, args);

      });

    }

  }

}

broadcast = new Broadcast();

export default Broadcast;
