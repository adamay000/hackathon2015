(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Config = {
  html: {
    scene: {
      loading: '#scene-loading',
      game: '#scene-game',
      result: '#scene-result'
    },
    loading: {
      playButton: '#start-play'
    },
    game: {
      preview: '#preview',
      editor: '#editor',
      quitButton: '#game-quit',
      viewChangeButton: '#view-changer',
      boxSelector: '#box-selector'
    },
    loader: '#loader'
  },
  scene: {
    duration: 500
  },
  game: {
    textureSize: 33,
    preview: {
      showBorder: true,
      isFlat: false,
      rotationSpeed: 15 * 1000,
      rotationSpeedY: 30 * 1000
    }
  },
  world: {
    size: 32
  }
};

exports['default'] = Config;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _scenesSceneLoadingJs = require('./scenes/scene-loading.js');

var _scenesSceneLoadingJs2 = _interopRequireDefault(_scenesSceneLoadingJs);

var _scenesSceneGameJs = require('./scenes/scene-game.js');

var _scenesSceneGameJs2 = _interopRequireDefault(_scenesSceneGameJs);

var _scenesSceneResultJs = require('./scenes/scene-result.js');

var _scenesSceneResultJs2 = _interopRequireDefault(_scenesSceneResultJs);

var Main = function Main() {
  _classCallCheck(this, Main);

  //loading.enter();
  _scenesSceneGameJs2['default'].enter();

  // TODO: デバッグ用のシーン切り替え
  debug(function () {

    window.scene = {
      loading: function loading() {
        _scenesSceneGameJs2['default'].leave(_scenesSceneLoadingJs2['default'].enter.bind(_scenesSceneLoadingJs2['default']));_scenesSceneResultJs2['default'].leave(_scenesSceneLoadingJs2['default'].enter.bind(_scenesSceneLoadingJs2['default']));
      },
      game: function game() {
        _scenesSceneLoadingJs2['default'].leave(_scenesSceneGameJs2['default'].enter.bind(_scenesSceneGameJs2['default']));_scenesSceneResultJs2['default'].leave(_scenesSceneGameJs2['default'].enter.bind(_scenesSceneGameJs2['default']));
      },
      result: function result() {
        _scenesSceneLoadingJs2['default'].leave(_scenesSceneResultJs2['default'].enter.bind(_scenesSceneResultJs2['default']));_scenesSceneGameJs2['default'].leave(_scenesSceneResultJs2['default'].enter.bind(_scenesSceneResultJs2['default']));
      }
    };
  });

  (function () {
    var script = document.createElement('script');script.onload = function () {
      var stats = new Stats();stats.domElement.style.cssText = 'position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop() {
        stats.update();requestAnimationFrame(loop);
      });
    };script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);
  })();
};

new Main();

},{"./scenes/scene-game.js":15,"./scenes/scene-loading.js":16,"./scenes/scene-result.js":17}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _blockJs = require('./block.js');

var _blockJs2 = _interopRequireDefault(_blockJs);

var BlockCore = (function (_Block) {
  _inherits(BlockCore, _Block);

  function BlockCore() {
    _classCallCheck(this, BlockCore);

    _get(Object.getPrototypeOf(BlockCore.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BlockCore, [{
    key: '_initialize',
    value: function _initialize() {

      this.type = _blockJs2['default'].BLOCK_CORE;

      this.breakable = false;

      this.setColor(0x404040);
      this.setBorderColor(0x808080);
    }
  }]);

  return BlockCore;
})(_blockJs2['default']);

exports['default'] = BlockCore;
module.exports = exports['default'];

},{"./block.js":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _blockJs = require('./block.js');

var _blockJs2 = _interopRequireDefault(_blockJs);

var BlockMono = (function (_Block) {
  _inherits(BlockMono, _Block);

  _createClass(BlockMono, [{
    key: '_initialize',
    value: function _initialize() {

      this.type = _blockJs2['default'].BLOCK_MONO;
    }
  }]);

  function BlockMono(x, y, z, color, borderColor) {
    _classCallCheck(this, BlockMono);

    _get(Object.getPrototypeOf(BlockMono.prototype), 'constructor', this).call(this, x, y, z);

    this.setColor(color);
    this.setBorderColor(borderColor);
  }

  return BlockMono;
})(_blockJs2['default']);

exports['default'] = BlockMono;
module.exports = exports['default'];

},{"./block.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var id = 0;

var Block = (function () {
  _createClass(Block, [{
    key: '_initialize',
    value: function _initialize() {}
  }], [{
    key: 'BLOCK_BASE',
    get: function get() {
      return 'BLOCK_BASE';
    }
  }, {
    key: 'BLOCK_CORE',
    get: function get() {
      return 'BLOCK_CORE';
    }
  }, {
    key: 'BLOCK_MONO',
    get: function get() {
      return 'BLOCK_MONO';
    }
  }]);

  function Block(x, y, z) {
    _classCallCheck(this, Block);

    this.id = ++id;

    this.x = x;
    this.y = y;
    this.z = z;

    this.type = Block.BLOCK_BASE;

    this.breakable = true;

    this.color = 0x000000;
    this.borderColor = 0xffffff;

    this._initialize();
  }

  _createClass(Block, [{
    key: 'setColor',
    value: function setColor(color) {

      this.color = color;
    }
  }, {
    key: 'setBorderColor',
    value: function setBorderColor(color) {

      this.borderColor = color;
    }
  }]);

  return Block;
})();

exports['default'] = Block;
module.exports = exports['default'];

},{"../../config.js":1}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var drawSettings = null;

var DrawSettings = (function () {
  _createClass(DrawSettings, null, [{
    key: "getInstance",
    value: function getInstance() {
      return drawSettings;
    }
  }]);

  function DrawSettings() {
    _classCallCheck(this, DrawSettings);

    this.color = 0xffffff;
    this.borderColor = 0x808080;
  }

  _createClass(DrawSettings, [{
    key: "setColor",
    value: function setColor(color) {

      this.color = color;
    }
  }, {
    key: "setBorderColor",
    value: function setBorderColor(borderColor) {

      this.borderColor = borderColor;
    }
  }]);

  return DrawSettings;
})();

drawSettings = new DrawSettings();

exports["default"] = DrawSettings;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _blockBlockCoreJs = require('../block/block-core.js');

var _blockBlockCoreJs2 = _interopRequireDefault(_blockBlockCoreJs);

var world = null,
    currentDirection = 0,
    direction = [new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)];

var World = (function () {
  _createClass(World, null, [{
    key: 'getInstance',
    value: function getInstance() {
      return world;
    }
  }, {
    key: 'EVENT_SETBLOCK',
    get: function get() {
      return 'EVENT_SETBLOCK';
    }
  }, {
    key: 'EVENT_REMOVEBLOCK',
    get: function get() {
      return 'EVENT_REMOVEBLOCK';
    }
  }, {
    key: 'EVENT_RESET',
    get: function get() {
      return 'EVENT_RESET';
    }
  }, {
    key: 'DIRECTION1',
    get: function get() {
      return direction[0];
    }
  }, {
    key: 'DIRECTION2',
    get: function get() {
      return direction[1];
    }
  }, {
    key: 'DIRECTION3',
    get: function get() {
      return direction[2];
    }
  }, {
    key: 'DIRECTION4',
    get: function get() {
      return direction[3];
    }
  }, {
    key: 'DIRECTION5',
    get: function get() {
      return direction[4];
    }
  }, {
    key: 'DIRECTION6',
    get: function get() {
      return direction[5];
    }
  }]);

  function World() {
    _classCallCheck(this, World);

    this._data = [];
    this._resetEvents();

    this.direction = World.DIRECTION1;

    this.reset();

    // TODO: 消す
    var self = this;
    var b = new _blockBlockCoreJs2['default'](16, 16, 17);
    window.w = function () {

      self.setBlock(b);
    };

    window.w2 = function () {

      self.removeBlock(b);
    };
  }

  _createClass(World, [{
    key: '_resetEvents',
    value: function _resetEvents() {

      this._events = {
        EVENT_SETBLOCK: [],
        EVENT_REMOVEBLOCK: [],
        EVENT_RESET: []
      };
    }
  }, {
    key: 'changeView',
    value: function changeView() {

      ++currentDirection >= direction.length && (currentDirection = 0);

      this.direction = direction[currentDirection];
    }
  }, {
    key: 'reset',
    value: function reset() {

      debug.log.world('reset');

      for (var x = 0; x < _configJs2['default'].world.size; x++) {
        this._data[x] = [];
        for (var y = 0; y < _configJs2['default'].world.size; y++) {
          this._data[x][y] = [];
          for (var z = 0; z < _configJs2['default'].world.size; z++) {
            this._data[x][y][z] = null;
          }
        }
      }

      this._setCoreBlock();

      this._execute(World.EVENT_RESET);
    }
  }, {
    key: '_setCoreBlock',
    value: function _setCoreBlock() {

      var half = _configJs2['default'].world.size / 2 << 0;

      this._data[half][half][half] = new _blockBlockCoreJs2['default'](half, half, half);
    }
  }, {
    key: 'setBlock',
    value: function setBlock(block) {

      if (block.x < 0 || _configJs2['default'].world.size <= block.x || block.y < 0 || _configJs2['default'].world.size <= block.y || block.z < 0 || _configJs2['default'].world.size <= block.z) {

        return;
      }

      var old = this.getBlock(block.x, block.y, block.z);

      if (old !== null) {

        this.removeBlock(old);
      }

      debug.log.world('setBlock(' + block.x + ', ' + block.y + ', ' + block.z + '):', old, block);

      this._data[block.x][block.y][block.z] = block;

      this._execute(World.EVENT_SETBLOCK, [old, block]);
    }
  }, {
    key: 'getBlock',
    value: function getBlock(x, y, z) {

      return this._data[x][y][z];
    }
  }, {
    key: 'getBlocks',
    value: function getBlocks() {

      var blocks = [];

      for (var x = 0; x < _configJs2['default'].world.size; x++) {
        for (var y = 0; y < _configJs2['default'].world.size; y++) {
          for (var z = 0; z < _configJs2['default'].world.size; z++) {

            this._data[x][y][z] !== null && blocks.push(this._data[x][y][z]);
          }
        }
      }

      return blocks;
    }
  }, {
    key: 'removeBlock',
    value: function removeBlock(block) {

      if (!block.breakable) {

        return;
      }

      var old = block;

      debug.log.world('removeBlock(' + block.x + ', ' + block.y + ', ' + block.z + '):', old, null);

      this._data[block.x][block.y][block.z] = null;

      this._execute(World.EVENT_REMOVEBLOCK, [old, null]);
    }
  }, {
    key: 'on',
    value: function on(eventType, fn) {

      if (!this._events[eventType]) {

        return;
      }

      this._events[eventType].push(fn);
    }
  }, {
    key: 'off',
    value: function off() {

      this._resetEvents();
    }
  }, {
    key: '_execute',
    value: function _execute(eventType) {
      var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      this._events[eventType].forEach(function (fn) {

        typeof fn === 'function' && fn.apply(world, args);
      });
    }
  }]);

  return World;
})();

world = new World();

exports['default'] = World;
module.exports = exports['default'];

},{"../../config.js":1,"../block/block-core.js":3}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _modelsDrawSettingsDrawSettingsJs = require('../../models/draw-settings/draw-settings.js');

var _modelsDrawSettingsDrawSettingsJs2 = _interopRequireDefault(_modelsDrawSettingsDrawSettingsJs);

var drawSettings = _modelsDrawSettingsDrawSettingsJs2['default'].getInstance();

var BoxSelector = function BoxSelector() {
  _classCallCheck(this, BoxSelector);

  this._$dom = $(_configJs2['default'].html.game.boxSelector);

  this._idx = 0;
  this._color = '#ffffff';
  this._borderColor = '#c0c0c0';

  var self = this,
      colors = [{ color: '#ffffff', borderColor: '#808080' }, { color: '#404040', borderColor: '#808080' }, { color: '#808080', borderColor: '#c0c0c0' }, { color: '#c0c0c0', borderColor: '#808080' }, { color: '#ff0000', borderColor: '#800000' }, { color: '#00ff00', borderColor: '#008000' }, { color: '#0000ff', borderColor: '#000080' }, { color: '#ffff00', borderColor: '#808000' }, { color: '#ff00ff', borderColor: '#800080' }, { color: '#00ffff', borderColor: '#008080' }, { color: '#800000', borderColor: '#c00000' }, { color: '#008000', borderColor: '#00c000' }, { color: '#000080', borderColor: '#0000c0' }, { color: '#808000', borderColor: '#c0c000' }, { color: '#800080', borderColor: '#c000c0' }, { color: '#008080', borderColor: '#00c0c0' }];

  var li = [];

  colors.forEach(function (color, idx) {

    li.push('<li id="box-selector-color-' + idx + '" style="background: ' + color.color + '; border-top: 1px ' + color.borderColor + ' solid; border-bottom: 1px ' + color.borderColor + ' solid;">' + color.color + '</li>');
  });

  this._$dom.html('<ul>' + li.join('') + '</ul>');

  colors.forEach(function (color, idx) {

    $('#box-selector-color-' + idx).on('click', function () {

      self._idx = idx;
      self._color = color.color;
      self._borderColor = color.borderColor;
      drawSettings.setColor(color.color);
      drawSettings.setBorderColor(color.borderColor);
    });
  });
};

exports['default'] = new BoxSelector();
module.exports = exports['default'];

},{"../../config.js":1,"../../models/draw-settings/draw-settings.js":6}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _utilsBroadcastJs = require('../../utils/broadcast.js');

var _utilsBroadcastJs2 = _interopRequireDefault(_utilsBroadcastJs);

var _canvasMeshesJs = require('./canvas-meshes.js');

var _canvasMeshesJs2 = _interopRequireDefault(_canvasMeshesJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    broadcast = _utilsBroadcastJs2['default'].getInstance();

var CanvasBase = (function () {
  _createClass(CanvasBase, [{
    key: '_setDom',
    value: function _setDom() {

      this._$dom = $();
    }
  }, {
    key: '_initialize',
    value: function _initialize() {}
  }]);

  function CanvasBase() {
    _classCallCheck(this, CanvasBase);

    this._isAlive = true;

    this._setDom();
    this._$parent = this._$dom.parent();

    this._meshes = new _canvasMeshesJs2['default']();
    this._isFlat = false;

    this._zero = new THREE.Vector3(0, 0, 0);

    this._renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialiasing: true,
      canvas: this._$dom.get(0)
    });
    this._scene = new THREE.Scene();

    this._camera = new THREE.OrthographicCamera();

    this.resize();

    this._clock = new THREE.Clock();

    world.on(_modelsWorldWorldJs2['default'].EVENT_SETBLOCK, this._eventSetBlockDefault.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_REMOVEBLOCK, this._eventRemoveBlockDefault.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_RESET, this._eventResetDefault.bind(this));

    world.on(_modelsWorldWorldJs2['default'].EVENT_SETBLOCK, this._eventSetBlock.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_REMOVEBLOCK, this._eventRemoveBlock.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_RESET, this._eventReset.bind(this));

    this._renderer.domElement.addEventListener('mousemove', this._eventHover.bind(this));
    this._renderer.domElement.addEventListener('click', this._eventClick.bind(this));
    this._renderer.domElement.addEventListener('contextmenu', this._eventRightClick.bind(this));
    window.addEventListener('resize', this.resize.bind(this));

    broadcast.register(_utilsBroadcastJs2['default'].BLOCK_HOVER_ADD, this._addHoverEffect.bind(this));
    broadcast.register(_utilsBroadcastJs2['default'].BLOCK_HOVER_REMOVE, this._removeHoverEffect.bind(this));

    this._initialize();

    this._animateLoop();
  }

  _createClass(CanvasBase, [{
    key: '_eventSetBlockDefault',
    value: function _eventSetBlockDefault(oldBlock, newBlock) {

      debug.log.game('setBlock:', oldBlock, newBlock);

      this._removeBlock(oldBlock);
      this._setBlock(newBlock);
    }
  }, {
    key: '_eventRemoveBlockDefault',
    value: function _eventRemoveBlockDefault(oldBlock, newBlock) {

      debug.log.game('removeBlock:', oldBlock, newBlock);

      this._removeBlock(oldBlock);
      this._setBlock(newBlock);
    }
  }, {
    key: '_eventResetDefault',
    value: function _eventResetDefault() {

      this._resetScene();

      this._loadBlocks();
    }
  }, {
    key: '_eventSetBlock',
    value: function _eventSetBlock() {}
  }, {
    key: '_eventRemoveBlock',
    value: function _eventRemoveBlock() {}
  }, {
    key: '_eventReset',
    value: function _eventReset() {}
  }, {
    key: '_eventClick',
    value: function _eventClick(event) {}
  }, {
    key: '_eventRightClick',
    value: function _eventRightClick(event) {}
  }, {
    key: '_eventHover',
    value: function _eventHover(event) {}
  }, {
    key: '_addHoverEffect',
    value: function _addHoverEffect() {}
  }, {
    key: '_removeHoverEffect',
    value: function _removeHoverEffect() {}
  }, {
    key: '_animate',
    value: function _animate() {}
  }, {
    key: '_animateLoop',
    value: function _animateLoop() {

      if (!this._isAlive) {

        return;
      }

      var frame = this._clock.getElapsedTime() * 1000;

      this._animate(frame);

      requestAnimationFrame(this._animateLoop.bind(this));
    }
  }, {
    key: 'resize',
    value: function resize() {

      this._width = this._$parent.width();
      this._height = this._$parent.height();
      this._shorter = this._width > this._height ? this._height : this._width;

      this._renderer.setSize(this._width, this._height);

      var distance = _configJs2['default'].world.size / 4 * _configJs2['default'].game.textureSize,
          rate = this._width / this._height;

      this._camera.top = distance;
      this._camera.right = distance * rate;
      this._camera.bottom = -distance;
      this._camera.left = -distance * rate;

      //this._camera.aspect = this._width / this._height;
      this._camera.updateProjectionMatrix();
    }
  }, {
    key: '_resetScene',
    value: function _resetScene() {

      this._scene = null;

      this._scene = new THREE.Scene();
    }
  }, {
    key: '_loadBlocks',
    value: function _loadBlocks() {

      var self = this,
          blocks = world.getBlocks();

      debug.log.game('loadBlocks:', blocks);

      blocks.forEach(function (block) {

        self._setBlock(block);
      });
    }
  }, {
    key: '_setBlock',
    value: function _setBlock(block) {

      if (block === null) {

        return;
      }

      var mesh = this._meshes.createMesh(block, this._isFlat);
      this._scene.add(mesh);

      if (_configJs2['default'].game.preview.showBorder) {

        var border = this._meshes.createBorder(block);
        this._scene.add(border);
      }
    }
  }, {
    key: '_removeBlock',
    value: function _removeBlock(block) {

      if (block === null) {

        return;
      }

      var mesh = this._meshes.getMesh(block);
      this._scene.remove(mesh);

      if (_configJs2['default'].game.preview.showBorder) {

        var border = this._meshes.getBorder(block);
        this._scene.remove(border);
      }

      this._meshes.remove(block);
    }
  }, {
    key: 'destroy',
    value: function destroy() {

      this._isAlive = false;

      // TODO: イベントを切る処理を書く
      //world.off();
      //
      //this._renderer.domElement.removeEventListener('mousemove', this._eventHover.bind(this));
      //this._renderer.domElement.removeEventListener('click', this._eventClick.bind(this));
      //this._renderer.domElement.removeEventListener('contextmenu', this._eventRightClick.bind(this));
      //window.removeEventListener('resize', this.resize.bind(this));
      //
      ////broadcast.unregister(Broadcast.BLOCK_HOVER_ADD, this._addHoverEffect.bind(this));
      ////broadcast.unregister(Broadcast.BLOCK_HOVER_REMOVE, this._removeHoverEffect.bind(this));

      this._renderer = null;
    }
  }, {
    key: 'render',
    value: function render() {

      this._renderer.render(this._scene, this._camera);
    }
  }]);

  return CanvasBase;
})();

exports['default'] = CanvasBase;
module.exports = exports['default'];

},{"../../config.js":1,"../../models/world/world.js":7,"../../utils/broadcast.js":18,"./canvas-meshes.js":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _canvasBaseJs = require('./canvas-base.js');

var _canvasBaseJs2 = _interopRequireDefault(_canvasBaseJs);

var _utilsBroadcastJs = require('../../utils/broadcast.js');

var _utilsBroadcastJs2 = _interopRequireDefault(_utilsBroadcastJs);

var _modelsDrawSettingsDrawSettingsJs = require('../../models/draw-settings/draw-settings.js');

var _modelsDrawSettingsDrawSettingsJs2 = _interopRequireDefault(_modelsDrawSettingsDrawSettingsJs);

var _modelsBlockBlockMonoJs = require('../../models/block/block-mono.js');

var _modelsBlockBlockMonoJs2 = _interopRequireDefault(_modelsBlockBlockMonoJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    broadcast = _utilsBroadcastJs2['default'].getInstance(),
    drawSettings = _modelsDrawSettingsDrawSettingsJs2['default'].getInstance();

var Preview = (function (_CanvasBase) {
  _inherits(Preview, _CanvasBase);

  function Preview() {
    _classCallCheck(this, Preview);

    _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Preview, [{
    key: '_setDom',
    value: function _setDom() {

      this._$dom = $(_configJs2['default'].html.game.editor);
    }
  }, {
    key: '_initialize',
    value: function _initialize() {

      debug.log.editor('initializing editor ...');

      this._isFlat = true;

      this._raycaster = new THREE.Raycaster();

      this._hovered = null;

      this._lastHoverEvent = null;

      this._loadBlocks();
    }
  }, {
    key: '_animate',
    value: function _animate(frame) {

      this.render();
    }
  }, {
    key: '_eventClick',
    value: function _eventClick(event) {

      var interacts = this._getInteracts(event.offsetX, event.offsetY);

      if (interacts.length) {

        var mesh = interacts[0].object,
            block = this._meshes.getBlockByMeshId(mesh.uuid),
            self = this;

        world.setBlock(new _modelsBlockBlockMonoJs2['default'](block.x + world.direction.x, block.y + world.direction.y, block.z + world.direction.z, drawSettings.color, drawSettings.borderColor));
      }
    }
  }, {
    key: '_eventRightClick',
    value: function _eventRightClick(event) {

      event.preventDefault();

      var interacts = this._getInteracts(event.offsetX, event.offsetY);

      if (interacts.length) {

        var mesh = interacts[0].object,
            block = this._meshes.getBlockByMeshId(mesh.uuid);

        world.removeBlock(block);
      }
    }
  }, {
    key: '_eventSetBlock',
    value: function _eventSetBlock() {

      if (this._lastHoverEvent === null) {

        return;
      }

      var self = this;

      setTimeout(function () {
        self._eventHover(self._lastHoverEvent);
      }, 10);
    }
  }, {
    key: '_eventHover',
    value: function _eventHover(event) {

      this._lastHoverEvent = event;

      var interacts = this._getInteracts(event.offsetX, event.offsetY);

      if (interacts.length) {

        var mesh = interacts[0].object;

        if (mesh !== this._hovered) {

          var blockId = this._meshes.getBlockIdByMeshId(mesh.uuid);

          broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_REMOVE);
          broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_ADD, [blockId]);
        }

        return;
      }

      broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_REMOVE);
    }
  }, {
    key: '_getInteracts',
    value: function _getInteracts(mouseX, mouseY) {

      var x = mouseX / this._width * 2 - 1,
          y = -(mouseY / this._height) * 2 + 1,
          vec = new THREE.Vector3(x, y, 1);

      this._raycaster.setFromCamera(vec, this._camera);

      return this._raycaster.intersectObjects(this._meshes.getMeshes());
    }
  }, {
    key: '_addHoverEffect',
    value: function _addHoverEffect(blockId) {

      var mesh = this._meshes.getMeshByBlockId(blockId);

      if (mesh !== null) {

        mesh.material.opacity = 0.8;
        this._hovered = mesh;
      }
    }
  }, {
    key: '_removeHoverEffect',
    value: function _removeHoverEffect() {

      if (this._hovered !== null) {

        this._hovered.material.opacity = 1;
        this._hovered = null;
      }
    }
  }, {
    key: 'resize',
    value: function resize() {

      _get(Object.getPrototypeOf(Preview.prototype), 'resize', this).call(this);

      var base = this._$parent.height() / 2 * Math.sqrt(3),
          per = this._shorter / _configJs2['default'].world.size;

      this._cameraDistance = base * _configJs2['default'].game.textureSize / per;

      this.setCamera();
    }
  }, {
    key: 'setCamera',
    value: function setCamera() {

      var camera = world.direction.clone().multiplyScalar(this._cameraDistance);
      this._camera.position.x = camera.x;
      this._camera.position.y = camera.y;
      this._camera.position.z = camera.z;
      this._camera.lookAt(this._zero);
    }
  }]);

  return Preview;
})(_canvasBaseJs2['default']);

exports['default'] = Preview;
module.exports = exports['default'];

},{"../../config.js":1,"../../models/block/block-mono.js":4,"../../models/draw-settings/draw-settings.js":6,"../../models/world/world.js":7,"../../utils/broadcast.js":18,"./canvas-base.js":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var CanvasMeshes = (function () {
  function CanvasMeshes() {
    _classCallCheck(this, CanvasMeshes);

    this._meshes = [];
    this._borders = [];
  }

  _createClass(CanvasMeshes, [{
    key: 'getMeshes',
    value: function getMeshes() {

      var meshes = [];

      for (var idx in this._meshes) {

        meshes.push(this._meshes[idx].mesh);
      }

      return meshes;
    }
  }, {
    key: 'getMesh',
    value: function getMesh(block) {

      for (var idx in this._meshes) {

        if (this._meshes[idx].blockId === block.id) {

          return this._meshes[idx].mesh;
        }
      }

      return null;
    }
  }, {
    key: 'getMeshByBlockId',
    value: function getMeshByBlockId(blockId) {

      for (var idx in this._meshes) {

        if (this._meshes[idx].blockId === blockId) {

          return this._meshes[idx].mesh;
        }
      }

      return null;
    }
  }, {
    key: 'getBlockByMeshId',
    value: function getBlockByMeshId(meshId) {

      for (var idx in this._meshes) {

        if (this._meshes[idx].meshId === meshId) {

          return this._meshes[idx].block;
        }
      }

      return null;
    }
  }, {
    key: 'getBlockIdByMeshId',
    value: function getBlockIdByMeshId(meshId) {

      for (var idx in this._meshes) {

        if (this._meshes[idx].meshId === meshId) {

          return this._meshes[idx].blockId;
        }
      }

      return null;
    }
  }, {
    key: 'getBorder',
    value: function getBorder(block) {

      for (var idx in this._borders) {

        if (this._borders[idx].blockId === block.id) {

          return this._borders[idx].border;
        }
      }

      return null;
    }
  }, {
    key: 'createMesh',
    value: function createMesh(block) {
      var isFlat = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var geometry = new THREE.BoxGeometry(_configJs2['default'].game.textureSize, _configJs2['default'].game.textureSize, _configJs2['default'].game.textureSize),
          mat = isFlat ? THREE.MeshBasicMaterial : THREE.MeshLambertMaterial,
          material = new mat({
        color: block.color,
        ambient: block.color,
        side: THREE.DoubleSide
      }),
          mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = (block.x - _configJs2['default'].world.size / 2 << 0) * _configJs2['default'].game.textureSize;
      mesh.position.y = (block.y - _configJs2['default'].world.size / 2 << 0) * _configJs2['default'].game.textureSize;
      mesh.position.z = (block.z - _configJs2['default'].world.size / 2 << 0) * _configJs2['default'].game.textureSize;

      this._meshes.push({
        blockId: block.id,
        meshId: mesh.uuid,
        block: block,
        mesh: mesh
      });

      return mesh;
    }
  }, {
    key: 'createBorder',
    value: function createBorder(block) {

      var mesh = this.getMesh(block),
          border = new THREE.BoxHelper(mesh);

      border.material.color.set(block.borderColor);

      this._borders.push({
        blockId: block.id,
        meshId: mesh.uuid,
        block: block,
        border: border
      });

      return border;
    }
  }, {
    key: 'remove',
    value: function remove(block) {

      for (var idx in this._meshes) {

        if (this._meshes[idx].blockId === block.id) {

          return this._meshes.splice(idx, 1);
        }
      }
    }
  }]);

  return CanvasMeshes;
})();

exports['default'] = CanvasMeshes;
module.exports = exports['default'];

},{"../../config.js":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _canvasBaseJs = require('./canvas-base.js');

var _canvasBaseJs2 = _interopRequireDefault(_canvasBaseJs);

var _utilsBroadcastJs = require('../../utils/broadcast.js');

var _utilsBroadcastJs2 = _interopRequireDefault(_utilsBroadcastJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    broadcast = _utilsBroadcastJs2['default'].getInstance();

var Preview = (function (_CanvasBase) {
  _inherits(Preview, _CanvasBase);

  function Preview() {
    _classCallCheck(this, Preview);

    _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Preview, [{
    key: '_setDom',
    value: function _setDom() {

      this._$dom = $(_configJs2['default'].html.game.preview);
    }
  }, {
    key: '_initialize',
    value: function _initialize() {

      debug.log.preview('initializing preview ...');

      this._isFlat = _configJs2['default'].game.preview.isFlat;

      this._raycaster = new THREE.Raycaster();

      this._hovered = null;

      this._setLight();
      this._setLine();

      this._loadBlocks();
    }
  }, {
    key: '_eventHover',
    value: function _eventHover(event) {

      var interacts = this._getInteracts(event.offsetX, event.offsetY);

      if (interacts.length) {

        var mesh = interacts[0].object;

        if (mesh !== this._hovered) {

          var blockId = this._meshes.getBlockIdByMeshId(mesh.uuid);

          broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_REMOVE);
          broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_ADD, [blockId]);
        }

        return;
      }

      broadcast.execute(_utilsBroadcastJs2['default'].BLOCK_HOVER_REMOVE);
    }
  }, {
    key: '_addHoverEffect',
    value: function _addHoverEffect(blockId) {

      var mesh = this._meshes.getMeshByBlockId(blockId);

      if (mesh !== null) {

        mesh.material.opacity = 0.5;
        this._hovered = mesh;
      }
    }
  }, {
    key: '_getInteracts',
    value: function _getInteracts(mouseX, mouseY) {

      var x = mouseX / this._width * 2 - 1,
          y = -(mouseY / this._height) * 2 + 1,
          vec = new THREE.Vector3(x, y, 1);

      this._raycaster.setFromCamera(vec, this._camera);

      return this._raycaster.intersectObjects(this._meshes.getMeshes());
    }
  }, {
    key: '_removeHoverEffect',
    value: function _removeHoverEffect() {

      if (this._hovered !== null) {

        this._hovered.material.opacity = 1;
        this._hovered = null;
      }
    }
  }, {
    key: '_animate',
    value: function _animate(frame) {

      var progress = frame % _configJs2['default'].game.preview.rotationSpeed / _configJs2['default'].game.preview.rotationSpeed,
          progressY = frame % _configJs2['default'].game.preview.rotationSpeedY / _configJs2['default'].game.preview.rotationSpeedY,
          rad = progress * 2 * Math.PI,
          radY = progressY * 2 * Math.PI,
          x = Math.cos(rad) * this._cameraDistance,
          y = Math.sin(radY) * this._cameraDistance / 4,
          z = Math.sin(rad) * this._cameraDistance,
          lightX = Math.cos(rad - Math.PI * 0.1) * this._cameraDistance,
          lightZ = Math.sin(rad - Math.PI * 0.1) * this._cameraDistance;

      this._camera.position.x = x;
      this._camera.position.y = y;
      this._camera.position.z = z;
      this._light.position.set(lightX, _configJs2['default'].game.textureSize * 2, lightZ).normalize();
      this._camera.lookAt(this._zero);

      this.render();
    }
  }, {
    key: 'resize',
    value: function resize() {

      _get(Object.getPrototypeOf(Preview.prototype), 'resize', this).call(this);

      var base = this._$parent.height() / 2 * Math.sqrt(3),
          per = this._shorter / _configJs2['default'].world.size;

      this._cameraDistance = base * _configJs2['default'].game.textureSize / per;
    }
  }, {
    key: '_setLight',
    value: function _setLight() {

      this._light = new THREE.DirectionalLight(0xffffff);
      this._light.position.set(1, 1, 1).normalize();
      this._scene.add(this._light);

      this._ambientLight = new THREE.AmbientLight(0xffffff);
      this._scene.add(this._ambientLight);
    }
  }, {
    key: '_setLine',
    value: function _setLine() {

      var geometry = new THREE.Geometry(),
          material = new THREE.LineBasicMaterial({
        color: 0xffffff
      });

      geometry.vertices = [this._zero, world.direction.clone().multiplyScalar(this._cameraDistance * 0.8)];

      this._line = new THREE.Line(geometry, material);

      this._scene.add(this._line);
    }
  }, {
    key: 'setLine',
    value: function setLine() {

      this._line.geometry.vertices = [this._zero, world.direction.clone().multiplyScalar(this._cameraDistance * 0.8)];
      this._line.geometry.verticesNeedUpdate = true;
    }
  }]);

  return Preview;
})(_canvasBaseJs2['default']);

exports['default'] = Preview;
module.exports = exports['default'];

},{"../../config.js":1,"../../models/world/world.js":7,"../../utils/broadcast.js":18,"./canvas-base.js":9}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var Loader = (function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this._$dom = $(_configJs2['default'].html.loader);
    this._isShow = false;
  }

  _createClass(Loader, [{
    key: 'show',
    value: function show() {

      if (this._isShow) {
        return;
      }

      this._$dom.show();
      this._isShow = true;
    }
  }, {
    key: 'hide',
    value: function hide() {

      if (!this._isShow) {
        return;
      }

      this._$dom.hide();
      this._isShow = false;
    }
  }]);

  return Loader;
})();

exports['default'] = new Loader();
module.exports = exports['default'];

},{"../../config.js":1}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _modulesLoaderIndexJs = require('../modules/loader/index.js');

var _modulesLoaderIndexJs2 = _interopRequireDefault(_modulesLoaderIndexJs);

var SceneBase = (function () {
  function SceneBase(domID) {
    _classCallCheck(this, SceneBase);

    this._id = domID;
    this._$dom = $(domID);

    this._isShow = false;

    debug.log.scene('Initializing', this._id, '...');
    this._initialize();
  }

  _createClass(SceneBase, [{
    key: '_initialize',
    value: function _initialize() {}
  }, {
    key: '_eventEnter',
    value: function _eventEnter() {

      return Promise.resolve();
    }
  }, {
    key: '_eventLeave',
    value: function _eventLeave() {

      return Promise.resolve();
    }
  }, {
    key: '_eventShown',
    value: function _eventShown() {}
  }, {
    key: '_show',
    value: function _show() {

      this._isShow = true;
    }
  }, {
    key: '_hide',
    value: function _hide() {

      this._isShow = false;
    }
  }, {
    key: 'enter',
    value: function enter() {

      if (this._isShow) {

        return;
      }

      debug.log.scene('entering', this._id);

      var self = this,
          promiseEnter = this._eventEnter();

      promiseEnter.then(function () {

        self._show();
        self._$dom.addClass('enter show');

        self._eventShown();

        self._$dom.delay(_configJs2['default'].scene.duration).queue(function () {

          $(this).removeClass('enter').dequeue();

          debug.log.scene('entered', self._id);
        });
      });

      return promiseEnter;
    }
  }, {
    key: 'leave',
    value: function leave(callback) {

      if (!this._isShow) {

        return;
      }

      debug.log.scene('leaving', this._id);

      _modulesLoaderIndexJs2['default'].show();

      var self = this,
          promiseLeave = Promise.all([this._eventLeave(), typeof callback === 'function' ? callback() : Promise.resolve()]);

      promiseLeave.then(function () {

        _modulesLoaderIndexJs2['default'].hide();

        self._$dom.addClass('leave').delay(_configJs2['default'].scene.duration).queue(function () {

          $(this).removeClass('leave show').dequeue();

          self._hide();

          debug.log.scene('left', self._id);
        });
      });

      return promiseLeave;
    }
  }]);

  return SceneBase;
})();

exports['default'] = SceneBase;
module.exports = exports['default'];

},{"../config.js":1,"../modules/loader/index.js":13}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configJs = require('../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _sceneBaseJs = require('./scene-base.js');

var _sceneBaseJs2 = _interopRequireDefault(_sceneBaseJs);

var _sceneLoadingJs = require('./scene-loading.js');

var _sceneLoadingJs2 = _interopRequireDefault(_sceneLoadingJs);

var _modelsWorldWorldJs = require('../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _modulesCanvasCanvasPreviewJs = require('../modules/canvas/canvas-preview.js');

var _modulesCanvasCanvasPreviewJs2 = _interopRequireDefault(_modulesCanvasCanvasPreviewJs);

var _modulesCanvasCanvasEditorJs = require('../modules/canvas/canvas-editor.js');

var _modulesCanvasCanvasEditorJs2 = _interopRequireDefault(_modulesCanvasCanvasEditorJs);

var _modulesBoxSelectorIndexJs = require('../modules/box-selector/index.js');

var _modulesBoxSelectorIndexJs2 = _interopRequireDefault(_modulesBoxSelectorIndexJs);

var world = _modelsWorldWorldJs2['default'].getInstance();

var SceneGame = (function (_SceneBase) {
  _inherits(SceneGame, _SceneBase);

  function SceneGame() {
    _classCallCheck(this, SceneGame);

    _get(Object.getPrototypeOf(SceneGame.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SceneGame, [{
    key: '_initialize',
    value: function _initialize() {

      this._$quitButton = $(_configJs2['default'].html.game.quitButton);
      this._$viewChangeButton = $(_configJs2['default'].html.game.viewChangeButton);
    }
  }, {
    key: '_eventEnter',
    value: function _eventEnter() {

      /**
       * 1. reset all data in view
       * 2. load data from server
       * 3. set all data in view
       * 4. initialize canvas
       * 5. enable actions
       */

      var self = this;

      this._$quitButton.one('click', self.leave.bind(self, _sceneLoadingJs2['default'].enter.bind(_sceneLoadingJs2['default'])));

      this._$viewChangeButton.on('click', function () {

        debug.log.game('view-change');

        world.changeView();
        self._preview.setLine();
        self._editor.setCamera();
      });

      return new Promise(function (resolve) {

        //self._reset();
        //self._getData().then(function(data){
        //self._setData(data);
        self._preview = new _modulesCanvasCanvasPreviewJs2['default']();
        self._editor = new _modulesCanvasCanvasEditorJs2['default']();
        //self._enableActions();
        //});

        setTimeout(resolve, 1000);
      });
    }
  }, {
    key: '_eventShown',
    value: function _eventShown() {

      this._preview.resize();
      this._editor.resize();
    }
  }, {
    key: '_eventLeave',
    value: function _eventLeave() {

      this._$quitButton.off('click');

      this._preview.destroy();
      this._editor.destroy();

      this._preview = null;
      this._editor = null;

      return Promise.resolve();
    }
  }]);

  return SceneGame;
})(_sceneBaseJs2['default']);

exports['default'] = new SceneGame(_configJs2['default'].html.scene.game);
module.exports = exports['default'];

},{"../config.js":1,"../models/world/world.js":7,"../modules/box-selector/index.js":8,"../modules/canvas/canvas-editor.js":10,"../modules/canvas/canvas-preview.js":12,"./scene-base.js":14,"./scene-loading.js":16}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configJs = require('../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _sceneBaseJs = require('./scene-base.js');

var _sceneBaseJs2 = _interopRequireDefault(_sceneBaseJs);

var _scenesSceneGameJs = require('../scenes/scene-game.js');

var _scenesSceneGameJs2 = _interopRequireDefault(_scenesSceneGameJs);

var SceneLoading = (function (_SceneBase) {
  _inherits(SceneLoading, _SceneBase);

  function SceneLoading() {
    _classCallCheck(this, SceneLoading);

    _get(Object.getPrototypeOf(SceneLoading.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SceneLoading, [{
    key: '_initialize',
    value: function _initialize() {

      this._$playButton = $(_configJs2['default'].html.loading.playButton);
    }
  }, {
    key: '_eventEnter',
    value: function _eventEnter() {

      var self = this;

      this._$playButton.one('click', self.leave.bind(self, _scenesSceneGameJs2['default'].enter.bind(_scenesSceneGameJs2['default'])));

      return Promise.resolve();
    }
  }, {
    key: '_eventLeave',
    value: function _eventLeave() {

      this._$playButton.off('click');

      return Promise.resolve();
    }
  }]);

  return SceneLoading;
})(_sceneBaseJs2['default']);

exports['default'] = new SceneLoading(_configJs2['default'].html.scene.loading);
module.exports = exports['default'];

},{"../config.js":1,"../scenes/scene-game.js":15,"./scene-base.js":14}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _configJs = require('../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _sceneBaseJs = require('./scene-base.js');

var _sceneBaseJs2 = _interopRequireDefault(_sceneBaseJs);

var SceneResult = (function (_SceneBase) {
  _inherits(SceneResult, _SceneBase);

  function SceneResult() {
    _classCallCheck(this, SceneResult);

    _get(Object.getPrototypeOf(SceneResult.prototype), 'constructor', this).apply(this, arguments);
  }

  return SceneResult;
})(_sceneBaseJs2['default']);

exports['default'] = new SceneResult(_configJs2['default'].html.scene.result);
module.exports = exports['default'];

},{"../config.js":1,"./scene-base.js":14}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var broadcast = null;

var Broadcast = (function () {
  _createClass(Broadcast, null, [{
    key: 'getInstance',
    value: function getInstance() {
      return broadcast;
    }
  }, {
    key: 'BLOCK_HOVER_ADD',
    get: function get() {
      return 'BLOCK_HOVER_ADD';
    }
  }, {
    key: 'BLOCK_HOVER_REMOVE',
    get: function get() {
      return 'BLOCK_HOVER_REMOVE';
    }
  }]);

  function Broadcast() {
    _classCallCheck(this, Broadcast);

    this._functions = {};
  }

  _createClass(Broadcast, [{
    key: 'register',
    value: function register(broadcastType, fn) {

      if (!this._functions.hasOwnProperty(broadcastType)) {

        this._functions[broadcastType] = [];
      }

      this._functions[broadcastType].push(fn);
    }
  }, {
    key: 'execute',
    value: function execute(broadcastType) {
      var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

      if (this._functions.hasOwnProperty(broadcastType)) {

        this._functions[broadcastType].forEach(function (fn) {

          typeof fn === 'function' && fn.apply(fn, args);
        });
      }
    }
  }]);

  return Broadcast;
})();

broadcast = new Broadcast();

exports['default'] = Broadcast;
module.exports = exports['default'];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvY29uZmlnLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL2luZGV4LmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZGVscy9ibG9jay9ibG9jay1jb3JlLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZGVscy9ibG9jay9ibG9jay1tb25vLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZGVscy9ibG9jay9ibG9jay5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2RlbHMvZHJhdy1zZXR0aW5ncy9kcmF3LXNldHRpbmdzLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZGVscy93b3JsZC93b3JsZC5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2R1bGVzL2JveC1zZWxlY3Rvci9pbmRleC5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2R1bGVzL2NhbnZhcy9jYW52YXMtYmFzZS5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2R1bGVzL2NhbnZhcy9jYW52YXMtZWRpdG9yLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZHVsZXMvY2FudmFzL2NhbnZhcy1tZXNoZXMuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kdWxlcy9jYW52YXMvY2FudmFzLXByZXZpZXcuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kdWxlcy9sb2FkZXIvaW5kZXguanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvc2NlbmVzL3NjZW5lLWJhc2UuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvc2NlbmVzL3NjZW5lLWdhbWUuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvc2NlbmVzL3NjZW5lLWxvYWRpbmcuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvc2NlbmVzL3NjZW5lLXJlc3VsdC5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy91dGlscy9icm9hZGNhc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksTUFBTSxHQUFHO0FBQ1gsTUFBSSxFQUFFO0FBQ0osU0FBSyxFQUFFO0FBQ0wsYUFBTyxFQUFFLGdCQUFnQjtBQUN6QixVQUFJLEVBQUUsYUFBYTtBQUNuQixZQUFNLEVBQUUsZUFBZTtLQUN4QjtBQUNELFdBQU8sRUFBRTtBQUNQLGdCQUFVLEVBQUUsYUFBYTtLQUMxQjtBQUNELFFBQUksRUFBRTtBQUNKLGFBQU8sRUFBRSxVQUFVO0FBQ25CLFlBQU0sRUFBRSxTQUFTO0FBQ2pCLGdCQUFVLEVBQUUsWUFBWTtBQUN4QixzQkFBZ0IsRUFBRSxlQUFlO0FBQ2pDLGlCQUFXLEVBQUUsZUFBZTtLQUM3QjtBQUNELFVBQU0sRUFBRSxTQUFTO0dBQ2xCO0FBQ0QsT0FBSyxFQUFFO0FBQ0wsWUFBUSxFQUFFLEdBQUc7R0FDZDtBQUNELE1BQUksRUFBRTtBQUNKLGVBQVcsRUFBRSxFQUFFO0FBQ2YsV0FBTyxFQUFFO0FBQ1AsZ0JBQVUsRUFBRSxJQUFJO0FBQ2hCLFlBQU0sRUFBRSxLQUFLO0FBQ2IsbUJBQWEsRUFBRSxFQUFFLEdBQUcsSUFBSTtBQUN4QixvQkFBYyxFQUFFLEVBQUUsR0FBRyxJQUFJO0tBQzFCO0dBQ0Y7QUFDRCxPQUFLLEVBQUU7QUFDTCxRQUFJLEVBQUUsRUFBRTtHQUNUO0NBQ0YsQ0FBQzs7cUJBRWEsTUFBTTs7Ozs7Ozs7OztvQ0NwQ0QsMkJBQTJCOzs7O2lDQUMzQix3QkFBd0I7Ozs7bUNBQ3hCLDBCQUEwQjs7OztJQUV4QyxJQUFJLEdBRUcsU0FGUCxJQUFJLEdBRU07d0JBRlYsSUFBSTs7O0FBS04saUNBQUssS0FBSyxFQUFFLENBQUM7OztBQUdiLE9BQUssQ0FBQyxZQUFXOztBQUVmLFVBQU0sQ0FBQyxLQUFLLEdBQUc7QUFDYixhQUFPLEVBQUUsbUJBQVc7QUFBRSx1Q0FBSyxLQUFLLENBQUMsa0NBQVEsS0FBSyxDQUFDLElBQUksbUNBQVMsQ0FBQyxDQUFDLEFBQUMsaUNBQU8sS0FBSyxDQUFDLGtDQUFRLEtBQUssQ0FBQyxJQUFJLG1DQUFTLENBQUMsQ0FBQTtPQUFFO0FBQzFHLFVBQUksRUFBRSxnQkFBVztBQUFFLDBDQUFRLEtBQUssQ0FBQywrQkFBSyxLQUFLLENBQUMsSUFBSSxnQ0FBTSxDQUFDLENBQUMsQUFBQyxpQ0FBTyxLQUFLLENBQUMsK0JBQUssS0FBSyxDQUFDLElBQUksZ0NBQU0sQ0FBQyxDQUFDO09BQUU7QUFDL0YsWUFBTSxFQUFFLGtCQUFXO0FBQUUsMENBQVEsS0FBSyxDQUFDLGlDQUFPLEtBQUssQ0FBQyxJQUFJLGtDQUFRLENBQUMsQ0FBQyxBQUFDLCtCQUFLLEtBQUssQ0FBQyxpQ0FBTyxLQUFLLENBQUMsSUFBSSxrQ0FBUSxDQUFDLENBQUM7T0FBRTtLQUN4RyxDQUFDO0dBRUgsQ0FBQyxDQUFDOztBQUVILEdBQUMsWUFBVTtBQUFDLFFBQUksTUFBTSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxZQUFVO0FBQUMsVUFBSSxLQUFLLEdBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsMkNBQTJDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsSUFBSSxHQUFFO0FBQUMsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFBO09BQUMsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFDLHdEQUF3RCxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQUMsQ0FBQSxFQUFHLENBQUE7Q0FFOVo7O0FBSUgsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkM1Qk8sWUFBWTs7OztJQUV4QixTQUFTO1lBQVQsU0FBUzs7V0FBVCxTQUFTOzBCQUFULFNBQVM7OytCQUFULFNBQVM7OztlQUFULFNBQVM7O1dBRUYsdUJBQUc7O0FBRVosVUFBSSxDQUFDLElBQUksR0FBRyxxQkFBTSxVQUFVLENBQUM7O0FBRTdCLFVBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOztBQUV2QixVQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLFVBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7S0FFL0I7OztTQVhHLFNBQVM7OztxQkFlQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkNqQk4sWUFBWTs7OztJQUV4QixTQUFTO1lBQVQsU0FBUzs7ZUFBVCxTQUFTOztXQUVGLHVCQUFHOztBQUVaLFVBQUksQ0FBQyxJQUFJLEdBQUcscUJBQU0sVUFBVSxDQUFDO0tBRTlCOzs7QUFFVSxXQVJQLFNBQVMsQ0FRRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFOzBCQVJyQyxTQUFTOztBQVVYLCtCQVZFLFNBQVMsNkNBVUwsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7O0FBRWYsUUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixRQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0dBRWxDOztTQWZHLFNBQVM7OztxQkFtQkEsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNyQkwsaUJBQWlCOzs7O0FBRXBDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFFTCxLQUFLO2VBQUwsS0FBSzs7V0FNRSx1QkFBRyxFQUFFOzs7U0FKSyxlQUFHO0FBQUUsYUFBTyxZQUFZLENBQUM7S0FBRTs7O1NBQzNCLGVBQUc7QUFBRSxhQUFPLFlBQVksQ0FBQztLQUFFOzs7U0FDM0IsZUFBRztBQUFFLGFBQU8sWUFBWSxDQUFDO0tBQUU7OztBQUlyQyxXQVJQLEtBQUssQ0FRRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTswQkFSakIsS0FBSzs7QUFVUCxRQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOztBQUVmLFFBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1gsUUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDWCxRQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFWCxRQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O0FBRTdCLFFBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOztBQUV0QixRQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUN0QixRQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQzs7QUFFNUIsUUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0dBRXBCOztlQXpCRyxLQUFLOztXQTJCRCxrQkFBQyxLQUFLLEVBQUU7O0FBRWQsVUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FFcEI7OztXQUVhLHdCQUFDLEtBQUssRUFBRTs7QUFFcEIsVUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FFMUI7OztTQXJDRyxLQUFLOzs7cUJBeUNJLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDN0NwQixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7O0lBRWxCLFlBQVk7ZUFBWixZQUFZOztXQUVFLHVCQUFHO0FBQUUsYUFBTyxZQUFZLENBQUM7S0FBRTs7O0FBRWxDLFdBSlAsWUFBWSxHQUlGOzBCQUpWLFlBQVk7O0FBTWQsUUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDdEIsUUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7R0FFN0I7O2VBVEcsWUFBWTs7V0FXUixrQkFBQyxLQUFLLEVBQUU7O0FBRWQsVUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FFcEI7OztXQUVhLHdCQUFDLFdBQVcsRUFBRTs7QUFFMUIsVUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FFaEM7OztTQXJCRyxZQUFZOzs7QUF5QmxCLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztxQkFFbkIsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkM3QlIsaUJBQWlCOzs7O2dDQUNkLHdCQUF3Qjs7OztBQUU5QyxJQUFJLEtBQUssR0FBRyxJQUFJO0lBRVosZ0JBQWdCLEdBQUcsQ0FBQztJQUNwQixTQUFTLEdBQUcsQ0FDVixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDMUIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzFCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUM1QixDQUFDOztJQUVBLEtBQUs7ZUFBTCxLQUFLOztXQVdTLHVCQUFHO0FBQUUsYUFBTyxLQUFLLENBQUM7S0FBRTs7O1NBVGIsZUFBRztBQUFFLGFBQU8sZ0JBQWdCLENBQUM7S0FBRTs7O1NBQzVCLGVBQUc7QUFBRSxhQUFPLG1CQUFtQixDQUFDO0tBQUU7OztTQUN4QyxlQUFHO0FBQUUsYUFBTyxhQUFhLENBQUM7S0FBRTs7O1NBQzdCLGVBQUc7QUFBRSxhQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUFFOzs7U0FDM0IsZUFBRztBQUFFLGFBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7OztTQUMzQixlQUFHO0FBQUUsYUFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTs7O1NBQzNCLGVBQUc7QUFBRSxhQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUFFOzs7U0FDM0IsZUFBRztBQUFFLGFBQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQUU7OztTQUMzQixlQUFHO0FBQUUsYUFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBRTs7O0FBR3JDLFdBYlAsS0FBSyxHQWFLOzBCQWJWLEtBQUs7O0FBZVAsUUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsUUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFFBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7O0FBR2IsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFFBQUksQ0FBQyxHQUFHLGtDQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbEMsVUFBTSxDQUFDLENBQUMsR0FBRyxZQUFXOztBQUVwQixVQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBRWxCLENBQUM7O0FBRUYsVUFBTSxDQUFDLEVBQUUsR0FBRyxZQUFXOztBQUVyQixVQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBRXJCLENBQUM7R0FFSDs7ZUFyQ0csS0FBSzs7V0F1Q0csd0JBQUc7O0FBRWIsVUFBSSxDQUFDLE9BQU8sR0FBRztBQUNiLHNCQUFjLEVBQUUsRUFBRTtBQUNsQix5QkFBaUIsRUFBRSxFQUFFO0FBQ3JCLG1CQUFXLEVBQUUsRUFBRTtPQUNoQixDQUFDO0tBRUg7OztXQUVTLHNCQUFHOztBQUVYLFFBQUUsZ0JBQWdCLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxnQkFBZ0IsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDOztBQUVqRSxVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBRTlDOzs7V0FFSSxpQkFBRzs7QUFFTixXQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFekIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsWUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkIsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEIsZUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDMUMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1dBQzVCO1NBQ0Y7T0FDRjs7QUFFRCxVQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O0FBRXJCLFVBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBRWxDOzs7V0FFWSx5QkFBRzs7QUFFZCxVQUFJLElBQUksR0FBRyxzQkFBTyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXRDLFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsa0NBQWMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztLQUVoRTs7O1dBRU8sa0JBQUMsS0FBSyxFQUFFOztBQUVkLFVBQ0UsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQ1gsc0JBQU8sS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUM1QixLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFDWCxzQkFBTyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQzVCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUNYLHNCQUFPLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsRUFDNUI7O0FBRUEsZUFBTztPQUVSOztBQUVELFVBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFbkQsVUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFOztBQUVoQixZQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BRXZCOztBQUVELFdBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxlQUFhLEtBQUssQ0FBQyxDQUFDLFVBQUssS0FBSyxDQUFDLENBQUMsVUFBSyxLQUFLLENBQUMsQ0FBQyxTQUFNLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7QUFFN0UsVUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRTlDLFVBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBRW5EOzs7V0FFTyxrQkFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7QUFFaEIsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBRTVCOzs7V0FFUSxxQkFBRzs7QUFFVixVQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWhCLFdBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLGVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUUxQyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7V0FFbEU7U0FDRjtPQUNGOztBQUVELGFBQU8sTUFBTSxDQUFDO0tBRWY7OztXQUVVLHFCQUFDLEtBQUssRUFBRTs7QUFFakIsVUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7O0FBRXBCLGVBQU87T0FFUjs7QUFFRCxVQUFJLEdBQUcsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFdBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxrQkFBZ0IsS0FBSyxDQUFDLENBQUMsVUFBSyxLQUFLLENBQUMsQ0FBQyxVQUFLLEtBQUssQ0FBQyxDQUFDLFNBQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUUvRSxVQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7QUFFN0MsVUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUVyRDs7O1dBRUMsWUFBQyxTQUFTLEVBQUUsRUFBRSxFQUFFOztBQUVoQixVQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTs7QUFFNUIsZUFBTztPQUVSOztBQUVELFVBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRWxDOzs7V0FFRSxlQUFHOztBQUVKLFVBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUVyQjs7O1dBRU8sa0JBQUMsU0FBUyxFQUFhO1VBQVgsSUFBSSx5REFBRyxFQUFFOztBQUUzQixVQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLEVBQUUsRUFBRTs7QUFFM0MsZUFBTyxFQUFFLEtBQUssVUFBVSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO09BRW5ELENBQUMsQ0FBQztLQUVKOzs7U0F4TEcsS0FBSzs7O0FBNExYLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDOztxQkFFTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozt3QkM3TUQsaUJBQWlCOzs7O2dEQUNYLDZDQUE2Qzs7OztBQUV0RSxJQUFJLFlBQVksR0FBRyw4Q0FBYSxXQUFXLEVBQUUsQ0FBQzs7SUFFeEMsV0FBVyxHQUVKLFNBRlAsV0FBVyxHQUVEO3dCQUZWLFdBQVc7O0FBSWIsTUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs7QUFFN0MsTUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDZCxNQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztBQUN4QixNQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQzs7QUFFOUIsTUFBSSxJQUFJLEdBQUcsSUFBSTtNQUNYLE1BQU0sR0FBRyxDQUNULEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEVBQzVDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQy9DLENBQUM7O0FBRUYsTUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDOztBQUVaLFFBQU0sQ0FBQyxPQUFPLENBQUMsVUFBUyxLQUFLLEVBQUUsR0FBRyxFQUFFOztBQUVsQyxNQUFFLENBQUMsSUFBSSxpQ0FBK0IsR0FBRyw2QkFBd0IsS0FBSyxDQUFDLEtBQUssMEJBQXFCLEtBQUssQ0FBQyxXQUFXLG1DQUE4QixLQUFLLENBQUMsV0FBVyxpQkFBWSxLQUFLLENBQUMsS0FBSyxXQUFRLENBQUM7R0FFbE0sQ0FBQyxDQUFDOztBQUVILE1BQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVEsQ0FBQzs7QUFFM0MsUUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFTLEtBQUssRUFBRSxHQUFHLEVBQUU7O0FBRWxDLEtBQUMsMEJBQXdCLEdBQUcsQ0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVzs7QUFFckQsVUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEIsVUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQzFCLFVBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUN0QyxrQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMsa0JBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBRWhELENBQUMsQ0FBQztHQUVKLENBQUMsQ0FBQztDQUVKOztxQkFLWSxJQUFJLFdBQVcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNoRWIsaUJBQWlCOzs7O2tDQUNsQiw2QkFBNkI7Ozs7Z0NBQ3pCLDBCQUEwQjs7Ozs4QkFDdkIsb0JBQW9COzs7O0FBRTdDLElBQUksS0FBSyxHQUFHLGdDQUFNLFdBQVcsRUFBRTtJQUMzQixTQUFTLEdBQUcsOEJBQVUsV0FBVyxFQUFFLENBQUM7O0lBRWxDLFVBQVU7ZUFBVixVQUFVOztXQUVQLG1CQUFHOztBQUVSLFVBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FFbEI7OztXQUVVLHVCQUFHLEVBQUU7OztBQUVMLFdBVlAsVUFBVSxHQVVBOzBCQVZWLFVBQVU7O0FBWVosUUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0FBRXJCLFFBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNmLFFBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFcEMsUUFBSSxDQUFDLE9BQU8sR0FBRyxpQ0FBa0IsQ0FBQztBQUNsQyxRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFeEMsUUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7QUFDdkMsV0FBSyxFQUFFLElBQUk7QUFDWCxrQkFBWSxFQUFFLElBQUk7QUFDbEIsWUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMxQixDQUFDLENBQUM7QUFDSCxRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUVoQyxRQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7O0FBRTlDLFFBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFZCxRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUVoQyxTQUFLLENBQUMsRUFBRSxDQUFDLGdDQUFNLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdEUsU0FBSyxDQUFDLEVBQUUsQ0FBQyxnQ0FBTSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUUsU0FBSyxDQUFDLEVBQUUsQ0FBQyxnQ0FBTSxXQUFXLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVoRSxTQUFLLENBQUMsRUFBRSxDQUFDLGdDQUFNLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9ELFNBQUssQ0FBQyxFQUFFLENBQUMsZ0NBQU0saUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLFNBQUssQ0FBQyxFQUFFLENBQUMsZ0NBQU0sV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O0FBRXpELFFBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLFFBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLFFBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUYsVUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUUxRCxhQUFTLENBQUMsUUFBUSxDQUFDLDhCQUFVLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9FLGFBQVMsQ0FBQyxRQUFRLENBQUMsOEJBQVUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUVyRixRQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O0FBRW5CLFFBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztHQUVyQjs7ZUF2REcsVUFBVTs7V0F5RE8sK0JBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTs7QUFFeEMsV0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFaEQsVUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixVQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBRTFCOzs7V0FFdUIsa0NBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTs7QUFFM0MsV0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFbkQsVUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixVQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBRTFCOzs7V0FFaUIsOEJBQUc7O0FBRW5CLFVBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7QUFFbkIsVUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBRXBCOzs7V0FFYSwwQkFBRyxFQUFFOzs7V0FFRiw2QkFBRyxFQUFFOzs7V0FFWCx1QkFBRyxFQUFFOzs7V0FFTCxxQkFBQyxLQUFLLEVBQUUsRUFBRTs7O1dBRUwsMEJBQUMsS0FBSyxFQUFFLEVBQUU7OztXQUVmLHFCQUFDLEtBQUssRUFBRSxFQUFFOzs7V0FFTiwyQkFBRyxFQUFFOzs7V0FFRiw4QkFBRyxFQUFFOzs7V0FFZixvQkFBRyxFQUFFOzs7V0FFRCx3QkFBRzs7QUFFYixVQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTs7QUFFbEIsZUFBTztPQUVSOztBQUVELFVBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUVoRCxVQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVyQiwyQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBRXJEOzs7V0FFSyxrQkFBRzs7QUFFUCxVQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDcEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RDLFVBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7QUFFeEUsVUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxELFVBQUksUUFBUSxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLHNCQUFPLElBQUksQ0FBQyxXQUFXO1VBQzFELElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRXRDLFVBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztBQUM1QixVQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ2hDLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7O0FBR3JDLFVBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztLQUV2Qzs7O1dBRVUsdUJBQUc7O0FBRVosVUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBRW5CLFVBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7S0FFakM7OztXQUVVLHVCQUFHOztBQUVaLFVBQUksSUFBSSxHQUFHLElBQUk7VUFDWCxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDOztBQUUvQixXQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXRDLFlBQU0sQ0FBQyxPQUFPLENBQUMsVUFBUyxLQUFLLEVBQUU7O0FBRTdCLFlBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7T0FFdkIsQ0FBQyxDQUFDO0tBRUo7OztXQUVRLG1CQUFDLEtBQUssRUFBRTs7QUFFZixVQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7O0FBRWxCLGVBQU87T0FFUjs7QUFFRCxVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3hELFVBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV0QixVQUFJLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztBQUVsQyxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxZQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUV6QjtLQUVGOzs7V0FFVyxzQkFBQyxLQUFLLEVBQUU7O0FBRWxCLFVBQUksS0FBSyxLQUFLLElBQUksRUFBRTs7QUFFbEIsZUFBTztPQUVSOztBQUVELFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLFVBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6QixVQUFJLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFOztBQUVsQyxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxZQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUU1Qjs7QUFFRCxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUU1Qjs7O1dBRU0sbUJBQUc7O0FBRVIsVUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhdEIsVUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FFdkI7OztXQUVLLGtCQUFHOztBQUVQLFVBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBRWxEOzs7U0FsT0csVUFBVTs7O3FCQXNPRCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkM5T04saUJBQWlCOzs7O2tDQUNsQiw2QkFBNkI7Ozs7NEJBQ3hCLGtCQUFrQjs7OztnQ0FDbkIsMEJBQTBCOzs7O2dEQUN2Qiw2Q0FBNkM7Ozs7c0NBR2hELGtDQUFrQzs7OztBQUV4RCxJQUFJLEtBQUssR0FBRyxnQ0FBTSxXQUFXLEVBQUU7SUFDM0IsU0FBUyxHQUFHLDhCQUFVLFdBQVcsRUFBRTtJQUNuQyxZQUFZLEdBQUcsOENBQWEsV0FBVyxFQUFFLENBQUM7O0lBRXhDLE9BQU87WUFBUCxPQUFPOztXQUFQLE9BQU87MEJBQVAsT0FBTzs7K0JBQVAsT0FBTzs7O2VBQVAsT0FBTzs7V0FFSixtQkFBRzs7QUFFUixVQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRXpDOzs7V0FFVSx1QkFBRzs7QUFFWixXQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztBQUU1QyxVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzs7QUFFcEIsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7QUFFeEMsVUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7O0FBRXJCLFVBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOztBQUU1QixVQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FFcEI7OztXQUVPLGtCQUFDLEtBQUssRUFBRTs7QUFFZCxVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FFZjs7O1dBRVUscUJBQUMsS0FBSyxFQUFFOztBQUVqQixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRSxVQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7O0FBRXBCLFlBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsYUFBSyxDQUFDLFFBQVEsQ0FBQyx3Q0FBYyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO09BRXBLO0tBRUY7OztXQUVlLDBCQUFDLEtBQUssRUFBRTs7QUFFdEIsV0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOztBQUV2QixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRSxVQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7O0FBRXBCLFlBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFckQsYUFBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUUxQjtLQUVGOzs7V0FFYSwwQkFBRzs7QUFFZixVQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFOztBQUVqQyxlQUFPO09BRVI7O0FBRUQsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixnQkFBVSxDQUFDLFlBQVc7QUFDcEIsWUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7T0FDeEMsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUVSOzs7V0FFVSxxQkFBQyxLQUFLLEVBQUU7O0FBRWpCLFVBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDOztBQUU3QixVQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRSxVQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7O0FBRXBCLFlBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O0FBRS9CLFlBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7O0FBRTFCLGNBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUV6RCxtQkFBUyxDQUFDLE9BQU8sQ0FBQyw4QkFBVSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hELG1CQUFTLENBQUMsT0FBTyxDQUFDLDhCQUFVLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FFekQ7O0FBRUQsZUFBTztPQUVSOztBQUVELGVBQVMsQ0FBQyxPQUFPLENBQUMsOEJBQVUsa0JBQWtCLENBQUMsQ0FBQztLQUVqRDs7O1dBRVksdUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTs7QUFFNUIsVUFBSSxDQUFDLEdBQUcsQUFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBSSxDQUFDLEdBQUcsQ0FBQztVQUNsQyxDQUFDLEdBQUcsRUFBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQSxBQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7VUFDckMsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVyQyxVQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBRW5FOzs7V0FFYyx5QkFBQyxPQUFPLEVBQUU7O0FBRXZCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxELFVBQUksSUFBSSxLQUFLLElBQUksRUFBRTs7QUFFakIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzVCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO09BRXRCO0tBRUY7OztXQUVpQiw4QkFBRzs7QUFFbkIsVUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTs7QUFFMUIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNuQyxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztPQUV0QjtLQUVGOzs7V0FFSyxrQkFBRzs7QUFFUCxpQ0FoSkUsT0FBTyx3Q0FnSk07O0FBRWYsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7VUFDaEQsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQU8sS0FBSyxDQUFDLElBQUksQ0FBQzs7QUFFNUMsVUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEdBQUcsc0JBQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7O0FBRTVELFVBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUVsQjs7O1dBRVEscUJBQUc7O0FBRVYsVUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzFFLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ25DLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUVqQzs7O1NBbktHLE9BQU87OztxQkF1S0UsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNwTEgsaUJBQWlCOzs7O0lBRTlCLFlBQVk7QUFFTCxXQUZQLFlBQVksR0FFRjswQkFGVixZQUFZOztBQUlkLFFBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFFBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0dBRXBCOztlQVBHLFlBQVk7O1dBU1AscUJBQUc7O0FBRVYsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVoQixXQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O0FBRTVCLGNBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUVyQzs7QUFFRCxhQUFPLE1BQU0sQ0FBQztLQUVmOzs7V0FFTSxpQkFBQyxLQUFLLEVBQUU7O0FBRWIsV0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztBQUU1QixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7O0FBRTFDLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBRS9CO09BRUY7O0FBRUQsYUFBTyxJQUFJLENBQUM7S0FFYjs7O1dBRWUsMEJBQUMsT0FBTyxFQUFFOztBQUV4QixXQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O0FBRTVCLFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFOztBQUV6QyxpQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUUvQjtPQUVGOztBQUVELGFBQU8sSUFBSSxDQUFDO0tBRWI7OztXQUVlLDBCQUFDLE1BQU0sRUFBRTs7QUFFdkIsV0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztBQUU1QixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTs7QUFFdkMsaUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FFaEM7T0FFRjs7QUFFRCxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FFaUIsNEJBQUMsTUFBTSxFQUFFOztBQUV6QixXQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7O0FBRTVCLFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFOztBQUV2QyxpQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUVsQztPQUVGOztBQUVELGFBQU8sSUFBSSxDQUFDO0tBRWI7OztXQUVRLG1CQUFDLEtBQUssRUFBRTs7QUFFZixXQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7O0FBRTdCLFlBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRTs7QUFFM0MsaUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FFbEM7T0FFRjs7QUFFRCxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FFUyxvQkFBQyxLQUFLLEVBQWtCO1VBQWhCLE1BQU0seURBQUcsS0FBSzs7QUFFOUIsVUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLHNCQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsc0JBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxzQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1VBQzNHLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxtQkFBbUI7VUFDbEUsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDO0FBQ25CLGFBQUssRUFBRSxLQUFLLENBQUMsS0FBSztBQUNsQixlQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUs7QUFDcEIsWUFBSSxFQUFFLEtBQUssQ0FBQyxVQUFVO09BQ3ZCLENBQUM7VUFDQSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7QUFFOUMsVUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLHNCQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDbkYsVUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLHNCQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDbkYsVUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLHNCQUFPLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLHNCQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7O0FBRW5GLFVBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2hCLGVBQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNqQixjQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDakIsYUFBSyxFQUFFLEtBQUs7QUFDWixZQUFJLEVBQUUsSUFBSTtPQUNYLENBQUMsQ0FBQzs7QUFFSCxhQUFPLElBQUksQ0FBQztLQUViOzs7V0FFVyxzQkFBQyxLQUFLLEVBQUU7O0FBRWxCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1VBQzFCLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXZDLFlBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRTdDLFVBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ2pCLGVBQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNqQixjQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFDakIsYUFBSyxFQUFFLEtBQUs7QUFDWixjQUFNLEVBQUUsTUFBTTtPQUNmLENBQUMsQ0FBQzs7QUFFSCxhQUFPLE1BQU0sQ0FBQztLQUVmOzs7V0FFSyxnQkFBQyxLQUFLLEVBQUU7O0FBRVosV0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztBQUU1QixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUU7O0FBRTFDLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUVwQztPQUVGO0tBRUY7OztTQS9KRyxZQUFZOzs7cUJBbUtILFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ3JLUixpQkFBaUI7Ozs7a0NBQ2xCLDZCQUE2Qjs7Ozs0QkFDeEIsa0JBQWtCOzs7O2dDQUNuQiwwQkFBMEI7Ozs7QUFFaEQsSUFBSSxLQUFLLEdBQUcsZ0NBQU0sV0FBVyxFQUFFO0lBQzNCLFNBQVMsR0FBRyw4QkFBVSxXQUFXLEVBQUUsQ0FBQzs7SUFFbEMsT0FBTztZQUFQLE9BQU87O1dBQVAsT0FBTzswQkFBUCxPQUFPOzsrQkFBUCxPQUFPOzs7ZUFBUCxPQUFPOztXQUVKLG1CQUFHOztBQUVSLFVBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FFMUM7OztXQUVVLHVCQUFHOztBQUVaLFdBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRTlDLFVBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0FBRTFDLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7O0FBRXhDLFVBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztBQUVyQixVQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDakIsVUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztBQUVoQixVQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FFcEI7OztXQUVVLHFCQUFDLEtBQUssRUFBRTs7QUFFakIsVUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFakUsVUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFOztBQUVwQixZQUFJLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztBQUUvQixZQUFJLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFOztBQUUxQixjQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFekQsbUJBQVMsQ0FBQyxPQUFPLENBQUMsOEJBQVUsa0JBQWtCLENBQUMsQ0FBQztBQUNoRCxtQkFBUyxDQUFDLE9BQU8sQ0FBQyw4QkFBVSxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBRXpEOztBQUVELGVBQU87T0FFUjs7QUFFRCxlQUFTLENBQUMsT0FBTyxDQUFDLDhCQUFVLGtCQUFrQixDQUFDLENBQUM7S0FFakQ7OztXQUVjLHlCQUFDLE9BQU8sRUFBRTs7QUFFdkIsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFbEQsVUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFOztBQUVqQixZQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDNUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7T0FFdEI7S0FFRjs7O1dBRVksdUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTs7QUFFNUIsVUFBSSxDQUFDLEdBQUcsQUFBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBSSxDQUFDLEdBQUcsQ0FBQztVQUNsQyxDQUFDLEdBQUcsRUFBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQSxBQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7VUFDckMsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVyQyxVQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVqRCxhQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBRW5FOzs7V0FFaUIsOEJBQUc7O0FBRW5CLFVBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7O0FBRTFCLFlBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDbkMsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7T0FFdEI7S0FFRjs7O1dBRU8sa0JBQUMsS0FBSyxFQUFFOztBQUVkLFVBQUksUUFBUSxHQUFHLEFBQUMsS0FBSyxHQUFHLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFJLHNCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTtVQUMxRixTQUFTLEdBQUcsQUFBQyxLQUFLLEdBQUcsc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUksc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjO1VBQzdGLEdBQUcsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1VBQzVCLElBQUksR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFO1VBQzlCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlO1VBQ3hDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQztVQUM3QyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZTtVQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZTtVQUM3RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDOztBQUVsRSxVQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixVQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2xGLFVBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEMsVUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBRWY7OztXQUVLLGtCQUFHOztBQUVQLGlDQTlHRSxPQUFPLHdDQThHTTs7QUFFZixVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztVQUNoRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxzQkFBTyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUU1QyxVQUFJLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxzQkFBTyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztLQUU3RDs7O1dBRVEscUJBQUc7O0FBRVYsVUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNuRCxVQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUM5QyxVQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTdCLFVBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELFVBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUVyQzs7O1dBRU8sb0JBQUc7O0FBRVQsVUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO1VBQy9CLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztBQUNyQyxhQUFLLEVBQUUsUUFBUTtPQUNoQixDQUFDLENBQUM7O0FBRVAsY0FBUSxDQUFDLFFBQVEsR0FBRyxDQUNsQixJQUFJLENBQUMsS0FBSyxFQUNWLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQ25FLENBQUM7O0FBRUYsVUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVoRCxVQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFN0I7OztXQUVNLG1CQUFHOztBQUVSLFVBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUM3QixJQUFJLENBQUMsS0FBSyxFQUNWLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQ25FLENBQUM7QUFDRixVQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7S0FFL0M7OztTQTVKRyxPQUFPOzs7cUJBZ0tFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7d0JDeEtILGlCQUFpQjs7OztJQUU5QixNQUFNO0FBRUMsV0FGUCxNQUFNLEdBRUk7MEJBRlYsTUFBTTs7QUFJUixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxzQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkMsUUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7R0FFdEI7O2VBUEcsTUFBTTs7V0FTTixnQkFBRzs7QUFFTCxVQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsZUFBTztPQUNSOztBQUVELFVBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FFckI7OztXQUVHLGdCQUFHOztBQUVMLFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pCLGVBQU87T0FDUjs7QUFFRCxVQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBRXRCOzs7U0E3QkcsTUFBTTs7O3FCQWlDRyxJQUFJLE1BQU0sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNuQ1IsY0FBYzs7OztvQ0FDZCw0QkFBNEI7Ozs7SUFFekMsU0FBUztBQUVGLFdBRlAsU0FBUyxDQUVELEtBQUssRUFBRTswQkFGZixTQUFTOztBQUlYLFFBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUV0QixRQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7QUFFckIsU0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsUUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0dBRXBCOztlQVpHLFNBQVM7O1dBY0YsdUJBQUcsRUFBRTs7O1dBRUwsdUJBQUc7O0FBRVosYUFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FFMUI7OztXQUVVLHVCQUFHOztBQUVaLGFBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBRTFCOzs7V0FFVSx1QkFBRyxFQUFFOzs7V0FFWCxpQkFBRzs7QUFFTixVQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUVyQjs7O1dBRUksaUJBQUc7O0FBRU4sVUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FFdEI7OztXQUVJLGlCQUFHOztBQUVOLFVBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs7QUFFaEIsZUFBTztPQUVSOztBQUVELFdBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLFVBQUksSUFBSSxHQUFHLElBQUk7VUFDWCxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztBQUV0QyxrQkFBWSxDQUFDLElBQUksQ0FBQyxZQUFXOztBQUUzQixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsS0FBSyxDQUNQLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFMUIsWUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztBQUVuQixZQUFJLENBQUMsS0FBSyxDQUNQLEtBQUssQ0FBQyxzQkFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQzVCLEtBQUssQ0FBQyxZQUFXOztBQUVoQixXQUFDLENBQUMsSUFBSSxDQUFDLENBQ0osV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUNwQixPQUFPLEVBQUUsQ0FBQzs7QUFFYixlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRXRDLENBQUMsQ0FBQztPQUVOLENBQUMsQ0FBQzs7QUFFSCxhQUFPLFlBQVksQ0FBQztLQUVyQjs7O1dBRUksZUFBQyxRQUFRLEVBQUU7O0FBRWQsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7O0FBRWpCLGVBQU87T0FFUjs7QUFFRCxXQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUVyQyx3Q0FBTyxJQUFJLEVBQUUsQ0FBQzs7QUFFZCxVQUFJLElBQUksR0FBRyxJQUFJO1VBQ1gsWUFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixPQUFPLFFBQVEsS0FBSyxVQUFVLEdBQUcsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUNoRSxDQUFDLENBQUM7O0FBRVAsa0JBQVksQ0FBQyxJQUFJLENBQUMsWUFBVzs7QUFFM0IsMENBQU8sSUFBSSxFQUFFLENBQUM7O0FBRWQsWUFBSSxDQUFDLEtBQUssQ0FDUCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQ2pCLEtBQUssQ0FBQyxzQkFBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQzVCLEtBQUssQ0FBQyxZQUFXOztBQUVoQixXQUFDLENBQUMsSUFBSSxDQUFDLENBQ0osV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUN6QixPQUFPLEVBQUUsQ0FBQzs7QUFFYixjQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWIsZUFBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUVuQyxDQUFDLENBQUM7T0FFTixDQUFDLENBQUM7O0FBRUgsYUFBTyxZQUFZLENBQUM7S0FFckI7OztTQTFIRyxTQUFTOzs7cUJBOEhBLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQ2pJTCxjQUFjOzs7OzJCQUNYLGlCQUFpQjs7Ozs4QkFDbkIsb0JBQW9COzs7O2tDQUV0QiwwQkFBMEI7Ozs7NENBRXhCLHFDQUFxQzs7OzsyQ0FDdEMsb0NBQW9DOzs7O3lDQUUvQixrQ0FBa0M7Ozs7QUFFMUQsSUFBSSxLQUFLLEdBQUcsZ0NBQU0sV0FBVyxFQUFFLENBQUM7O0lBRTFCLFNBQVM7WUFBVCxTQUFTOztXQUFULFNBQVM7MEJBQVQsU0FBUzs7K0JBQVQsU0FBUzs7O2VBQVQsU0FBUzs7V0FFRix1QkFBRzs7QUFFWixVQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25ELFVBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBRWhFOzs7V0FFVSx1QkFBRzs7Ozs7Ozs7OztBQVVaLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFaEIsVUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSw0QkFBUSxLQUFLLENBQUMsSUFBSSw2QkFBUyxDQUFDLENBQUMsQ0FBQzs7QUFFbkYsVUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBVzs7QUFFN0MsYUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRTlCLGFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNuQixZQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3hCLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7T0FFMUIsQ0FBQyxDQUFDOztBQUVILGFBQU8sSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUU7Ozs7O0FBS25DLFlBQUksQ0FBQyxRQUFRLEdBQUcsK0NBQWEsQ0FBQztBQUM5QixZQUFJLENBQUMsT0FBTyxHQUFHLDhDQUFZLENBQUM7Ozs7QUFJNUIsa0JBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FFM0IsQ0FBQyxDQUFDO0tBRUo7OztXQUVVLHVCQUFHOztBQUVaLFVBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUV2Qjs7O1dBRVUsdUJBQUc7O0FBRVosVUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRS9CLFVBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDeEIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7QUFFdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O0FBRXBCLGFBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBRTFCOzs7U0FwRUcsU0FBUzs7O3FCQXdFQSxJQUFJLFNBQVMsQ0FBQyxzQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDckZqQyxjQUFjOzs7OzJCQUNYLGlCQUFpQjs7OztpQ0FDdEIseUJBQXlCOzs7O0lBRXBDLFlBQVk7WUFBWixZQUFZOztXQUFaLFlBQVk7MEJBQVosWUFBWTs7K0JBQVosWUFBWTs7O2VBQVosWUFBWTs7V0FFTCx1QkFBRzs7QUFFWixVQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxzQkFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBRXZEOzs7V0FFVSx1QkFBRzs7QUFFWixVQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLFVBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsK0JBQUssS0FBSyxDQUFDLElBQUksZ0NBQU0sQ0FBQyxDQUFDLENBQUM7O0FBRTdFLGFBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBRTFCOzs7V0FFVSx1QkFBRzs7QUFFWixVQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFL0IsYUFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FFMUI7OztTQXhCRyxZQUFZOzs7cUJBNEJILElBQUksWUFBWSxDQUFDLHNCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDaEN2QyxjQUFjOzs7OzJCQUNYLGlCQUFpQjs7OztJQUVqQyxXQUFXO1lBQVgsV0FBVzs7V0FBWCxXQUFXOzBCQUFYLFdBQVc7OytCQUFYLFdBQVc7OztTQUFYLFdBQVc7OztxQkFJRixJQUFJLFdBQVcsQ0FBQyxzQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNQeEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDOztJQUVmLFNBQVM7ZUFBVCxTQUFTOztXQUlLLHVCQUFHO0FBQUUsYUFBTyxTQUFTLENBQUM7S0FBRTs7O1NBRmhCLGVBQUc7QUFBRSxhQUFPLGlCQUFpQixDQUFDO0tBQUU7OztTQUM3QixlQUFHO0FBQUUsYUFBTyxvQkFBb0IsQ0FBQztLQUFFOzs7QUFHckQsV0FOUCxTQUFTLEdBTUM7MEJBTlYsU0FBUzs7QUFRWCxRQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztHQUV0Qjs7ZUFWRyxTQUFTOztXQVlMLGtCQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUU7O0FBRTFCLFVBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTs7QUFFbEQsWUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7T0FFckM7O0FBRUQsVUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFekM7OztXQUVNLGlCQUFDLGFBQWEsRUFBYTtVQUFYLElBQUkseURBQUcsRUFBRTs7QUFFOUIsVUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRTs7QUFFakQsWUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBUyxFQUFFLEVBQUU7O0FBRWxELGlCQUFPLEVBQUUsS0FBSyxVQUFVLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFaEQsQ0FBQyxDQUFDO09BRUo7S0FFRjs7O1NBcENHLFNBQVM7OztBQXdDZixTQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQzs7cUJBRWIsU0FBUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQ29uZmlnID0ge1xuICBodG1sOiB7XG4gICAgc2NlbmU6IHtcbiAgICAgIGxvYWRpbmc6ICcjc2NlbmUtbG9hZGluZycsXG4gICAgICBnYW1lOiAnI3NjZW5lLWdhbWUnLFxuICAgICAgcmVzdWx0OiAnI3NjZW5lLXJlc3VsdCdcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHBsYXlCdXR0b246ICcjc3RhcnQtcGxheSdcbiAgICB9LFxuICAgIGdhbWU6IHtcbiAgICAgIHByZXZpZXc6ICcjcHJldmlldycsXG4gICAgICBlZGl0b3I6ICcjZWRpdG9yJyxcbiAgICAgIHF1aXRCdXR0b246ICcjZ2FtZS1xdWl0JyxcbiAgICAgIHZpZXdDaGFuZ2VCdXR0b246ICcjdmlldy1jaGFuZ2VyJyxcbiAgICAgIGJveFNlbGVjdG9yOiAnI2JveC1zZWxlY3RvcidcbiAgICB9LFxuICAgIGxvYWRlcjogJyNsb2FkZXInXG4gIH0sXG4gIHNjZW5lOiB7XG4gICAgZHVyYXRpb246IDUwMFxuICB9LFxuICBnYW1lOiB7XG4gICAgdGV4dHVyZVNpemU6IDMzLFxuICAgIHByZXZpZXc6IHtcbiAgICAgIHNob3dCb3JkZXI6IHRydWUsXG4gICAgICBpc0ZsYXQ6IGZhbHNlLFxuICAgICAgcm90YXRpb25TcGVlZDogMTUgKiAxMDAwLFxuICAgICAgcm90YXRpb25TcGVlZFk6IDMwICogMTAwMFxuICAgIH1cbiAgfSxcbiAgd29ybGQ6IHtcbiAgICBzaXplOiAzMlxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maWc7IiwiaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi9zY2VuZXMvc2NlbmUtbG9hZGluZy5qcyc7XG5pbXBvcnQgZ2FtZSAgICBmcm9tICcuL3NjZW5lcy9zY2VuZS1nYW1lLmpzJztcbmltcG9ydCByZXN1bHQgIGZyb20gJy4vc2NlbmVzL3NjZW5lLXJlc3VsdC5qcyc7XG5cbmNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy9sb2FkaW5nLmVudGVyKCk7XG4gICAgZ2FtZS5lbnRlcigpO1xuXG4gICAgLy8gVE9ETzog44OH44OQ44OD44Kw55So44Gu44K344O844Oz5YiH44KK5pu/44GIXG4gICAgZGVidWcoZnVuY3Rpb24oKSB7XG5cbiAgICAgIHdpbmRvdy5zY2VuZSA9IHtcbiAgICAgICAgbG9hZGluZzogZnVuY3Rpb24oKSB7IGdhbWUubGVhdmUobG9hZGluZy5lbnRlci5iaW5kKGxvYWRpbmcpKTsgcmVzdWx0LmxlYXZlKGxvYWRpbmcuZW50ZXIuYmluZChsb2FkaW5nKSkgfSxcbiAgICAgICAgZ2FtZTogZnVuY3Rpb24oKSB7IGxvYWRpbmcubGVhdmUoZ2FtZS5lbnRlci5iaW5kKGdhbWUpKTsgcmVzdWx0LmxlYXZlKGdhbWUuZW50ZXIuYmluZChnYW1lKSk7IH0sXG4gICAgICAgIHJlc3VsdDogZnVuY3Rpb24oKSB7IGxvYWRpbmcubGVhdmUocmVzdWx0LmVudGVyLmJpbmQocmVzdWx0KSk7IGdhbWUubGVhdmUocmVzdWx0LmVudGVyLmJpbmQocmVzdWx0KSk7IH1cbiAgICAgIH07XG5cbiAgICB9KTtcblxuICAgIChmdW5jdGlvbigpe3ZhciBzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7c2NyaXB0Lm9ubG9hZD1mdW5jdGlvbigpe3ZhciBzdGF0cz1uZXcgU3RhdHMoKTtzdGF0cy5kb21FbGVtZW50LnN0eWxlLmNzc1RleHQ9J3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDt0b3A6MDt6LWluZGV4OjEwMDAwJztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBsb29wKCl7c3RhdHMudXBkYXRlKCk7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApfSk7fTtzY3JpcHQuc3JjPScvL3Jhd2dpdC5jb20vbXJkb29iL3N0YXRzLmpzL21hc3Rlci9idWlsZC9zdGF0cy5taW4uanMnO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KSgpXG5cbiAgfVxuXG59XG5cbm5ldyBNYWluKCk7XG4iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9ibG9jay5qcyc7XG5cbmNsYXNzIEJsb2NrQ29yZSBleHRlbmRzIEJsb2NrIHtcblxuICBfaW5pdGlhbGl6ZSgpIHtcblxuICAgIHRoaXMudHlwZSA9IEJsb2NrLkJMT0NLX0NPUkU7XG5cbiAgICB0aGlzLmJyZWFrYWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRDb2xvcigweDQwNDA0MCk7XG4gICAgdGhpcy5zZXRCb3JkZXJDb2xvcigweDgwODA4MCk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrQ29yZTsiLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9ibG9jay5qcyc7XG5cbmNsYXNzIEJsb2NrTW9ubyBleHRlbmRzIEJsb2NrIHtcblxuICBfaW5pdGlhbGl6ZSgpIHtcblxuICAgIHRoaXMudHlwZSA9IEJsb2NrLkJMT0NLX01PTk87XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHosIGNvbG9yLCBib3JkZXJDb2xvcikge1xuXG4gICAgc3VwZXIoeCwgeSwgeik7XG5cbiAgICB0aGlzLnNldENvbG9yKGNvbG9yKTtcbiAgICB0aGlzLnNldEJvcmRlckNvbG9yKGJvcmRlckNvbG9yKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tNb25vOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxudmFyIGlkID0gMDtcblxuY2xhc3MgQmxvY2sge1xuXG4gIHN0YXRpYyBnZXQgQkxPQ0tfQkFTRSgpIHsgcmV0dXJuICdCTE9DS19CQVNFJzsgfVxuICBzdGF0aWMgZ2V0IEJMT0NLX0NPUkUoKSB7IHJldHVybiAnQkxPQ0tfQ09SRSc7IH1cbiAgc3RhdGljIGdldCBCTE9DS19NT05PKCkgeyByZXR1cm4gJ0JMT0NLX01PTk8nOyB9XG5cbiAgX2luaXRpYWxpemUoKSB7fVxuXG4gIGNvbnN0cnVjdG9yKHgsIHksIHopIHtcblxuICAgIHRoaXMuaWQgPSArK2lkO1xuXG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMueiA9IHo7XG5cbiAgICB0aGlzLnR5cGUgPSBCbG9jay5CTE9DS19CQVNFO1xuXG4gICAgdGhpcy5icmVha2FibGUgPSB0cnVlO1xuXG4gICAgdGhpcy5jb2xvciA9IDB4MDAwMDAwO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAweGZmZmZmZjtcblxuICAgIHRoaXMuX2luaXRpYWxpemUoKTtcblxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3IpIHtcblxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcblxuICB9XG5cbiAgc2V0Qm9yZGVyQ29sb3IoY29sb3IpIHtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBjb2xvcjtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7IiwidmFyIGRyYXdTZXR0aW5ncyA9IG51bGw7XG5cbmNsYXNzIERyYXdTZXR0aW5ncyB7XG5cbiAgc3RhdGljIGdldEluc3RhbmNlKCkgeyByZXR1cm4gZHJhd1NldHRpbmdzOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmNvbG9yID0gMHhmZmZmZmY7XG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IDB4ODA4MDgwO1xuXG4gIH1cblxuICBzZXRDb2xvcihjb2xvcikge1xuXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuXG4gIH1cblxuICBzZXRCb3JkZXJDb2xvcihib3JkZXJDb2xvcikge1xuXG4gICAgdGhpcy5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yO1xuXG4gIH1cblxufVxuXG5kcmF3U2V0dGluZ3MgPSBuZXcgRHJhd1NldHRpbmdzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdTZXR0aW5nczsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgQmxvY2tDb3JlIGZyb20gJy4uL2Jsb2NrL2Jsb2NrLWNvcmUuanMnO1xuXG52YXIgd29ybGQgPSBudWxsXG5cbiAgLCBjdXJyZW50RGlyZWN0aW9uID0gMFxuICAsIGRpcmVjdGlvbiA9IFtcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCksXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAtMSksXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygtMSwgMCwgMCksXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSxcbiAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0xLCAwKVxuICAgIF07XG5cbmNsYXNzIFdvcmxkIHtcblxuICBzdGF0aWMgZ2V0IEVWRU5UX1NFVEJMT0NLKCkgeyByZXR1cm4gJ0VWRU5UX1NFVEJMT0NLJzsgfVxuICBzdGF0aWMgZ2V0IEVWRU5UX1JFTU9WRUJMT0NLKCkgeyByZXR1cm4gJ0VWRU5UX1JFTU9WRUJMT0NLJzsgfVxuICBzdGF0aWMgZ2V0IEVWRU5UX1JFU0VUKCkgeyByZXR1cm4gJ0VWRU5UX1JFU0VUJzsgfVxuICBzdGF0aWMgZ2V0IERJUkVDVElPTjEoKSB7IHJldHVybiBkaXJlY3Rpb25bMF07IH1cbiAgc3RhdGljIGdldCBESVJFQ1RJT04yKCkgeyByZXR1cm4gZGlyZWN0aW9uWzFdOyB9XG4gIHN0YXRpYyBnZXQgRElSRUNUSU9OMygpIHsgcmV0dXJuIGRpcmVjdGlvblsyXTsgfVxuICBzdGF0aWMgZ2V0IERJUkVDVElPTjQoKSB7IHJldHVybiBkaXJlY3Rpb25bM107IH1cbiAgc3RhdGljIGdldCBESVJFQ1RJT041KCkgeyByZXR1cm4gZGlyZWN0aW9uWzRdOyB9XG4gIHN0YXRpYyBnZXQgRElSRUNUSU9ONigpIHsgcmV0dXJuIGRpcmVjdGlvbls1XTsgfVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7IHJldHVybiB3b3JsZDsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHRoaXMuX3Jlc2V0RXZlbnRzKCk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbiA9IFdvcmxkLkRJUkVDVElPTjE7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAvLyBUT0RPOiDmtojjgZlcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGIgPSBuZXcgQmxvY2tDb3JlKDE2LCAxNiwgMTcpO1xuICAgIHdpbmRvdy53ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHNlbGYuc2V0QmxvY2soYik7XG5cbiAgICB9O1xuXG4gICAgd2luZG93LncyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIHNlbGYucmVtb3ZlQmxvY2soYik7XG5cbiAgICB9O1xuXG4gIH1cblxuICBfcmVzZXRFdmVudHMoKSB7XG5cbiAgICB0aGlzLl9ldmVudHMgPSB7XG4gICAgICBFVkVOVF9TRVRCTE9DSzogW10sXG4gICAgICBFVkVOVF9SRU1PVkVCTE9DSzogW10sXG4gICAgICBFVkVOVF9SRVNFVDogW11cbiAgICB9O1xuXG4gIH1cblxuICBjaGFuZ2VWaWV3KCkge1xuXG4gICAgKytjdXJyZW50RGlyZWN0aW9uID49IGRpcmVjdGlvbi5sZW5ndGggJiYgKGN1cnJlbnREaXJlY3Rpb24gPSAwKTtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uW2N1cnJlbnREaXJlY3Rpb25dO1xuXG4gIH1cblxuICByZXNldCgpIHtcblxuICAgIGRlYnVnLmxvZy53b3JsZCgncmVzZXQnKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgQ29uZmlnLndvcmxkLnNpemU7IHgrKykge1xuICAgICAgdGhpcy5fZGF0YVt4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBDb25maWcud29ybGQuc2l6ZTsgeSsrKSB7XG4gICAgICAgIHRoaXMuX2RhdGFbeF1beV0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBDb25maWcud29ybGQuc2l6ZTsgeisrKSB7XG4gICAgICAgICAgdGhpcy5fZGF0YVt4XVt5XVt6XSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zZXRDb3JlQmxvY2soKTtcblxuICAgIHRoaXMuX2V4ZWN1dGUoV29ybGQuRVZFTlRfUkVTRVQpO1xuXG4gIH1cblxuICBfc2V0Q29yZUJsb2NrKCkge1xuXG4gICAgdmFyIGhhbGYgPSBDb25maWcud29ybGQuc2l6ZSAvIDIgPDwgMDtcblxuICAgIHRoaXMuX2RhdGFbaGFsZl1baGFsZl1baGFsZl0gPSBuZXcgQmxvY2tDb3JlKGhhbGYsIGhhbGYsIGhhbGYpO1xuXG4gIH1cblxuICBzZXRCbG9jayhibG9jaykge1xuXG4gICAgaWYgKFxuICAgICAgYmxvY2sueCA8IDAgfHxcbiAgICAgIENvbmZpZy53b3JsZC5zaXplIDw9IGJsb2NrLnggfHxcbiAgICAgIGJsb2NrLnkgPCAwIHx8XG4gICAgICBDb25maWcud29ybGQuc2l6ZSA8PSBibG9jay55IHx8XG4gICAgICBibG9jay56IDwgMCB8fFxuICAgICAgQ29uZmlnLndvcmxkLnNpemUgPD0gYmxvY2suelxuICAgICkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgb2xkID0gdGhpcy5nZXRCbG9jayhibG9jay54LCBibG9jay55LCBibG9jay56KTtcblxuICAgIGlmIChvbGQgIT09IG51bGwpIHtcblxuICAgICAgdGhpcy5yZW1vdmVCbG9jayhvbGQpO1xuXG4gICAgfVxuXG4gICAgZGVidWcubG9nLndvcmxkKGBzZXRCbG9jaygke2Jsb2NrLnh9LCAke2Jsb2NrLnl9LCAke2Jsb2NrLnp9KTpgLCBvbGQsIGJsb2NrKTtcblxuICAgIHRoaXMuX2RhdGFbYmxvY2sueF1bYmxvY2sueV1bYmxvY2suel0gPSBibG9jaztcblxuICAgIHRoaXMuX2V4ZWN1dGUoV29ybGQuRVZFTlRfU0VUQkxPQ0ssIFtvbGQsIGJsb2NrXSk7XG5cbiAgfVxuXG4gIGdldEJsb2NrKHgsIHksIHopIHtcblxuICAgIHJldHVybiB0aGlzLl9kYXRhW3hdW3ldW3pdO1xuXG4gIH1cblxuICBnZXRCbG9ja3MoKSB7XG5cbiAgICB2YXIgYmxvY2tzID0gW107XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53b3JsZC5zaXplOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLndvcmxkLnNpemU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB6ID0gMDsgeiA8IENvbmZpZy53b3JsZC5zaXplOyB6KyspIHtcblxuICAgICAgICAgIHRoaXMuX2RhdGFbeF1beV1bel0gIT09IG51bGwgJiYgYmxvY2tzLnB1c2godGhpcy5fZGF0YVt4XVt5XVt6XSk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibG9ja3M7XG5cbiAgfVxuXG4gIHJlbW92ZUJsb2NrKGJsb2NrKSB7XG5cbiAgICBpZiAoIWJsb2NrLmJyZWFrYWJsZSkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgb2xkID0gYmxvY2s7XG5cbiAgICBkZWJ1Zy5sb2cud29ybGQoYHJlbW92ZUJsb2NrKCR7YmxvY2sueH0sICR7YmxvY2sueX0sICR7YmxvY2suen0pOmAsIG9sZCwgbnVsbCk7XG5cbiAgICB0aGlzLl9kYXRhW2Jsb2NrLnhdW2Jsb2NrLnldW2Jsb2NrLnpdID0gbnVsbDtcblxuICAgIHRoaXMuX2V4ZWN1dGUoV29ybGQuRVZFTlRfUkVNT1ZFQkxPQ0ssIFtvbGQsIG51bGxdKTtcblxuICB9XG5cbiAgb24oZXZlbnRUeXBlLCBmbikge1xuXG4gICAgaWYgKCF0aGlzLl9ldmVudHNbZXZlbnRUeXBlXSkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB0aGlzLl9ldmVudHNbZXZlbnRUeXBlXS5wdXNoKGZuKTtcblxuICB9XG5cbiAgb2ZmKCkge1xuXG4gICAgdGhpcy5fcmVzZXRFdmVudHMoKTtcblxuICB9XG5cbiAgX2V4ZWN1dGUoZXZlbnRUeXBlLCBhcmdzID0gW10pIHtcblxuICAgIHRoaXMuX2V2ZW50c1tldmVudFR5cGVdLmZvckVhY2goZnVuY3Rpb24oZm4pIHtcblxuICAgICAgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuLmFwcGx5KHdvcmxkLCBhcmdzKTtcblxuICAgIH0pO1xuXG4gIH1cblxufVxuXG53b3JsZCA9IG5ldyBXb3JsZCgpO1xuXG5leHBvcnQgZGVmYXVsdCBXb3JsZDsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgRHJhd1NldHRpbmdzIGZyb20gJy4uLy4uL21vZGVscy9kcmF3LXNldHRpbmdzL2RyYXctc2V0dGluZ3MuanMnO1xuXG52YXIgZHJhd1NldHRpbmdzID0gRHJhd1NldHRpbmdzLmdldEluc3RhbmNlKCk7XG5cbmNsYXNzIEJveFNlbGVjdG9yIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuXyRkb20gPSAkKENvbmZpZy5odG1sLmdhbWUuYm94U2VsZWN0b3IpO1xuXG4gICAgdGhpcy5faWR4ID0gMDtcbiAgICB0aGlzLl9jb2xvciA9ICcjZmZmZmZmJztcbiAgICB0aGlzLl9ib3JkZXJDb2xvciA9ICcjYzBjMGMwJztcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBjb2xvcnMgPSBbXG4gICAgICAgIHsgY29sb3I6ICcjZmZmZmZmJywgYm9yZGVyQ29sb3I6ICcjODA4MDgwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzQwNDA0MCcsIGJvcmRlckNvbG9yOiAnIzgwODA4MCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyM4MDgwODAnLCBib3JkZXJDb2xvcjogJyNjMGMwYzAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjYzBjMGMwJywgYm9yZGVyQ29sb3I6ICcjODA4MDgwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnI2ZmMDAwMCcsIGJvcmRlckNvbG9yOiAnIzgwMDAwMCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyMwMGZmMDAnLCBib3JkZXJDb2xvcjogJyMwMDgwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDAwMGZmJywgYm9yZGVyQ29sb3I6ICcjMDAwMDgwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnI2ZmZmYwMCcsIGJvcmRlckNvbG9yOiAnIzgwODAwMCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyNmZjAwZmYnLCBib3JkZXJDb2xvcjogJyM4MDAwODAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDBmZmZmJywgYm9yZGVyQ29sb3I6ICcjMDA4MDgwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzgwMDAwMCcsIGJvcmRlckNvbG9yOiAnI2MwMDAwMCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyMwMDgwMDAnLCBib3JkZXJDb2xvcjogJyMwMGMwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDAwMDgwJywgYm9yZGVyQ29sb3I6ICcjMDAwMGMwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzgwODAwMCcsIGJvcmRlckNvbG9yOiAnI2MwYzAwMCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyM4MDAwODAnLCBib3JkZXJDb2xvcjogJyNjMDAwYzAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDA4MDgwJywgYm9yZGVyQ29sb3I6ICcjMDBjMGMwJyB9XG4gICAgXTtcblxuICAgIHZhciBsaSA9IFtdO1xuXG4gICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24oY29sb3IsIGlkeCkge1xuXG4gICAgICBsaS5wdXNoKGA8bGkgaWQ9XCJib3gtc2VsZWN0b3ItY29sb3ItJHtpZHh9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAke2NvbG9yLmNvbG9yfTsgYm9yZGVyLXRvcDogMXB4ICR7Y29sb3IuYm9yZGVyQ29sb3J9IHNvbGlkOyBib3JkZXItYm90dG9tOiAxcHggJHtjb2xvci5ib3JkZXJDb2xvcn0gc29saWQ7XCI+JHtjb2xvci5jb2xvcn08L2xpPmApO1xuXG4gICAgfSk7XG5cbiAgICB0aGlzLl8kZG9tLmh0bWwoYDx1bD4ke2xpLmpvaW4oJycpfTwvdWw+YCk7XG5cbiAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbihjb2xvciwgaWR4KSB7XG5cbiAgICAgICQoYCNib3gtc2VsZWN0b3ItY29sb3ItJHtpZHh9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgc2VsZi5faWR4ID0gaWR4O1xuICAgICAgICBzZWxmLl9jb2xvciA9IGNvbG9yLmNvbG9yO1xuICAgICAgICBzZWxmLl9ib3JkZXJDb2xvciA9IGNvbG9yLmJvcmRlckNvbG9yO1xuICAgICAgICBkcmF3U2V0dGluZ3Muc2V0Q29sb3IoY29sb3IuY29sb3IpO1xuICAgICAgICBkcmF3U2V0dGluZ3Muc2V0Qm9yZGVyQ29sb3IoY29sb3IuYm9yZGVyQ29sb3IpO1xuXG4gICAgICB9KTtcblxuICAgIH0pO1xuXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBCb3hTZWxlY3RvcigpOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCBXb3JsZCBmcm9tICcuLi8uLi9tb2RlbHMvd29ybGQvd29ybGQuanMnO1xuaW1wb3J0IEJyb2FkY2FzdCBmcm9tICcuLi8uLi91dGlscy9icm9hZGNhc3QuanMnO1xuaW1wb3J0IENhbnZhc01lc2hlcyBmcm9tICcuL2NhbnZhcy1tZXNoZXMuanMnO1xuXG52YXIgd29ybGQgPSBXb3JsZC5nZXRJbnN0YW5jZSgpXG4gICwgYnJvYWRjYXN0ID0gQnJvYWRjYXN0LmdldEluc3RhbmNlKCk7XG5cbmNsYXNzIENhbnZhc0Jhc2Uge1xuXG4gIF9zZXREb20oKSB7XG5cbiAgICB0aGlzLl8kZG9tID0gJCgpO1xuXG4gIH1cblxuICBfaW5pdGlhbGl6ZSgpIHt9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldERvbSgpO1xuICAgIHRoaXMuXyRwYXJlbnQgPSB0aGlzLl8kZG9tLnBhcmVudCgpO1xuXG4gICAgdGhpcy5fbWVzaGVzID0gbmV3IENhbnZhc01lc2hlcygpO1xuICAgIHRoaXMuX2lzRmxhdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5femVybyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGFudGlhbGlhc2luZzogdHJ1ZSxcbiAgICAgIGNhbnZhczogdGhpcy5fJGRvbS5nZXQoMClcbiAgICB9KTtcbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdGhpcy5fY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSgpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuX2Nsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cbiAgICB3b3JsZC5vbihXb3JsZC5FVkVOVF9TRVRCTE9DSywgdGhpcy5fZXZlbnRTZXRCbG9ja0RlZmF1bHQuYmluZCh0aGlzKSk7XG4gICAgd29ybGQub24oV29ybGQuRVZFTlRfUkVNT1ZFQkxPQ0ssIHRoaXMuX2V2ZW50UmVtb3ZlQmxvY2tEZWZhdWx0LmJpbmQodGhpcykpO1xuICAgIHdvcmxkLm9uKFdvcmxkLkVWRU5UX1JFU0VULCB0aGlzLl9ldmVudFJlc2V0RGVmYXVsdC5iaW5kKHRoaXMpKTtcblxuICAgIHdvcmxkLm9uKFdvcmxkLkVWRU5UX1NFVEJMT0NLLCB0aGlzLl9ldmVudFNldEJsb2NrLmJpbmQodGhpcykpO1xuICAgIHdvcmxkLm9uKFdvcmxkLkVWRU5UX1JFTU9WRUJMT0NLLCB0aGlzLl9ldmVudFJlbW92ZUJsb2NrLmJpbmQodGhpcykpO1xuICAgIHdvcmxkLm9uKFdvcmxkLkVWRU5UX1JFU0VULCB0aGlzLl9ldmVudFJlc2V0LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9ldmVudEhvdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ldmVudENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLl9ldmVudFJpZ2h0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuXG4gICAgYnJvYWRjYXN0LnJlZ2lzdGVyKEJyb2FkY2FzdC5CTE9DS19IT1ZFUl9BREQsIHRoaXMuX2FkZEhvdmVyRWZmZWN0LmJpbmQodGhpcykpO1xuICAgIGJyb2FkY2FzdC5yZWdpc3RlcihCcm9hZGNhc3QuQkxPQ0tfSE9WRVJfUkVNT1ZFLCB0aGlzLl9yZW1vdmVIb3ZlckVmZmVjdC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuX2luaXRpYWxpemUoKTtcblxuICAgIHRoaXMuX2FuaW1hdGVMb29wKCk7XG5cbiAgfVxuXG4gIF9ldmVudFNldEJsb2NrRGVmYXVsdChvbGRCbG9jaywgbmV3QmxvY2spIHtcblxuICAgIGRlYnVnLmxvZy5nYW1lKCdzZXRCbG9jazonLCBvbGRCbG9jaywgbmV3QmxvY2spO1xuXG4gICAgdGhpcy5fcmVtb3ZlQmxvY2sob2xkQmxvY2spO1xuICAgIHRoaXMuX3NldEJsb2NrKG5ld0Jsb2NrKTtcblxuICB9XG5cbiAgX2V2ZW50UmVtb3ZlQmxvY2tEZWZhdWx0KG9sZEJsb2NrLCBuZXdCbG9jaykge1xuXG4gICAgZGVidWcubG9nLmdhbWUoJ3JlbW92ZUJsb2NrOicsIG9sZEJsb2NrLCBuZXdCbG9jayk7XG5cbiAgICB0aGlzLl9yZW1vdmVCbG9jayhvbGRCbG9jayk7XG4gICAgdGhpcy5fc2V0QmxvY2sobmV3QmxvY2spO1xuXG4gIH1cblxuICBfZXZlbnRSZXNldERlZmF1bHQoKSB7XG5cbiAgICB0aGlzLl9yZXNldFNjZW5lKCk7XG5cbiAgICB0aGlzLl9sb2FkQmxvY2tzKCk7XG5cbiAgfVxuXG4gIF9ldmVudFNldEJsb2NrKCkge31cblxuICBfZXZlbnRSZW1vdmVCbG9jaygpIHt9XG5cbiAgX2V2ZW50UmVzZXQoKSB7fVxuXG4gIF9ldmVudENsaWNrKGV2ZW50KSB7fVxuXG4gIF9ldmVudFJpZ2h0Q2xpY2soZXZlbnQpIHt9XG5cbiAgX2V2ZW50SG92ZXIoZXZlbnQpIHt9XG5cbiAgX2FkZEhvdmVyRWZmZWN0KCkge31cblxuICBfcmVtb3ZlSG92ZXJFZmZlY3QoKSB7fVxuXG4gIF9hbmltYXRlKCkge31cblxuICBfYW5pbWF0ZUxvb3AoKSB7XG5cbiAgICBpZiAoIXRoaXMuX2lzQWxpdmUpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdmFyIGZyYW1lID0gdGhpcy5fY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAqIDEwMDA7XG5cbiAgICB0aGlzLl9hbmltYXRlKGZyYW1lKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hbmltYXRlTG9vcC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbiAgcmVzaXplKCkge1xuXG4gICAgdGhpcy5fd2lkdGggPSB0aGlzLl8kcGFyZW50LndpZHRoKCk7XG4gICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5fJHBhcmVudC5oZWlnaHQoKTtcbiAgICB0aGlzLl9zaG9ydGVyID0gdGhpcy5fd2lkdGggPiB0aGlzLl9oZWlnaHQgPyB0aGlzLl9oZWlnaHQgOiB0aGlzLl93aWR0aDtcblxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFNpemUodGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XG5cbiAgICB2YXIgZGlzdGFuY2UgPSBDb25maWcud29ybGQuc2l6ZSAvIDQgKiBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZVxuICAgICAgLCByYXRlID0gdGhpcy5fd2lkdGggLyB0aGlzLl9oZWlnaHQ7XG5cbiAgICB0aGlzLl9jYW1lcmEudG9wID0gZGlzdGFuY2U7XG4gICAgdGhpcy5fY2FtZXJhLnJpZ2h0ID0gZGlzdGFuY2UgKiByYXRlO1xuICAgIHRoaXMuX2NhbWVyYS5ib3R0b20gPSAtZGlzdGFuY2U7XG4gICAgdGhpcy5fY2FtZXJhLmxlZnQgPSAtZGlzdGFuY2UgKiByYXRlO1xuXG4gICAgLy90aGlzLl9jYW1lcmEuYXNwZWN0ID0gdGhpcy5fd2lkdGggLyB0aGlzLl9oZWlnaHQ7XG4gICAgdGhpcy5fY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICB9XG5cbiAgX3Jlc2V0U2NlbmUoKSB7XG5cbiAgICB0aGlzLl9zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICBfbG9hZEJsb2NrcygpIHtcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBibG9ja3MgPSB3b3JsZC5nZXRCbG9ja3MoKTtcblxuICAgIGRlYnVnLmxvZy5nYW1lKCdsb2FkQmxvY2tzOicsIGJsb2Nrcyk7XG5cbiAgICBibG9ja3MuZm9yRWFjaChmdW5jdGlvbihibG9jaykge1xuXG4gICAgICBzZWxmLl9zZXRCbG9jayhibG9jayk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgX3NldEJsb2NrKGJsb2NrKSB7XG5cbiAgICBpZiAoYmxvY2sgPT09IG51bGwpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdmFyIG1lc2ggPSB0aGlzLl9tZXNoZXMuY3JlYXRlTWVzaChibG9jaywgdGhpcy5faXNGbGF0KTtcbiAgICB0aGlzLl9zY2VuZS5hZGQobWVzaCk7XG5cbiAgICBpZiAoQ29uZmlnLmdhbWUucHJldmlldy5zaG93Qm9yZGVyKSB7XG5cbiAgICAgIHZhciBib3JkZXIgPSB0aGlzLl9tZXNoZXMuY3JlYXRlQm9yZGVyKGJsb2NrKTtcbiAgICAgIHRoaXMuX3NjZW5lLmFkZChib3JkZXIpO1xuXG4gICAgfVxuXG4gIH1cblxuICBfcmVtb3ZlQmxvY2soYmxvY2spIHtcblxuICAgIGlmIChibG9jayA9PT0gbnVsbCkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgbWVzaCA9IHRoaXMuX21lc2hlcy5nZXRNZXNoKGJsb2NrKTtcbiAgICB0aGlzLl9zY2VuZS5yZW1vdmUobWVzaCk7XG5cbiAgICBpZiAoQ29uZmlnLmdhbWUucHJldmlldy5zaG93Qm9yZGVyKSB7XG5cbiAgICAgIHZhciBib3JkZXIgPSB0aGlzLl9tZXNoZXMuZ2V0Qm9yZGVyKGJsb2NrKTtcbiAgICAgIHRoaXMuX3NjZW5lLnJlbW92ZShib3JkZXIpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5fbWVzaGVzLnJlbW92ZShibG9jayk7XG5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG5cbiAgICB0aGlzLl9pc0FsaXZlID0gZmFsc2U7XG5cbiAgICAvLyBUT0RPOiDjgqTjg5njg7Pjg4jjgpLliIfjgovlh6bnkIbjgpLmm7jjgY9cbiAgICAvL3dvcmxkLm9mZigpO1xuICAgIC8vXG4gICAgLy90aGlzLl9yZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2V2ZW50SG92ZXIuYmluZCh0aGlzKSk7XG4gICAgLy90aGlzLl9yZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZXZlbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAvL3RoaXMuX3JlbmRlcmVyLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCB0aGlzLl9ldmVudFJpZ2h0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgLy93aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgLy9cbiAgICAvLy8vYnJvYWRjYXN0LnVucmVnaXN0ZXIoQnJvYWRjYXN0LkJMT0NLX0hPVkVSX0FERCwgdGhpcy5fYWRkSG92ZXJFZmZlY3QuYmluZCh0aGlzKSk7XG4gICAgLy8vL2Jyb2FkY2FzdC51bnJlZ2lzdGVyKEJyb2FkY2FzdC5CTE9DS19IT1ZFUl9SRU1PVkUsIHRoaXMuX3JlbW92ZUhvdmVyRWZmZWN0LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBudWxsO1xuXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLl9yZW5kZXJlci5yZW5kZXIodGhpcy5fc2NlbmUsIHRoaXMuX2NhbWVyYSk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0Jhc2U7XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vLi4vbW9kZWxzL3dvcmxkL3dvcmxkLmpzJztcbmltcG9ydCBDYW52YXNCYXNlIGZyb20gJy4vY2FudmFzLWJhc2UuanMnO1xuaW1wb3J0IEJyb2FkY2FzdCBmcm9tICcuLi8uLi91dGlscy9icm9hZGNhc3QuanMnO1xuaW1wb3J0IERyYXdTZXR0aW5ncyBmcm9tICcuLi8uLi9tb2RlbHMvZHJhdy1zZXR0aW5ncy9kcmF3LXNldHRpbmdzLmpzJztcblxuXG5pbXBvcnQgQmxvY2tNb25vIGZyb20gJy4uLy4uL21vZGVscy9ibG9jay9ibG9jay1tb25vLmpzJztcblxudmFyIHdvcmxkID0gV29ybGQuZ2V0SW5zdGFuY2UoKVxuICAsIGJyb2FkY2FzdCA9IEJyb2FkY2FzdC5nZXRJbnN0YW5jZSgpXG4gICwgZHJhd1NldHRpbmdzID0gRHJhd1NldHRpbmdzLmdldEluc3RhbmNlKCk7XG5cbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBDYW52YXNCYXNlIHtcblxuICBfc2V0RG9tKCkge1xuXG4gICAgdGhpcy5fJGRvbSA9ICQoQ29uZmlnLmh0bWwuZ2FtZS5lZGl0b3IpO1xuXG4gIH1cblxuICBfaW5pdGlhbGl6ZSgpIHtcblxuICAgIGRlYnVnLmxvZy5lZGl0b3IoJ2luaXRpYWxpemluZyBlZGl0b3IgLi4uJyk7XG5cbiAgICB0aGlzLl9pc0ZsYXQgPSB0cnVlO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuXG4gICAgdGhpcy5faG92ZXJlZCA9IG51bGw7XG5cbiAgICB0aGlzLl9sYXN0SG92ZXJFdmVudCA9IG51bGw7XG5cbiAgICB0aGlzLl9sb2FkQmxvY2tzKCk7XG5cbiAgfVxuXG4gIF9hbmltYXRlKGZyYW1lKSB7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBfZXZlbnRDbGljayhldmVudCkge1xuXG4gICAgdmFyIGludGVyYWN0cyA9IHRoaXMuX2dldEludGVyYWN0cyhldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIGlmIChpbnRlcmFjdHMubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBtZXNoID0gaW50ZXJhY3RzWzBdLm9iamVjdFxuICAgICAgICAsIGJsb2NrID0gdGhpcy5fbWVzaGVzLmdldEJsb2NrQnlNZXNoSWQobWVzaC51dWlkKVxuICAgICAgICAsIHNlbGYgPSB0aGlzO1xuXG4gICAgICB3b3JsZC5zZXRCbG9jayhuZXcgQmxvY2tNb25vKGJsb2NrLnggKyB3b3JsZC5kaXJlY3Rpb24ueCwgYmxvY2sueSArIHdvcmxkLmRpcmVjdGlvbi55LCBibG9jay56ICsgd29ybGQuZGlyZWN0aW9uLnosIGRyYXdTZXR0aW5ncy5jb2xvciwgZHJhd1NldHRpbmdzLmJvcmRlckNvbG9yKSk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIF9ldmVudFJpZ2h0Q2xpY2soZXZlbnQpIHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB2YXIgaW50ZXJhY3RzID0gdGhpcy5fZ2V0SW50ZXJhY3RzKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgaWYgKGludGVyYWN0cy5sZW5ndGgpIHtcblxuICAgICAgdmFyIG1lc2ggPSBpbnRlcmFjdHNbMF0ub2JqZWN0XG4gICAgICAgICwgYmxvY2sgPSB0aGlzLl9tZXNoZXMuZ2V0QmxvY2tCeU1lc2hJZChtZXNoLnV1aWQpO1xuXG4gICAgICB3b3JsZC5yZW1vdmVCbG9jayhibG9jayk7XG5cbiAgICB9XG5cbiAgfVxuXG4gIF9ldmVudFNldEJsb2NrKCkge1xuXG4gICAgaWYgKHRoaXMuX2xhc3RIb3ZlckV2ZW50ID09PSBudWxsKSB7XG5cbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLl9ldmVudEhvdmVyKHNlbGYuX2xhc3RIb3ZlckV2ZW50KTtcbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIF9ldmVudEhvdmVyKGV2ZW50KSB7XG5cbiAgICB0aGlzLl9sYXN0SG92ZXJFdmVudCA9IGV2ZW50O1xuXG4gICAgdmFyIGludGVyYWN0cyA9IHRoaXMuX2dldEludGVyYWN0cyhldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIGlmIChpbnRlcmFjdHMubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBtZXNoID0gaW50ZXJhY3RzWzBdLm9iamVjdDtcblxuICAgICAgaWYgKG1lc2ggIT09IHRoaXMuX2hvdmVyZWQpIHtcblxuICAgICAgICB2YXIgYmxvY2tJZCA9IHRoaXMuX21lc2hlcy5nZXRCbG9ja0lkQnlNZXNoSWQobWVzaC51dWlkKTtcblxuICAgICAgICBicm9hZGNhc3QuZXhlY3V0ZShCcm9hZGNhc3QuQkxPQ0tfSE9WRVJfUkVNT1ZFKTtcbiAgICAgICAgYnJvYWRjYXN0LmV4ZWN1dGUoQnJvYWRjYXN0LkJMT0NLX0hPVkVSX0FERCwgW2Jsb2NrSWRdKTtcblxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICBicm9hZGNhc3QuZXhlY3V0ZShCcm9hZGNhc3QuQkxPQ0tfSE9WRVJfUkVNT1ZFKTtcblxuICB9XG5cbiAgX2dldEludGVyYWN0cyhtb3VzZVgsIG1vdXNlWSkge1xuXG4gICAgdmFyIHggPSAobW91c2VYIC8gdGhpcy5fd2lkdGgpICogMiAtIDFcbiAgICAgICwgeSA9IC0gKG1vdXNlWSAvIHRoaXMuX2hlaWdodCkgKiAyICsgMVxuICAgICAgLCB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCAxKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHZlYywgdGhpcy5fY2FtZXJhKTtcblxuICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLl9tZXNoZXMuZ2V0TWVzaGVzKCkpO1xuXG4gIH1cblxuICBfYWRkSG92ZXJFZmZlY3QoYmxvY2tJZCkge1xuXG4gICAgdmFyIG1lc2ggPSB0aGlzLl9tZXNoZXMuZ2V0TWVzaEJ5QmxvY2tJZChibG9ja0lkKTtcblxuICAgIGlmIChtZXNoICE9PSBudWxsKSB7XG5cbiAgICAgIG1lc2gubWF0ZXJpYWwub3BhY2l0eSA9IDAuODtcbiAgICAgIHRoaXMuX2hvdmVyZWQgPSBtZXNoO1xuXG4gICAgfVxuXG4gIH1cblxuICBfcmVtb3ZlSG92ZXJFZmZlY3QoKSB7XG5cbiAgICBpZiAodGhpcy5faG92ZXJlZCAhPT0gbnVsbCkge1xuXG4gICAgICB0aGlzLl9ob3ZlcmVkLm1hdGVyaWFsLm9wYWNpdHkgPSAxO1xuICAgICAgdGhpcy5faG92ZXJlZCA9IG51bGw7XG5cbiAgICB9XG5cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcblxuICAgIHN1cGVyLnJlc2l6ZSgpO1xuXG4gICAgdmFyIGJhc2UgPSB0aGlzLl8kcGFyZW50LmhlaWdodCgpIC8gMiAqIE1hdGguc3FydCgzKVxuICAgICAgLCBwZXIgPSB0aGlzLl9zaG9ydGVyIC8gQ29uZmlnLndvcmxkLnNpemU7XG5cbiAgICB0aGlzLl9jYW1lcmFEaXN0YW5jZSA9IGJhc2UgKiBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZSAvIHBlcjtcblxuICAgIHRoaXMuc2V0Q2FtZXJhKCk7XG5cbiAgfVxuXG4gIHNldENhbWVyYSgpIHtcblxuICAgIHZhciBjYW1lcmEgPSB3b3JsZC5kaXJlY3Rpb24uY2xvbmUoKS5tdWx0aXBseVNjYWxhcih0aGlzLl9jYW1lcmFEaXN0YW5jZSk7XG4gICAgdGhpcy5fY2FtZXJhLnBvc2l0aW9uLnggPSBjYW1lcmEueDtcbiAgICB0aGlzLl9jYW1lcmEucG9zaXRpb24ueSA9IGNhbWVyYS55O1xuICAgIHRoaXMuX2NhbWVyYS5wb3NpdGlvbi56ID0gY2FtZXJhLno7XG4gICAgdGhpcy5fY2FtZXJhLmxvb2tBdCh0aGlzLl96ZXJvKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldztcbiIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY2xhc3MgQ2FudmFzTWVzaGVzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuX21lc2hlcyA9IFtdO1xuICAgIHRoaXMuX2JvcmRlcnMgPSBbXTtcblxuICB9XG5cbiAgZ2V0TWVzaGVzKCkge1xuXG4gICAgdmFyIG1lc2hlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX21lc2hlcykge1xuXG4gICAgICBtZXNoZXMucHVzaCh0aGlzLl9tZXNoZXNbaWR4XS5tZXNoKTtcblxuICAgIH1cblxuICAgIHJldHVybiBtZXNoZXM7XG5cbiAgfVxuXG4gIGdldE1lc2goYmxvY2spIHtcblxuICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLl9tZXNoZXMpIHtcblxuICAgICAgaWYgKHRoaXMuX21lc2hlc1tpZHhdLmJsb2NrSWQgPT09IGJsb2NrLmlkKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hlc1tpZHhdLm1lc2g7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuXG4gIH1cblxuICBnZXRNZXNoQnlCbG9ja0lkKGJsb2NrSWQpIHtcblxuICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLl9tZXNoZXMpIHtcblxuICAgICAgaWYgKHRoaXMuX21lc2hlc1tpZHhdLmJsb2NrSWQgPT09IGJsb2NrSWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaGVzW2lkeF0ubWVzaDtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfVxuXG4gIGdldEJsb2NrQnlNZXNoSWQobWVzaElkKSB7XG5cbiAgICBmb3IgKGxldCBpZHggaW4gdGhpcy5fbWVzaGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLl9tZXNoZXNbaWR4XS5tZXNoSWQgPT09IG1lc2hJZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoZXNbaWR4XS5ibG9jaztcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfVxuXG4gIGdldEJsb2NrSWRCeU1lc2hJZChtZXNoSWQpIHtcblxuICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLl9tZXNoZXMpIHtcblxuICAgICAgaWYgKHRoaXMuX21lc2hlc1tpZHhdLm1lc2hJZCA9PT0gbWVzaElkKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hlc1tpZHhdLmJsb2NrSWQ7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuXG4gIH1cblxuICBnZXRCb3JkZXIoYmxvY2spIHtcblxuICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLl9ib3JkZXJzKSB7XG5cbiAgICAgIGlmICh0aGlzLl9ib3JkZXJzW2lkeF0uYmxvY2tJZCA9PT0gYmxvY2suaWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fYm9yZGVyc1tpZHhdLmJvcmRlcjtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfVxuXG4gIGNyZWF0ZU1lc2goYmxvY2ssIGlzRmxhdCA9IGZhbHNlKSB7XG5cbiAgICB2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQ29uZmlnLmdhbWUudGV4dHVyZVNpemUsIENvbmZpZy5nYW1lLnRleHR1cmVTaXplLCBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZSlcbiAgICAgICwgbWF0ID0gaXNGbGF0ID8gVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwgOiBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsXG4gICAgICAsIG1hdGVyaWFsID0gbmV3IG1hdCh7XG4gICAgICAgIGNvbG9yOiBibG9jay5jb2xvcixcbiAgICAgICAgYW1iaWVudDogYmxvY2suY29sb3IsXG4gICAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcbiAgICAgIH0pXG4gICAgICAsIG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuXG4gICAgbWVzaC5wb3NpdGlvbi54ID0gKGJsb2NrLnggLSBDb25maWcud29ybGQuc2l6ZSAvIDIgPDwgMCkgKiBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZTtcbiAgICBtZXNoLnBvc2l0aW9uLnkgPSAoYmxvY2sueSAtIENvbmZpZy53b3JsZC5zaXplIC8gMiA8PCAwKSAqIENvbmZpZy5nYW1lLnRleHR1cmVTaXplO1xuICAgIG1lc2gucG9zaXRpb24ueiA9IChibG9jay56IC0gQ29uZmlnLndvcmxkLnNpemUgLyAyIDw8IDApICogQ29uZmlnLmdhbWUudGV4dHVyZVNpemU7XG5cbiAgICB0aGlzLl9tZXNoZXMucHVzaCh7XG4gICAgICBibG9ja0lkOiBibG9jay5pZCxcbiAgICAgIG1lc2hJZDogbWVzaC51dWlkLFxuICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgbWVzaDogbWVzaFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lc2g7XG5cbiAgfVxuXG4gIGNyZWF0ZUJvcmRlcihibG9jaykge1xuXG4gICAgdmFyIG1lc2ggPSB0aGlzLmdldE1lc2goYmxvY2spXG4gICAgICAsIGJvcmRlciA9IG5ldyBUSFJFRS5Cb3hIZWxwZXIobWVzaCk7XG5cbiAgICBib3JkZXIubWF0ZXJpYWwuY29sb3Iuc2V0KGJsb2NrLmJvcmRlckNvbG9yKTtcblxuICAgIHRoaXMuX2JvcmRlcnMucHVzaCh7XG4gICAgICBibG9ja0lkOiBibG9jay5pZCxcbiAgICAgIG1lc2hJZDogbWVzaC51dWlkLFxuICAgICAgYmxvY2s6IGJsb2NrLFxuICAgICAgYm9yZGVyOiBib3JkZXJcbiAgICB9KTtcblxuICAgIHJldHVybiBib3JkZXI7XG5cbiAgfVxuXG4gIHJlbW92ZShibG9jaykge1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX21lc2hlcykge1xuXG4gICAgICBpZiAodGhpcy5fbWVzaGVzW2lkeF0uYmxvY2tJZCA9PT0gYmxvY2suaWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaGVzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc01lc2hlczsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vLi4vbW9kZWxzL3dvcmxkL3dvcmxkLmpzJztcbmltcG9ydCBDYW52YXNCYXNlIGZyb20gJy4vY2FudmFzLWJhc2UuanMnO1xuaW1wb3J0IEJyb2FkY2FzdCBmcm9tICcuLi8uLi91dGlscy9icm9hZGNhc3QuanMnO1xuXG52YXIgd29ybGQgPSBXb3JsZC5nZXRJbnN0YW5jZSgpXG4gICwgYnJvYWRjYXN0ID0gQnJvYWRjYXN0LmdldEluc3RhbmNlKCk7XG5cbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBDYW52YXNCYXNlIHtcblxuICBfc2V0RG9tKCkge1xuXG4gICAgdGhpcy5fJGRvbSA9ICQoQ29uZmlnLmh0bWwuZ2FtZS5wcmV2aWV3KTtcblxuICB9XG5cbiAgX2luaXRpYWxpemUoKSB7XG5cbiAgICBkZWJ1Zy5sb2cucHJldmlldygnaW5pdGlhbGl6aW5nIHByZXZpZXcgLi4uJyk7XG5cbiAgICB0aGlzLl9pc0ZsYXQgPSBDb25maWcuZ2FtZS5wcmV2aWV3LmlzRmxhdDtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblxuICAgIHRoaXMuX2hvdmVyZWQgPSBudWxsO1xuXG4gICAgdGhpcy5fc2V0TGlnaHQoKTtcbiAgICB0aGlzLl9zZXRMaW5lKCk7XG5cbiAgICB0aGlzLl9sb2FkQmxvY2tzKCk7XG5cbiAgfVxuXG4gIF9ldmVudEhvdmVyKGV2ZW50KSB7XG5cbiAgICB2YXIgaW50ZXJhY3RzID0gdGhpcy5fZ2V0SW50ZXJhY3RzKGV2ZW50Lm9mZnNldFgsIGV2ZW50Lm9mZnNldFkpO1xuXG4gICAgaWYgKGludGVyYWN0cy5sZW5ndGgpIHtcblxuICAgICAgdmFyIG1lc2ggPSBpbnRlcmFjdHNbMF0ub2JqZWN0O1xuXG4gICAgICBpZiAobWVzaCAhPT0gdGhpcy5faG92ZXJlZCkge1xuXG4gICAgICAgIHZhciBibG9ja0lkID0gdGhpcy5fbWVzaGVzLmdldEJsb2NrSWRCeU1lc2hJZChtZXNoLnV1aWQpO1xuXG4gICAgICAgIGJyb2FkY2FzdC5leGVjdXRlKEJyb2FkY2FzdC5CTE9DS19IT1ZFUl9SRU1PVkUpO1xuICAgICAgICBicm9hZGNhc3QuZXhlY3V0ZShCcm9hZGNhc3QuQkxPQ0tfSE9WRVJfQURELCBbYmxvY2tJZF0pO1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIGJyb2FkY2FzdC5leGVjdXRlKEJyb2FkY2FzdC5CTE9DS19IT1ZFUl9SRU1PVkUpO1xuXG4gIH1cblxuICBfYWRkSG92ZXJFZmZlY3QoYmxvY2tJZCkge1xuXG4gICAgdmFyIG1lc2ggPSB0aGlzLl9tZXNoZXMuZ2V0TWVzaEJ5QmxvY2tJZChibG9ja0lkKTtcblxuICAgIGlmIChtZXNoICE9PSBudWxsKSB7XG5cbiAgICAgIG1lc2gubWF0ZXJpYWwub3BhY2l0eSA9IDAuNTtcbiAgICAgIHRoaXMuX2hvdmVyZWQgPSBtZXNoO1xuXG4gICAgfVxuXG4gIH1cblxuICBfZ2V0SW50ZXJhY3RzKG1vdXNlWCwgbW91c2VZKSB7XG5cbiAgICB2YXIgeCA9IChtb3VzZVggLyB0aGlzLl93aWR0aCkgKiAyIC0gMVxuICAgICAgLCB5ID0gLSAobW91c2VZIC8gdGhpcy5faGVpZ2h0KSAqIDIgKyAxXG4gICAgICAsIHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIDEpO1xuXG4gICAgdGhpcy5fcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEodmVjLCB0aGlzLl9jYW1lcmEpO1xuXG4gICAgcmV0dXJuIHRoaXMuX3JheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKHRoaXMuX21lc2hlcy5nZXRNZXNoZXMoKSk7XG5cbiAgfVxuXG4gIF9yZW1vdmVIb3ZlckVmZmVjdCgpIHtcblxuICAgIGlmICh0aGlzLl9ob3ZlcmVkICE9PSBudWxsKSB7XG5cbiAgICAgIHRoaXMuX2hvdmVyZWQubWF0ZXJpYWwub3BhY2l0eSA9IDE7XG4gICAgICB0aGlzLl9ob3ZlcmVkID0gbnVsbDtcblxuICAgIH1cblxuICB9XG5cbiAgX2FuaW1hdGUoZnJhbWUpIHtcblxuICAgIHZhciBwcm9ncmVzcyA9IChmcmFtZSAlIENvbmZpZy5nYW1lLnByZXZpZXcucm90YXRpb25TcGVlZCkgLyBDb25maWcuZ2FtZS5wcmV2aWV3LnJvdGF0aW9uU3BlZWRcbiAgICAgICwgcHJvZ3Jlc3NZID0gKGZyYW1lICUgQ29uZmlnLmdhbWUucHJldmlldy5yb3RhdGlvblNwZWVkWSkgLyBDb25maWcuZ2FtZS5wcmV2aWV3LnJvdGF0aW9uU3BlZWRZXG4gICAgICAsIHJhZCA9IHByb2dyZXNzICogMiAqIE1hdGguUElcbiAgICAgICwgcmFkWSA9IHByb2dyZXNzWSAqIDIgKiBNYXRoLlBJXG4gICAgICAsIHggPSBNYXRoLmNvcyhyYWQpICogdGhpcy5fY2FtZXJhRGlzdGFuY2VcbiAgICAgICwgeSA9IE1hdGguc2luKHJhZFkpICogdGhpcy5fY2FtZXJhRGlzdGFuY2UgLyA0XG4gICAgICAsIHogPSBNYXRoLnNpbihyYWQpICogdGhpcy5fY2FtZXJhRGlzdGFuY2VcbiAgICAgICwgbGlnaHRYID0gTWF0aC5jb3MocmFkIC0gTWF0aC5QSSAqIDAuMSkgKiB0aGlzLl9jYW1lcmFEaXN0YW5jZVxuICAgICAgLCBsaWdodFogPSBNYXRoLnNpbihyYWQgLSBNYXRoLlBJICogMC4xKSAqIHRoaXMuX2NhbWVyYURpc3RhbmNlO1xuXG4gICAgdGhpcy5fY2FtZXJhLnBvc2l0aW9uLnggPSB4O1xuICAgIHRoaXMuX2NhbWVyYS5wb3NpdGlvbi55ID0geTtcbiAgICB0aGlzLl9jYW1lcmEucG9zaXRpb24ueiA9IHo7XG4gICAgdGhpcy5fbGlnaHQucG9zaXRpb24uc2V0KGxpZ2h0WCwgQ29uZmlnLmdhbWUudGV4dHVyZVNpemUgKiAyLCBsaWdodFopLm5vcm1hbGl6ZSgpO1xuICAgIHRoaXMuX2NhbWVyYS5sb29rQXQodGhpcy5femVybyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICByZXNpemUoKSB7XG5cbiAgICBzdXBlci5yZXNpemUoKTtcblxuICAgIHZhciBiYXNlID0gdGhpcy5fJHBhcmVudC5oZWlnaHQoKSAvIDIgKiBNYXRoLnNxcnQoMylcbiAgICAgICwgcGVyID0gdGhpcy5fc2hvcnRlciAvIENvbmZpZy53b3JsZC5zaXplO1xuXG4gICAgdGhpcy5fY2FtZXJhRGlzdGFuY2UgPSBiYXNlICogQ29uZmlnLmdhbWUudGV4dHVyZVNpemUgLyBwZXI7XG5cbiAgfVxuXG4gIF9zZXRMaWdodCgpIHtcblxuICAgIHRoaXMuX2xpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgIHRoaXMuX2xpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICB0aGlzLl9zY2VuZS5hZGQodGhpcy5fbGlnaHQpO1xuXG4gICAgdGhpcy5fYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZik7XG4gICAgdGhpcy5fc2NlbmUuYWRkKHRoaXMuX2FtYmllbnRMaWdodCk7XG5cbiAgfVxuXG4gIF9zZXRMaW5lKCkge1xuXG4gICAgdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KClcbiAgICAgICwgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgICAgIGNvbG9yOiAweGZmZmZmZlxuICAgICAgICB9KTtcblxuICAgIGdlb21ldHJ5LnZlcnRpY2VzID0gW1xuICAgICAgdGhpcy5femVybyxcbiAgICAgIHdvcmxkLmRpcmVjdGlvbi5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHRoaXMuX2NhbWVyYURpc3RhbmNlICogMC44KVxuICAgIF07XG5cbiAgICB0aGlzLl9saW5lID0gbmV3IFRIUkVFLkxpbmUoZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgIHRoaXMuX3NjZW5lLmFkZCh0aGlzLl9saW5lKTtcblxuICB9XG5cbiAgc2V0TGluZSgpIHtcblxuICAgIHRoaXMuX2xpbmUuZ2VvbWV0cnkudmVydGljZXMgPSBbXG4gICAgICB0aGlzLl96ZXJvLFxuICAgICAgd29ybGQuZGlyZWN0aW9uLmNsb25lKCkubXVsdGlwbHlTY2FsYXIodGhpcy5fY2FtZXJhRGlzdGFuY2UgKiAwLjgpXG4gICAgXTtcbiAgICB0aGlzLl9saW5lLmdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXc7XG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5cbmNsYXNzIExvYWRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl8kZG9tID0gJChDb25maWcuaHRtbC5sb2FkZXIpO1xuICAgIHRoaXMuX2lzU2hvdyA9IGZhbHNlO1xuXG4gIH1cblxuICBzaG93KCkge1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuXyRkb20uc2hvdygpO1xuICAgIHRoaXMuX2lzU2hvdyA9IHRydWU7XG5cbiAgfVxuXG4gIGhpZGUoKSB7XG5cbiAgICBpZiAoIXRoaXMuX2lzU2hvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuXyRkb20uaGlkZSgpO1xuICAgIHRoaXMuX2lzU2hvdyA9IGZhbHNlO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9hZGVyKCk7IiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi9jb25maWcuanMnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9tb2R1bGVzL2xvYWRlci9pbmRleC5qcyc7XG5cbmNsYXNzIFNjZW5lQmFzZSB7XG5cbiAgY29uc3RydWN0b3IoZG9tSUQpIHtcblxuICAgIHRoaXMuX2lkID0gZG9tSUQ7XG4gICAgdGhpcy5fJGRvbSA9ICQoZG9tSUQpO1xuXG4gICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG5cbiAgICBkZWJ1Zy5sb2cuc2NlbmUoJ0luaXRpYWxpemluZycsIHRoaXMuX2lkLCAnLi4uJyk7XG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuXG4gIH1cblxuICBfaW5pdGlhbGl6ZSgpIHt9XG5cbiAgX2V2ZW50RW50ZXIoKSB7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgfVxuXG4gIF9ldmVudExlYXZlKCkge1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIH1cblxuICBfZXZlbnRTaG93bigpIHt9XG5cbiAgX3Nob3coKSB7XG5cbiAgICB0aGlzLl9pc1Nob3cgPSB0cnVlO1xuXG4gIH1cblxuICBfaGlkZSgpIHtcblxuICAgIHRoaXMuX2lzU2hvdyA9IGZhbHNlO1xuXG4gIH1cblxuICBlbnRlcigpIHtcblxuICAgIGlmICh0aGlzLl9pc1Nob3cpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgZGVidWcubG9nLnNjZW5lKCdlbnRlcmluZycsIHRoaXMuX2lkKTtcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBwcm9taXNlRW50ZXIgPSB0aGlzLl9ldmVudEVudGVyKCk7XG5cbiAgICBwcm9taXNlRW50ZXIudGhlbihmdW5jdGlvbigpIHtcblxuICAgICAgc2VsZi5fc2hvdygpO1xuICAgICAgc2VsZi5fJGRvbVxuICAgICAgICAuYWRkQ2xhc3MoJ2VudGVyIHNob3cnKTtcblxuICAgICAgc2VsZi5fZXZlbnRTaG93bigpO1xuXG4gICAgICBzZWxmLl8kZG9tXG4gICAgICAgIC5kZWxheShDb25maWcuc2NlbmUuZHVyYXRpb24pXG4gICAgICAgIC5xdWV1ZShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnZW50ZXInKVxuICAgICAgICAgICAgLmRlcXVldWUoKTtcblxuICAgICAgICAgIGRlYnVnLmxvZy5zY2VuZSgnZW50ZXJlZCcsIHNlbGYuX2lkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2VFbnRlcjtcblxuICB9XG5cbiAgbGVhdmUoY2FsbGJhY2spIHtcblxuICAgIGlmICghdGhpcy5faXNTaG93KSB7XG5cbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIGRlYnVnLmxvZy5zY2VuZSgnbGVhdmluZycsIHRoaXMuX2lkKTtcblxuICAgIExvYWRlci5zaG93KCk7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgcHJvbWlzZUxlYXZlID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIHRoaXMuX2V2ZW50TGVhdmUoKSxcbiAgICAgICAgICB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgPyBjYWxsYmFjaygpIDogUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgXSk7XG5cbiAgICBwcm9taXNlTGVhdmUudGhlbihmdW5jdGlvbigpIHtcblxuICAgICAgTG9hZGVyLmhpZGUoKTtcblxuICAgICAgc2VsZi5fJGRvbVxuICAgICAgICAuYWRkQ2xhc3MoJ2xlYXZlJylcbiAgICAgICAgLmRlbGF5KENvbmZpZy5zY2VuZS5kdXJhdGlvbilcbiAgICAgICAgLnF1ZXVlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdsZWF2ZSBzaG93JylcbiAgICAgICAgICAgIC5kZXF1ZXVlKCk7XG5cbiAgICAgICAgICBzZWxmLl9oaWRlKCk7XG5cbiAgICAgICAgICBkZWJ1Zy5sb2cuc2NlbmUoJ2xlZnQnLCBzZWxmLl9pZCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlTGVhdmU7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lQmFzZTsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgU2NlbmVCYXNlIGZyb20gJy4vc2NlbmUtYmFzZS5qcyc7XG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL3NjZW5lLWxvYWRpbmcuanMnO1xuXG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vbW9kZWxzL3dvcmxkL3dvcmxkLmpzJztcblxuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi4vbW9kdWxlcy9jYW52YXMvY2FudmFzLXByZXZpZXcuanMnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9tb2R1bGVzL2NhbnZhcy9jYW52YXMtZWRpdG9yLmpzJztcblxuaW1wb3J0IEJveFNlbGVjdG9yIGZyb20gJy4uL21vZHVsZXMvYm94LXNlbGVjdG9yL2luZGV4LmpzJztcblxudmFyIHdvcmxkID0gV29ybGQuZ2V0SW5zdGFuY2UoKTtcblxuY2xhc3MgU2NlbmVHYW1lIGV4dGVuZHMgU2NlbmVCYXNlIHtcblxuICBfaW5pdGlhbGl6ZSgpIHtcblxuICAgIHRoaXMuXyRxdWl0QnV0dG9uID0gJChDb25maWcuaHRtbC5nYW1lLnF1aXRCdXR0b24pO1xuICAgIHRoaXMuXyR2aWV3Q2hhbmdlQnV0dG9uID0gJChDb25maWcuaHRtbC5nYW1lLnZpZXdDaGFuZ2VCdXR0b24pO1xuXG4gIH1cblxuICBfZXZlbnRFbnRlcigpIHtcblxuICAgIC8qKlxuICAgICAqIDEuIHJlc2V0IGFsbCBkYXRhIGluIHZpZXdcbiAgICAgKiAyLiBsb2FkIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICAgKiAzLiBzZXQgYWxsIGRhdGEgaW4gdmlld1xuICAgICAqIDQuIGluaXRpYWxpemUgY2FudmFzXG4gICAgICogNS4gZW5hYmxlIGFjdGlvbnNcbiAgICAgKi9cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuXyRxdWl0QnV0dG9uLm9uZSgnY2xpY2snLCBzZWxmLmxlYXZlLmJpbmQoc2VsZiwgbG9hZGluZy5lbnRlci5iaW5kKGxvYWRpbmcpKSk7XG5cbiAgICB0aGlzLl8kdmlld0NoYW5nZUJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblxuICAgICAgZGVidWcubG9nLmdhbWUoJ3ZpZXctY2hhbmdlJyk7XG5cbiAgICAgIHdvcmxkLmNoYW5nZVZpZXcoKTtcbiAgICAgIHNlbGYuX3ByZXZpZXcuc2V0TGluZSgpO1xuICAgICAgc2VsZi5fZWRpdG9yLnNldENhbWVyYSgpO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuXG4gICAgICAvL3NlbGYuX3Jlc2V0KCk7XG4gICAgICAvL3NlbGYuX2dldERhdGEoKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgLy9zZWxmLl9zZXREYXRhKGRhdGEpO1xuICAgICAgc2VsZi5fcHJldmlldyA9IG5ldyBQcmV2aWV3KCk7XG4gICAgICBzZWxmLl9lZGl0b3IgPSBuZXcgRWRpdG9yKCk7XG4gICAgICAvL3NlbGYuX2VuYWJsZUFjdGlvbnMoKTtcbiAgICAgIC8vfSk7XG5cbiAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgX2V2ZW50U2hvd24oKSB7XG5cbiAgICB0aGlzLl9wcmV2aWV3LnJlc2l6ZSgpO1xuICAgIHRoaXMuX2VkaXRvci5yZXNpemUoKTtcblxuICB9XG5cbiAgX2V2ZW50TGVhdmUoKSB7XG5cbiAgICB0aGlzLl8kcXVpdEJ1dHRvbi5vZmYoJ2NsaWNrJyk7XG5cbiAgICB0aGlzLl9wcmV2aWV3LmRlc3Ryb3koKTtcbiAgICB0aGlzLl9lZGl0b3IuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5fcHJldmlldyA9IG51bGw7XG4gICAgdGhpcy5fZWRpdG9yID0gbnVsbDtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNjZW5lR2FtZShDb25maWcuaHRtbC5zY2VuZS5nYW1lKTsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgU2NlbmVCYXNlIGZyb20gJy4vc2NlbmUtYmFzZS5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuLi9zY2VuZXMvc2NlbmUtZ2FtZS5qcyc7XG5cbmNsYXNzIFNjZW5lTG9hZGluZyBleHRlbmRzIFNjZW5lQmFzZSB7XG5cbiAgX2luaXRpYWxpemUoKSB7XG5cbiAgICB0aGlzLl8kcGxheUJ1dHRvbiA9ICQoQ29uZmlnLmh0bWwubG9hZGluZy5wbGF5QnV0dG9uKTtcblxuICB9XG5cbiAgX2V2ZW50RW50ZXIoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLl8kcGxheUJ1dHRvbi5vbmUoJ2NsaWNrJywgc2VsZi5sZWF2ZS5iaW5kKHNlbGYsIGdhbWUuZW50ZXIuYmluZChnYW1lKSkpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIH1cblxuICBfZXZlbnRMZWF2ZSgpIHtcblxuICAgIHRoaXMuXyRwbGF5QnV0dG9uLm9mZignY2xpY2snKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNjZW5lTG9hZGluZyhDb25maWcuaHRtbC5zY2VuZS5sb2FkaW5nKTsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgU2NlbmVCYXNlIGZyb20gJy4vc2NlbmUtYmFzZS5qcyc7XG5cbmNsYXNzIFNjZW5lUmVzdWx0IGV4dGVuZHMgU2NlbmVCYXNlIHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVSZXN1bHQoQ29uZmlnLmh0bWwuc2NlbmUucmVzdWx0KTsiLCJ2YXIgYnJvYWRjYXN0ID0gbnVsbDtcblxuY2xhc3MgQnJvYWRjYXN0IHtcblxuICBzdGF0aWMgZ2V0IEJMT0NLX0hPVkVSX0FERCgpIHsgcmV0dXJuICdCTE9DS19IT1ZFUl9BREQnOyB9XG4gIHN0YXRpYyBnZXQgQkxPQ0tfSE9WRVJfUkVNT1ZFKCkgeyByZXR1cm4gJ0JMT0NLX0hPVkVSX1JFTU9WRSc7IH1cbiAgc3RhdGljIGdldEluc3RhbmNlKCkgeyByZXR1cm4gYnJvYWRjYXN0OyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9mdW5jdGlvbnMgPSB7fTtcblxuICB9XG5cbiAgcmVnaXN0ZXIoYnJvYWRjYXN0VHlwZSwgZm4pIHtcblxuICAgIGlmICghdGhpcy5fZnVuY3Rpb25zLmhhc093blByb3BlcnR5KGJyb2FkY2FzdFR5cGUpKSB7XG5cbiAgICAgIHRoaXMuX2Z1bmN0aW9uc1ticm9hZGNhc3RUeXBlXSA9IFtdO1xuXG4gICAgfVxuXG4gICAgdGhpcy5fZnVuY3Rpb25zW2Jyb2FkY2FzdFR5cGVdLnB1c2goZm4pO1xuXG4gIH1cblxuICBleGVjdXRlKGJyb2FkY2FzdFR5cGUsIGFyZ3MgPSBbXSkge1xuXG4gICAgaWYgKHRoaXMuX2Z1bmN0aW9ucy5oYXNPd25Qcm9wZXJ0eShicm9hZGNhc3RUeXBlKSkge1xuXG4gICAgICB0aGlzLl9mdW5jdGlvbnNbYnJvYWRjYXN0VHlwZV0uZm9yRWFjaChmdW5jdGlvbihmbikge1xuXG4gICAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbi5hcHBseShmbiwgYXJncyk7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5icm9hZGNhc3QgPSBuZXcgQnJvYWRjYXN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJyb2FkY2FzdDtcbiJdfQ==
