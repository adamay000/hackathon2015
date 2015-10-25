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
  },
  connection: {
    host: 'localhost',
    port: '8902'
  }
};

exports['default'] = Config;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Event = (function () {
  function Event() {
    _classCallCheck(this, Event);
  }

  _createClass(Event, null, [{
    key: 'BLOCK_HOVER_ON',
    get: function get() {
      return 'BLOCK_HOVER_ON';
    }
  }, {
    key: 'BLOCK_HOVER_OFF',
    get: function get() {
      return 'BLOCK_HOVER_OFF';
    }
  }]);

  return Event;
})();

exports['default'] = Event;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var Connection = (function () {
  function Connection() {
    _classCallCheck(this, Connection);

    this._socket = null;
  }

  _createClass(Connection, [{
    key: 'connect',
    value: function connect() {

      if (this._socket === null) {

        this._socket = io(_configJs2['default'].host + ':' + _configJs2['default'].port);
      }
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {

      if (this._socket !== null) {

        this._socket.close();
        this._socket = null;
      }
    }
  }]);

  return Connection;
})();

exports['default'] = new Connection();
module.exports = exports['default'];

},{"../config.js":1}],4:[function(require,module,exports){
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

  _scenesSceneLoadingJs2['default'].enter();
  //game.enter();

  (function () {
    var script = document.createElement('script');script.onload = function () {
      var stats = new Stats();stats.domElement.style.cssText = 'position:fixed;left:0;top:0;z-index:10000';document.body.appendChild(stats.domElement);requestAnimationFrame(function loop() {
        stats.update();requestAnimationFrame(loop);
      });
    };script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);
  })();
};

new Main();

},{"./scenes/scene-game.js":17,"./scenes/scene-loading.js":18,"./scenes/scene-result.js":19}],5:[function(require,module,exports){
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

},{"./block.js":7}],6:[function(require,module,exports){
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

},{"./block.js":7}],7:[function(require,module,exports){
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

    this.placedBy = null;

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

},{"../../config.js":1}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

var world = null;

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
  }]);

  function World() {
    _classCallCheck(this, World);

    this._data = [];
    this._resetEvents();

    this.reset();
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

},{"../../config.js":1,"../block/block-core.js":5}],10:[function(require,module,exports){
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

},{"../../config.js":1,"../../models/draw-settings/draw-settings.js":8}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var _eventJs = require('../../event.js');

var _eventJs2 = _interopRequireDefault(_eventJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _canvasMeshesJs = require('./canvas-meshes.js');

var _canvasMeshesJs2 = _interopRequireDefault(_canvasMeshesJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    id = 0,
    $window = $(window),
    $document = $(document);

var CanvasBase = (function () {
  _createClass(CanvasBase, [{
    key: '_setDom',
    value: function _setDom() {

      this._$dom = $();
    }
  }, {
    key: '_createCamera',
    value: function _createCamera() {

      this._camera = new THREE.PerspectiveCamera(60);
    }
  }, {
    key: '_initialize',
    value: function _initialize() {}
  }]);

  function CanvasBase() {
    _classCallCheck(this, CanvasBase);

    this.id = ++id;

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

    this._createCamera();

    this.resize();

    this._clock = new THREE.Clock();

    world.on(_modelsWorldWorldJs2['default'].EVENT_SETBLOCK, this._eventSetBlockDefault.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_REMOVEBLOCK, this._eventRemoveBlockDefault.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_RESET, this._eventResetDefault.bind(this));

    world.on(_modelsWorldWorldJs2['default'].EVENT_SETBLOCK, this._eventSetBlock.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_REMOVEBLOCK, this._eventRemoveBlock.bind(this));
    world.on(_modelsWorldWorldJs2['default'].EVENT_RESET, this._eventReset.bind(this));

    this._$dom.on('mousemove.mousemove' + this.id, this._eventHover.bind(this));
    this._$dom.on('click.click' + this.id, this._eventClick.bind(this));
    this._$dom.on('contextmenu.contextmenu' + this.id, this._eventRightClick.bind(this));
    $window.on('resize.resize' + this.id, this.resize.bind(this));

    $document.on(_eventJs2['default'].BLOCK_HOVER_ON + '.' + _eventJs2['default'].BLOCK_HOVER_ON + this.id, this._addHoverEffect.bind(this));
    $document.on(_eventJs2['default'].BLOCK_HOVER_OFF + '.' + _eventJs2['default'].BLOCK_HOVER_OFF + this.id, this._removeHoverEffect.bind(this));

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

      if (this._camera.aspect) {

        this._camera.aspect = this._width / this._height;
      }

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

      world.off();

      this._$dom.off('mousemove.mousemove' + this.id);
      this._$dom.off('click.click' + this.id);
      this._$dom.off('contextmenu.contextmenu' + this.id);
      $window.off('resize.resize' + this.id);

      $window.off(_eventJs2['default'].BLOCK_HOVER_ON + '.' + _eventJs2['default'].BLOCK_HOVER_ON + this.id);
      $window.off(_eventJs2['default'].BLOCK_HOVER_OFF + '.' + _eventJs2['default'].BLOCK_HOVER_OFF + this.id);

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

},{"../../config.js":1,"../../event.js":2,"../../models/world/world.js":9,"./canvas-meshes.js":13}],12:[function(require,module,exports){
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

var _eventJs = require('../../event.js');

var _eventJs2 = _interopRequireDefault(_eventJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _canvasBaseJs = require('./canvas-base.js');

var _canvasBaseJs2 = _interopRequireDefault(_canvasBaseJs);

var _modelsDrawSettingsDrawSettingsJs = require('../../models/draw-settings/draw-settings.js');

var _modelsDrawSettingsDrawSettingsJs2 = _interopRequireDefault(_modelsDrawSettingsDrawSettingsJs);

var _modelsBlockBlockMonoJs = require('../../models/block/block-mono.js');

var _modelsBlockBlockMonoJs2 = _interopRequireDefault(_modelsBlockBlockMonoJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    drawSettings = _modelsDrawSettingsDrawSettingsJs2['default'].getInstance(),
    $document = $(document);

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
    key: '_createCamera',
    value: function _createCamera() {

      _get(Object.getPrototypeOf(Preview.prototype), '_createCamera', this).call(this);

      this._camera.position.x = 0;
      this._camera.position.y = 0;
      this._camera.position.z = 1000;
      this._camera.lookAt(this._zero);

      this._controls = new THREE.TrackballControls(this._camera, this._renderer.domElement);
      this._controls.noPan = true;
      this._controls.rotateSpeed = 10;

      console.log(this._controls);
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

      this._controls.update();

      this.render();
    }
  }, {
    key: '_eventClick',
    value: function _eventClick(event) {

      var interacts = this._getInteracts(event.offsetX, event.offsetY);

      if (interacts.length) {

        var mesh = interacts[0].object,
            direction = interacts[0].face.normal,
            block = this._meshes.getBlockByMeshId(mesh.uuid);

        world.setBlock(new _modelsBlockBlockMonoJs2['default'](block.x + direction.x, block.y + direction.y, block.z + direction.z, drawSettings.color, drawSettings.borderColor));
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

          $document.trigger(_eventJs2['default'].BLOCK_HOVER_OFF);
          $document.trigger(_eventJs2['default'].BLOCK_HOVER_ON, [blockId]);
        }

        return;
      }

      $document.trigger(_eventJs2['default'].BLOCK_HOVER_OFF);
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
    value: function _addHoverEffect(event, blockId) {

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

      this._controls.minDistance = this._cameraDistance * 0.2;
      this._controls.maxDistance = this._cameraDistance * 2;

      this._controls.handleResize();
    }
  }, {
    key: 'destroy',
    value: function destroy() {

      _get(Object.getPrototypeOf(Preview.prototype), 'destroy', this).call(this);

      this._controls.dispose();
      this._controls = null;
    }
  }]);

  return Preview;
})(_canvasBaseJs2['default']);

exports['default'] = Preview;
module.exports = exports['default'];

},{"../../config.js":1,"../../event.js":2,"../../models/block/block-mono.js":6,"../../models/draw-settings/draw-settings.js":8,"../../models/world/world.js":9,"./canvas-base.js":11}],13:[function(require,module,exports){
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

},{"../../config.js":1}],14:[function(require,module,exports){
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

var _eventJs = require('../../event.js');

var _eventJs2 = _interopRequireDefault(_eventJs);

var _modelsWorldWorldJs = require('../../models/world/world.js');

var _modelsWorldWorldJs2 = _interopRequireDefault(_modelsWorldWorldJs);

var _canvasBaseJs = require('./canvas-base.js');

var _canvasBaseJs2 = _interopRequireDefault(_canvasBaseJs);

var world = _modelsWorldWorldJs2['default'].getInstance(),
    $document = $(document);

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
    key: '_createCamera',
    value: function _createCamera() {

      this._camera = new THREE.OrthographicCamera();
    }
  }, {
    key: '_initialize',
    value: function _initialize() {

      debug.log.preview('initializing preview ...');

      this._isFlat = _configJs2['default'].game.preview.isFlat;

      this._raycaster = new THREE.Raycaster();

      this._hovered = null;

      this._setLight();

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

          $document.trigger(_eventJs2['default'].BLOCK_HOVER_OFF);
          $document.trigger(_eventJs2['default'].BLOCK_HOVER_ON, [blockId]);
        }

        return;
      }

      $document.trigger(_eventJs2['default'].BLOCK_HOVER_OFF);
    }
  }, {
    key: '_addHoverEffect',
    value: function _addHoverEffect(event, blockId) {

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
  }]);

  return Preview;
})(_canvasBaseJs2['default']);

exports['default'] = Preview;
module.exports = exports['default'];

},{"../../config.js":1,"../../event.js":2,"../../models/world/world.js":9,"./canvas-base.js":11}],15:[function(require,module,exports){
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

},{"../../config.js":1}],16:[function(require,module,exports){
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

},{"../config.js":1,"../modules/loader/index.js":15}],17:[function(require,module,exports){
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

},{"../config.js":1,"../models/world/world.js":9,"../modules/box-selector/index.js":10,"../modules/canvas/canvas-editor.js":12,"../modules/canvas/canvas-preview.js":14,"./scene-base.js":16,"./scene-loading.js":18}],18:[function(require,module,exports){
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

var _handlersConnectionJs = require('../handlers/connection.js');

var _handlersConnectionJs2 = _interopRequireDefault(_handlersConnectionJs);

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

},{"../config.js":1,"../handlers/connection.js":3,"../scenes/scene-game.js":17,"./scene-base.js":16}],19:[function(require,module,exports){
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

},{"../config.js":1,"./scene-base.js":16}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvY29uZmlnLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL2V2ZW50LmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL2hhbmRsZXJzL2Nvbm5lY3Rpb24uanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvaW5kZXguanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kZWxzL2Jsb2NrL2Jsb2NrLWNvcmUuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kZWxzL2Jsb2NrL2Jsb2NrLW1vbm8uanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kZWxzL2Jsb2NrL2Jsb2NrLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZGVscy9kcmF3LXNldHRpbmdzL2RyYXctc2V0dGluZ3MuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kZWxzL3dvcmxkL3dvcmxkLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZHVsZXMvYm94LXNlbGVjdG9yL2luZGV4LmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZHVsZXMvY2FudmFzL2NhbnZhcy1iYXNlLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZHVsZXMvY2FudmFzL2NhbnZhcy1lZGl0b3IuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvbW9kdWxlcy9jYW52YXMvY2FudmFzLW1lc2hlcy5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2R1bGVzL2NhbnZhcy9jYW52YXMtcHJldmlldy5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9tb2R1bGVzL2xvYWRlci9pbmRleC5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9zY2VuZXMvc2NlbmUtYmFzZS5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9zY2VuZXMvc2NlbmUtZ2FtZS5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9zY2VuZXMvc2NlbmUtbG9hZGluZy5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9zY2VuZXMvc2NlbmUtcmVzdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxJQUFJLE1BQU0sR0FBRztBQUNYLE1BQUksRUFBRTtBQUNKLFNBQUssRUFBRTtBQUNMLGFBQU8sRUFBRSxnQkFBZ0I7QUFDekIsVUFBSSxFQUFFLGFBQWE7QUFDbkIsWUFBTSxFQUFFLGVBQWU7S0FDeEI7QUFDRCxXQUFPLEVBQUU7QUFDUCxnQkFBVSxFQUFFLGFBQWE7S0FDMUI7QUFDRCxRQUFJLEVBQUU7QUFDSixhQUFPLEVBQUUsVUFBVTtBQUNuQixZQUFNLEVBQUUsU0FBUztBQUNqQixnQkFBVSxFQUFFLFlBQVk7QUFDeEIsc0JBQWdCLEVBQUUsZUFBZTtBQUNqQyxpQkFBVyxFQUFFLGVBQWU7S0FDN0I7QUFDRCxVQUFNLEVBQUUsU0FBUztHQUNsQjtBQUNELE9BQUssRUFBRTtBQUNMLFlBQVEsRUFBRSxHQUFHO0dBQ2Q7QUFDRCxNQUFJLEVBQUU7QUFDSixlQUFXLEVBQUUsRUFBRTtBQUNmLFdBQU8sRUFBRTtBQUNQLGdCQUFVLEVBQUUs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QVcsR0FFRDt3QkFGVixXQUFXOztBQUliLE1BQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRTdDLE1BQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsTUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDeEIsTUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7O0FBRTlCLE1BQUksSUFBSSxHQUFHLElBQUk7TUFDWCxNQUFNLEdBQUcsQ0FDVCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUM1QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNB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QUFDO0tBRXZEOzs7V0FFVSx1QkFBRzs7QUFFWixVQUFJLElBQUksR0FBRyxJQUFJLENBQUM7O0FBRWhCLFVBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsK0JBQUssS0FBSyxDQUFDLElBQUksZ0NBQU0sQ0FBQyxDQUFDLENBQUM7O0FBSTdFLGFBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBRTFCOzs7V0FFVSx1QkFBRzs7QUFFWixVQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFL0IsYUFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7S0FFMUI7OztTQTFCRyxZQUFZOzs7cUJBOEJILElBQUksWUFBWSxDQUFDLHNCQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDbkN2QyxjQUFjOzs7OzJCQUNYLGlCQUFpQjs7OztJQUVqQyxXQUFXO1lBQVgsV0FBVzs7V0FBWCxXQUFXOzBCQUFYLFdBQVc7OytCQUFYLFdBQVc7OztTQUFYLFdBQVc7OztxQkFJRixJQUFJLFdBQVcsQ0FBQyxzQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQ29uZmlnID0ge1xuICBodG1sOiB7XG4gICAgc2NlbmU6IHtcbiAgICAgIGxvYWRpbmc6ICcjc2NlbmUtbG9hZGluZycsXG4gICAgICBnYW1lOiAnI3NjZW5lLWdhbWUnLFxuICAgICAgcmVzdWx0OiAnI3NjZW5lLXJlc3VsdCdcbiAgICB9LFxuICAgIGxvYWRpbmc6IHtcbiAgICAgIHBsYXlCdXR0b246ICcjc3RhcnQtcGxheSdcbiAgICB9LFxuICAgIGdhbWU6IHtcbiAgICAgIHByZXZpZXc6ICcjcHJldmlldycsXG4gICAgICBlZGl0b3I6ICcjZWRpdG9yJyxcbiAgICAgIHF1aXRCdXR0b246ICcjZ2FtZS1xdWl0JyxcbiAgICAgIHZpZXdDaGFuZ2VCdXR0b246ICcjdmlldy1jaGFuZ2VyJyxcbiAgICAgIGJveFNlbGVjdG9yOiAnI2JveC1zZWxlY3RvcidcbiAgICB9LFxuICAgIGxvYWRlcjogJyNsb2FkZXInXG4gIH0sXG4gIHNjZW5lOiB7XG4gICAgZHVyYXRpb246IDUwMFxuICB9LFxuICBnYW1lOiB7XG4gICAgdGV4dHVyZVNpemU6IDMzLFxuICAgIHByZXZpZXc6IHtcbiAgICAgIHNob3dCb3JkZXI6IHRydWUsXG4gICAgICBpc0ZsYXQ6IGZhbHNlLFxuICAgICAgcm90YXRpb25TcGVlZDogMTUgKiAxMDAwLFxuICAgICAgcm90YXRpb25TcGVlZFk6IDMwICogMTAwMFxuICAgIH1cbiAgfSxcbiAgd29ybGQ6IHtcbiAgICBzaXplOiAzMlxuICB9LFxuICBjb25uZWN0aW9uOiB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogJzg5MDInXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZzsiLCJjbGFzcyBFdmVudCB7XG5cbiAgc3RhdGljIGdldCBCTE9DS19IT1ZFUl9PTigpIHtcbiAgICByZXR1cm4gJ0JMT0NLX0hPVkVSX09OJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgQkxPQ0tfSE9WRVJfT0ZGKCkge1xuICAgIHJldHVybiAnQkxPQ0tfSE9WRVJfT0ZGJztcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50OyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJztcblxuY2xhc3MgQ29ubmVjdGlvbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9zb2NrZXQgPSBudWxsO1xuXG4gIH1cblxuICBjb25uZWN0KCkge1xuXG4gICAgaWYgKHRoaXMuX3NvY2tldCA9PT0gbnVsbCkge1xuXG4gICAgICB0aGlzLl9zb2NrZXQgPSBpbyhgJHtDb25maWcuaG9zdH06JHtDb25maWcucG9ydH1gKTtcblxuICAgIH1cblxuICB9XG5cbiAgZGlzY29ubmVjdCgpIHtcblxuICAgIGlmICh0aGlzLl9zb2NrZXQgIT09IG51bGwpIHtcblxuICAgICAgdGhpcy5fc29ja2V0LmNsb3NlKCk7XG4gICAgICB0aGlzLl9zb2NrZXQgPSBudWxsO1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29ubmVjdGlvbigpO1xuIiwiaW1wb3J0IGxvYWRpbmcgZnJvbSAnLi9zY2VuZXMvc2NlbmUtbG9hZGluZy5qcyc7XG5pbXBvcnQgZ2FtZSAgICBmcm9tICcuL3NjZW5lcy9zY2VuZS1nYW1lLmpzJztcbmltcG9ydCByZXN1bHQgIGZyb20gJy4vc2NlbmVzL3NjZW5lLXJlc3VsdC5qcyc7XG5cbmNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgbG9hZGluZy5lbnRlcigpO1xuICAgIC8vZ2FtZS5lbnRlcigpO1xuXG4gICAgKGZ1bmN0aW9uKCl7dmFyIHNjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtzY3JpcHQub25sb2FkPWZ1bmN0aW9uKCl7dmFyIHN0YXRzPW5ldyBTdGF0cygpO3N0YXRzLmRvbUVsZW1lbnQuc3R5bGUuY3NzVGV4dD0ncG9zaXRpb246Zml4ZWQ7bGVmdDowO3RvcDowO3otaW5kZXg6MTAwMDAnO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHMuZG9tRWxlbWVudCk7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGxvb3AoKXtzdGF0cy51cGRhdGUoKTtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCl9KTt9O3NjcmlwdC5zcmM9Jy8vcmF3Z2l0LmNvbS9tcmRvb2Ivc3RhdHMuanMvbWFzdGVyL2J1aWxkL3N0YXRzLm1pbi5qcyc7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO30pKClcblxuICB9XG5cbn1cblxubmV3IE1haW4oKTtcbiIsImltcG9ydCBCbG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuY2xhc3MgQmxvY2tDb3JlIGV4dGVuZHMgQmxvY2sge1xuXG4gIF9pbml0aWFsaXplKCkge1xuXG4gICAgdGhpcy50eXBlID0gQmxvY2suQkxPQ0tfQ09SRTtcblxuICAgIHRoaXMuYnJlYWthYmxlID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldENvbG9yKDB4NDA0MDQwKTtcbiAgICB0aGlzLnNldEJvcmRlckNvbG9yKDB4ODA4MDgwKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tDb3JlOyIsImltcG9ydCBCbG9jayBmcm9tICcuL2Jsb2NrLmpzJztcblxuY2xhc3MgQmxvY2tNb25vIGV4dGVuZHMgQmxvY2sge1xuXG4gIF9pbml0aWFsaXplKCkge1xuXG4gICAgdGhpcy50eXBlID0gQmxvY2suQkxPQ0tfTU9OTztcblxuICB9XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgeiwgY29sb3IsIGJvcmRlckNvbG9yKSB7XG5cbiAgICBzdXBlcih4LCB5LCB6KTtcblxuICAgIHRoaXMuc2V0Q29sb3IoY29sb3IpO1xuICAgIHRoaXMuc2V0Qm9yZGVyQ29sb3IoYm9yZGVyQ29sb3IpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja01vbm87IiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG52YXIgaWQgPSAwO1xuXG5jbGFzcyBCbG9jayB7XG5cbiAgc3RhdGljIGdldCBCTE9DS19CQVNFKCkgeyByZXR1cm4gJ0JMT0NLX0JBU0UnOyB9XG4gIHN0YXRpYyBnZXQgQkxPQ0tfQ09SRSgpIHsgcmV0dXJuICdCTE9DS19DT1JFJzsgfVxuICBzdGF0aWMgZ2V0IEJMT0NLX01PTk8oKSB7IHJldHVybiAnQkxPQ0tfTU9OTyc7IH1cblxuICBfaW5pdGlhbGl6ZSgpIHt9XG5cbiAgY29uc3RydWN0b3IoeCwgeSwgeikge1xuXG4gICAgdGhpcy5pZCA9ICsraWQ7XG5cbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy56ID0gejtcblxuICAgIHRoaXMudHlwZSA9IEJsb2NrLkJMT0NLX0JBU0U7XG5cbiAgICB0aGlzLmJyZWFrYWJsZSA9IHRydWU7XG5cbiAgICB0aGlzLnBsYWNlZEJ5ID0gbnVsbDtcblxuICAgIHRoaXMuY29sb3IgPSAweDAwMDAwMDtcbiAgICB0aGlzLmJvcmRlckNvbG9yID0gMHhmZmZmZmY7XG5cbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG5cbiAgfVxuXG4gIHNldENvbG9yKGNvbG9yKSB7XG5cbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG5cbiAgfVxuXG4gIHNldEJvcmRlckNvbG9yKGNvbG9yKSB7XG5cbiAgICB0aGlzLmJvcmRlckNvbG9yID0gY29sb3I7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrOyIsInZhciBkcmF3U2V0dGluZ3MgPSBudWxsO1xuXG5jbGFzcyBEcmF3U2V0dGluZ3Mge1xuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHsgcmV0dXJuIGRyYXdTZXR0aW5nczsgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5jb2xvciA9IDB4ZmZmZmZmO1xuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSAweDgwODA4MDtcblxuICB9XG5cbiAgc2V0Q29sb3IoY29sb3IpIHtcblxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcblxuICB9XG5cbiAgc2V0Qm9yZGVyQ29sb3IoYm9yZGVyQ29sb3IpIHtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcblxuICB9XG5cbn1cblxuZHJhd1NldHRpbmdzID0gbmV3IERyYXdTZXR0aW5ncygpO1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3U2V0dGluZ3M7IiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuaW1wb3J0IEJsb2NrQ29yZSBmcm9tICcuLi9ibG9jay9ibG9jay1jb3JlLmpzJztcblxudmFyIHdvcmxkID0gbnVsbDtcblxuY2xhc3MgV29ybGQge1xuXG4gIHN0YXRpYyBnZXQgRVZFTlRfU0VUQkxPQ0soKSB7IHJldHVybiAnRVZFTlRfU0VUQkxPQ0snOyB9XG4gIHN0YXRpYyBnZXQgRVZFTlRfUkVNT1ZFQkxPQ0soKSB7IHJldHVybiAnRVZFTlRfUkVNT1ZFQkxPQ0snOyB9XG4gIHN0YXRpYyBnZXQgRVZFTlRfUkVTRVQoKSB7IHJldHVybiAnRVZFTlRfUkVTRVQnOyB9XG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHsgcmV0dXJuIHdvcmxkOyB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9kYXRhID0gW107XG4gICAgdGhpcy5fcmVzZXRFdmVudHMoKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICB9XG5cbiAgX3Jlc2V0RXZlbnRzKCkge1xuXG4gICAgdGhpcy5fZXZlbnRzID0ge1xuICAgICAgRVZFTlRfU0VUQkxPQ0s6IFtdLFxuICAgICAgRVZFTlRfUkVNT1ZFQkxPQ0s6IFtdLFxuICAgICAgRVZFTlRfUkVTRVQ6IFtdXG4gICAgfTtcblxuICB9XG5cbiAgcmVzZXQoKSB7XG5cbiAgICBkZWJ1Zy5sb2cud29ybGQoJ3Jlc2V0Jyk7XG5cbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IENvbmZpZy53b3JsZC5zaXplOyB4KyspIHtcbiAgICAgIHRoaXMuX2RhdGFbeF0gPSBbXTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgQ29uZmlnLndvcmxkLnNpemU7IHkrKykge1xuICAgICAgICB0aGlzLl9kYXRhW3hdW3ldID0gW107XG4gICAgICAgIGZvciAobGV0IHogPSAwOyB6IDwgQ29uZmlnLndvcmxkLnNpemU7IHorKykge1xuICAgICAgICAgIHRoaXMuX2RhdGFbeF1beV1bel0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0Q29yZUJsb2NrKCk7XG5cbiAgICB0aGlzLl9leGVjdXRlKFdvcmxkLkVWRU5UX1JFU0VUKTtcblxuICB9XG5cbiAgX3NldENvcmVCbG9jaygpIHtcblxuICAgIHZhciBoYWxmID0gQ29uZmlnLndvcmxkLnNpemUgLyAyIDw8IDA7XG5cbiAgICB0aGlzLl9kYXRhW2hhbGZdW2hhbGZdW2hhbGZdID0gbmV3IEJsb2NrQ29yZShoYWxmLCBoYWxmLCBoYWxmKTtcblxuICB9XG5cbiAgc2V0QmxvY2soYmxvY2spIHtcblxuICAgIGlmIChcbiAgICAgIGJsb2NrLnggPCAwIHx8XG4gICAgICBDb25maWcud29ybGQuc2l6ZSA8PSBibG9jay54IHx8XG4gICAgICBibG9jay55IDwgMCB8fFxuICAgICAgQ29uZmlnLndvcmxkLnNpemUgPD0gYmxvY2sueSB8fFxuICAgICAgYmxvY2sueiA8IDAgfHxcbiAgICAgIENvbmZpZy53b3JsZC5zaXplIDw9IGJsb2NrLnpcbiAgICApIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdmFyIG9sZCA9IHRoaXMuZ2V0QmxvY2soYmxvY2sueCwgYmxvY2sueSwgYmxvY2sueik7XG5cbiAgICBpZiAob2xkICE9PSBudWxsKSB7XG5cbiAgICAgIHRoaXMucmVtb3ZlQmxvY2sob2xkKTtcblxuICAgIH1cblxuICAgIGRlYnVnLmxvZy53b3JsZChgc2V0QmxvY2soJHtibG9jay54fSwgJHtibG9jay55fSwgJHtibG9jay56fSk6YCwgb2xkLCBibG9jayk7XG5cbiAgICB0aGlzLl9kYXRhW2Jsb2NrLnhdW2Jsb2NrLnldW2Jsb2NrLnpdID0gYmxvY2s7XG5cbiAgICB0aGlzLl9leGVjdXRlKFdvcmxkLkVWRU5UX1NFVEJMT0NLLCBbb2xkLCBibG9ja10pO1xuXG4gIH1cblxuICBnZXRCbG9jayh4LCB5LCB6KSB7XG5cbiAgICByZXR1cm4gdGhpcy5fZGF0YVt4XVt5XVt6XTtcblxuICB9XG5cbiAgZ2V0QmxvY2tzKCkge1xuXG4gICAgdmFyIGJsb2NrcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBDb25maWcud29ybGQuc2l6ZTsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IENvbmZpZy53b3JsZC5zaXplOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeiA9IDA7IHogPCBDb25maWcud29ybGQuc2l6ZTsgeisrKSB7XG5cbiAgICAgICAgICB0aGlzLl9kYXRhW3hdW3ldW3pdICE9PSBudWxsICYmIGJsb2Nrcy5wdXNoKHRoaXMuX2RhdGFbeF1beV1bel0pO1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2tzO1xuXG4gIH1cblxuICByZW1vdmVCbG9jayhibG9jaykge1xuXG4gICAgaWYgKCFibG9jay5icmVha2FibGUpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdmFyIG9sZCA9IGJsb2NrO1xuXG4gICAgZGVidWcubG9nLndvcmxkKGByZW1vdmVCbG9jaygke2Jsb2NrLnh9LCAke2Jsb2NrLnl9LCAke2Jsb2NrLnp9KTpgLCBvbGQsIG51bGwpO1xuXG4gICAgdGhpcy5fZGF0YVtibG9jay54XVtibG9jay55XVtibG9jay56XSA9IG51bGw7XG5cbiAgICB0aGlzLl9leGVjdXRlKFdvcmxkLkVWRU5UX1JFTU9WRUJMT0NLLCBbb2xkLCBudWxsXSk7XG5cbiAgfVxuXG4gIG9uKGV2ZW50VHlwZSwgZm4pIHtcblxuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2ZW50VHlwZV0pIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50VHlwZV0ucHVzaChmbik7XG5cbiAgfVxuXG4gIG9mZigpIHtcblxuICAgIHRoaXMuX3Jlc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIF9leGVjdXRlKGV2ZW50VHlwZSwgYXJncyA9IFtdKSB7XG5cbiAgICB0aGlzLl9ldmVudHNbZXZlbnRUeXBlXS5mb3JFYWNoKGZ1bmN0aW9uKGZuKSB7XG5cbiAgICAgIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyAmJiBmbi5hcHBseSh3b3JsZCwgYXJncyk7XG5cbiAgICB9KTtcblxuICB9XG5cbn1cblxud29ybGQgPSBuZXcgV29ybGQoKTtcblxuZXhwb3J0IGRlZmF1bHQgV29ybGQ7IiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuaW1wb3J0IERyYXdTZXR0aW5ncyBmcm9tICcuLi8uLi9tb2RlbHMvZHJhdy1zZXR0aW5ncy9kcmF3LXNldHRpbmdzLmpzJztcblxudmFyIGRyYXdTZXR0aW5ncyA9IERyYXdTZXR0aW5ncy5nZXRJbnN0YW5jZSgpO1xuXG5jbGFzcyBCb3hTZWxlY3RvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl8kZG9tID0gJChDb25maWcuaHRtbC5nYW1lLmJveFNlbGVjdG9yKTtcblxuICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgdGhpcy5fY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgdGhpcy5fYm9yZGVyQ29sb3IgPSAnI2MwYzBjMCc7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICwgY29sb3JzID0gW1xuICAgICAgICB7IGNvbG9yOiAnI2ZmZmZmZicsIGJvcmRlckNvbG9yOiAnIzgwODA4MCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyM0MDQwNDAnLCBib3JkZXJDb2xvcjogJyM4MDgwODAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjODA4MDgwJywgYm9yZGVyQ29sb3I6ICcjYzBjMGMwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnI2MwYzBjMCcsIGJvcmRlckNvbG9yOiAnIzgwODA4MCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyNmZjAwMDAnLCBib3JkZXJDb2xvcjogJyM4MDAwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDBmZjAwJywgYm9yZGVyQ29sb3I6ICcjMDA4MDAwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzAwMDBmZicsIGJvcmRlckNvbG9yOiAnIzAwMDA4MCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyNmZmZmMDAnLCBib3JkZXJDb2xvcjogJyM4MDgwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjZmYwMGZmJywgYm9yZGVyQ29sb3I6ICcjODAwMDgwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzAwZmZmZicsIGJvcmRlckNvbG9yOiAnIzAwODA4MCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyM4MDAwMDAnLCBib3JkZXJDb2xvcjogJyNjMDAwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjMDA4MDAwJywgYm9yZGVyQ29sb3I6ICcjMDBjMDAwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzAwMDA4MCcsIGJvcmRlckNvbG9yOiAnIzAwMDBjMCcgfSxcbiAgICAgICAgeyBjb2xvcjogJyM4MDgwMDAnLCBib3JkZXJDb2xvcjogJyNjMGMwMDAnIH0sXG4gICAgICAgIHsgY29sb3I6ICcjODAwMDgwJywgYm9yZGVyQ29sb3I6ICcjYzAwMGMwJyB9LFxuICAgICAgICB7IGNvbG9yOiAnIzAwODA4MCcsIGJvcmRlckNvbG9yOiAnIzAwYzBjMCcgfVxuICAgIF07XG5cbiAgICB2YXIgbGkgPSBbXTtcblxuICAgIGNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbG9yLCBpZHgpIHtcblxuICAgICAgbGkucHVzaChgPGxpIGlkPVwiYm94LXNlbGVjdG9yLWNvbG9yLSR7aWR4fVwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtjb2xvci5jb2xvcn07IGJvcmRlci10b3A6IDFweCAke2NvbG9yLmJvcmRlckNvbG9yfSBzb2xpZDsgYm9yZGVyLWJvdHRvbTogMXB4ICR7Y29sb3IuYm9yZGVyQ29sb3J9IHNvbGlkO1wiPiR7Y29sb3IuY29sb3J9PC9saT5gKTtcblxuICAgIH0pO1xuXG4gICAgdGhpcy5fJGRvbS5odG1sKGA8dWw+JHtsaS5qb2luKCcnKX08L3VsPmApO1xuXG4gICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24oY29sb3IsIGlkeCkge1xuXG4gICAgICAkKGAjYm94LXNlbGVjdG9yLWNvbG9yLSR7aWR4fWApLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHNlbGYuX2lkeCA9IGlkeDtcbiAgICAgICAgc2VsZi5fY29sb3IgPSBjb2xvci5jb2xvcjtcbiAgICAgICAgc2VsZi5fYm9yZGVyQ29sb3IgPSBjb2xvci5ib3JkZXJDb2xvcjtcbiAgICAgICAgZHJhd1NldHRpbmdzLnNldENvbG9yKGNvbG9yLmNvbG9yKTtcbiAgICAgICAgZHJhd1NldHRpbmdzLnNldEJvcmRlckNvbG9yKGNvbG9yLmJvcmRlckNvbG9yKTtcblxuICAgICAgfSk7XG5cbiAgICB9KTtcblxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQm94U2VsZWN0b3IoKTsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vLi4vZXZlbnQuanMnO1xuaW1wb3J0IFdvcmxkIGZyb20gJy4uLy4uL21vZGVscy93b3JsZC93b3JsZC5qcyc7XG5pbXBvcnQgQ2FudmFzTWVzaGVzIGZyb20gJy4vY2FudmFzLW1lc2hlcy5qcyc7XG5cbnZhciB3b3JsZCA9IFdvcmxkLmdldEluc3RhbmNlKClcbiAgLCBpZCA9IDBcbiAgLCAkd2luZG93ID0gJCh3aW5kb3cpXG4gICwgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbmNsYXNzIENhbnZhc0Jhc2Uge1xuXG4gIF9zZXREb20oKSB7XG5cbiAgICB0aGlzLl8kZG9tID0gJCgpO1xuXG4gIH1cblxuICBfY3JlYXRlQ2FtZXJhKCkge1xuXG4gICAgdGhpcy5fY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDYwKTtcblxuICB9XG5cbiAgX2luaXRpYWxpemUoKSB7fVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pZCA9ICsraWQ7XG5cbiAgICB0aGlzLl9pc0FsaXZlID0gdHJ1ZTtcblxuICAgIHRoaXMuX3NldERvbSgpO1xuICAgIHRoaXMuXyRwYXJlbnQgPSB0aGlzLl8kZG9tLnBhcmVudCgpO1xuXG4gICAgdGhpcy5fbWVzaGVzID0gbmV3IENhbnZhc01lc2hlcygpO1xuICAgIHRoaXMuX2lzRmxhdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5femVybyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYTogdHJ1ZSxcbiAgICAgIGFudGlhbGlhc2luZzogdHJ1ZSxcbiAgICAgIGNhbnZhczogdGhpcy5fJGRvbS5nZXQoMClcbiAgICB9KTtcbiAgICB0aGlzLl9zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdGhpcy5fY3JlYXRlQ2FtZXJhKCk7XG5cbiAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgdGhpcy5fY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuICAgIHdvcmxkLm9uKFdvcmxkLkVWRU5UX1NFVEJMT0NLLCB0aGlzLl9ldmVudFNldEJsb2NrRGVmYXVsdC5iaW5kKHRoaXMpKTtcbiAgICB3b3JsZC5vbihXb3JsZC5FVkVOVF9SRU1PVkVCTE9DSywgdGhpcy5fZXZlbnRSZW1vdmVCbG9ja0RlZmF1bHQuYmluZCh0aGlzKSk7XG4gICAgd29ybGQub24oV29ybGQuRVZFTlRfUkVTRVQsIHRoaXMuX2V2ZW50UmVzZXREZWZhdWx0LmJpbmQodGhpcykpO1xuXG4gICAgd29ybGQub24oV29ybGQuRVZFTlRfU0VUQkxPQ0ssIHRoaXMuX2V2ZW50U2V0QmxvY2suYmluZCh0aGlzKSk7XG4gICAgd29ybGQub24oV29ybGQuRVZFTlRfUkVNT1ZFQkxPQ0ssIHRoaXMuX2V2ZW50UmVtb3ZlQmxvY2suYmluZCh0aGlzKSk7XG4gICAgd29ybGQub24oV29ybGQuRVZFTlRfUkVTRVQsIHRoaXMuX2V2ZW50UmVzZXQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLl8kZG9tLm9uKGBtb3VzZW1vdmUubW91c2Vtb3ZlJHt0aGlzLmlkfWAsIHRoaXMuX2V2ZW50SG92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fJGRvbS5vbihgY2xpY2suY2xpY2ske3RoaXMuaWR9YCwgdGhpcy5fZXZlbnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl8kZG9tLm9uKGBjb250ZXh0bWVudS5jb250ZXh0bWVudSR7dGhpcy5pZH1gLCB0aGlzLl9ldmVudFJpZ2h0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgJHdpbmRvdy5vbihgcmVzaXplLnJlc2l6ZSR7dGhpcy5pZH1gLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICAgICRkb2N1bWVudC5vbihgJHtFdmVudC5CTE9DS19IT1ZFUl9PTn0uJHtFdmVudC5CTE9DS19IT1ZFUl9PTn0ke3RoaXMuaWR9YCwgdGhpcy5fYWRkSG92ZXJFZmZlY3QuYmluZCh0aGlzKSk7XG4gICAgJGRvY3VtZW50Lm9uKGAke0V2ZW50LkJMT0NLX0hPVkVSX09GRn0uJHtFdmVudC5CTE9DS19IT1ZFUl9PRkZ9JHt0aGlzLmlkfWAsIHRoaXMuX3JlbW92ZUhvdmVyRWZmZWN0LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5faW5pdGlhbGl6ZSgpO1xuXG4gICAgdGhpcy5fYW5pbWF0ZUxvb3AoKTtcblxuICB9XG5cbiAgX2V2ZW50U2V0QmxvY2tEZWZhdWx0KG9sZEJsb2NrLCBuZXdCbG9jaykge1xuXG4gICAgZGVidWcubG9nLmdhbWUoJ3NldEJsb2NrOicsIG9sZEJsb2NrLCBuZXdCbG9jayk7XG5cbiAgICB0aGlzLl9yZW1vdmVCbG9jayhvbGRCbG9jayk7XG4gICAgdGhpcy5fc2V0QmxvY2sobmV3QmxvY2spO1xuXG4gIH1cblxuICBfZXZlbnRSZW1vdmVCbG9ja0RlZmF1bHQob2xkQmxvY2ssIG5ld0Jsb2NrKSB7XG5cbiAgICBkZWJ1Zy5sb2cuZ2FtZSgncmVtb3ZlQmxvY2s6Jywgb2xkQmxvY2ssIG5ld0Jsb2NrKTtcblxuICAgIHRoaXMuX3JlbW92ZUJsb2NrKG9sZEJsb2NrKTtcbiAgICB0aGlzLl9zZXRCbG9jayhuZXdCbG9jayk7XG5cbiAgfVxuXG4gIF9ldmVudFJlc2V0RGVmYXVsdCgpIHtcblxuICAgIHRoaXMuX3Jlc2V0U2NlbmUoKTtcblxuICAgIHRoaXMuX2xvYWRCbG9ja3MoKTtcblxuICB9XG5cbiAgX2V2ZW50U2V0QmxvY2soKSB7fVxuXG4gIF9ldmVudFJlbW92ZUJsb2NrKCkge31cblxuICBfZXZlbnRSZXNldCgpIHt9XG5cbiAgX2V2ZW50Q2xpY2soZXZlbnQpIHt9XG5cbiAgX2V2ZW50UmlnaHRDbGljayhldmVudCkge31cblxuICBfZXZlbnRIb3ZlcihldmVudCkge31cblxuICBfYWRkSG92ZXJFZmZlY3QoKSB7fVxuXG4gIF9yZW1vdmVIb3ZlckVmZmVjdCgpIHt9XG5cbiAgX2FuaW1hdGUoKSB7fVxuXG4gIF9hbmltYXRlTG9vcCgpIHtcblxuICAgIGlmICghdGhpcy5faXNBbGl2ZSkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgZnJhbWUgPSB0aGlzLl9jbG9jay5nZXRFbGFwc2VkVGltZSgpICogMTAwMDtcblxuICAgIHRoaXMuX2FuaW1hdGUoZnJhbWUpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2FuaW1hdGVMb29wLmJpbmQodGhpcykpO1xuXG4gIH1cblxuICByZXNpemUoKSB7XG5cbiAgICB0aGlzLl93aWR0aCA9IHRoaXMuXyRwYXJlbnQud2lkdGgoKTtcbiAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl8kcGFyZW50LmhlaWdodCgpO1xuICAgIHRoaXMuX3Nob3J0ZXIgPSB0aGlzLl93aWR0aCA+IHRoaXMuX2hlaWdodCA/IHRoaXMuX2hlaWdodCA6IHRoaXMuX3dpZHRoO1xuXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U2l6ZSh0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KTtcblxuICAgIHZhciBkaXN0YW5jZSA9IENvbmZpZy53b3JsZC5zaXplIC8gNCAqIENvbmZpZy5nYW1lLnRleHR1cmVTaXplXG4gICAgICAsIHJhdGUgPSB0aGlzLl93aWR0aCAvIHRoaXMuX2hlaWdodDtcblxuICAgIHRoaXMuX2NhbWVyYS50b3AgPSBkaXN0YW5jZTtcbiAgICB0aGlzLl9jYW1lcmEucmlnaHQgPSBkaXN0YW5jZSAqIHJhdGU7XG4gICAgdGhpcy5fY2FtZXJhLmJvdHRvbSA9IC1kaXN0YW5jZTtcbiAgICB0aGlzLl9jYW1lcmEubGVmdCA9IC1kaXN0YW5jZSAqIHJhdGU7XG5cbiAgICBpZiAodGhpcy5fY2FtZXJhLmFzcGVjdCkge1xuXG4gICAgICB0aGlzLl9jYW1lcmEuYXNwZWN0ID0gdGhpcy5fd2lkdGggLyB0aGlzLl9oZWlnaHQ7XG5cbiAgICB9XG5cbiAgICB0aGlzLl9jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gIH1cblxuICBfcmVzZXRTY2VuZSgpIHtcblxuICAgIHRoaXMuX3NjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuX3NjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIF9sb2FkQmxvY2tzKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIGJsb2NrcyA9IHdvcmxkLmdldEJsb2NrcygpO1xuXG4gICAgZGVidWcubG9nLmdhbWUoJ2xvYWRCbG9ja3M6JywgYmxvY2tzKTtcblxuICAgIGJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uKGJsb2NrKSB7XG5cbiAgICAgIHNlbGYuX3NldEJsb2NrKGJsb2NrKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBfc2V0QmxvY2soYmxvY2spIHtcblxuICAgIGlmIChibG9jayA9PT0gbnVsbCkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgbWVzaCA9IHRoaXMuX21lc2hlcy5jcmVhdGVNZXNoKGJsb2NrLCB0aGlzLl9pc0ZsYXQpO1xuICAgIHRoaXMuX3NjZW5lLmFkZChtZXNoKTtcblxuICAgIGlmIChDb25maWcuZ2FtZS5wcmV2aWV3LnNob3dCb3JkZXIpIHtcblxuICAgICAgdmFyIGJvcmRlciA9IHRoaXMuX21lc2hlcy5jcmVhdGVCb3JkZXIoYmxvY2spO1xuICAgICAgdGhpcy5fc2NlbmUuYWRkKGJvcmRlcik7XG5cbiAgICB9XG5cbiAgfVxuXG4gIF9yZW1vdmVCbG9jayhibG9jaykge1xuXG4gICAgaWYgKGJsb2NrID09PSBudWxsKSB7XG5cbiAgICAgIHJldHVybjtcblxuICAgIH1cblxuICAgIHZhciBtZXNoID0gdGhpcy5fbWVzaGVzLmdldE1lc2goYmxvY2spO1xuICAgIHRoaXMuX3NjZW5lLnJlbW92ZShtZXNoKTtcblxuICAgIGlmIChDb25maWcuZ2FtZS5wcmV2aWV3LnNob3dCb3JkZXIpIHtcblxuICAgICAgdmFyIGJvcmRlciA9IHRoaXMuX21lc2hlcy5nZXRCb3JkZXIoYmxvY2spO1xuICAgICAgdGhpcy5fc2NlbmUucmVtb3ZlKGJvcmRlcik7XG5cbiAgICB9XG5cbiAgICB0aGlzLl9tZXNoZXMucmVtb3ZlKGJsb2NrKTtcblxuICB9XG5cbiAgZGVzdHJveSgpIHtcblxuICAgIHRoaXMuX2lzQWxpdmUgPSBmYWxzZTtcblxuICAgIHdvcmxkLm9mZigpO1xuXG4gICAgdGhpcy5fJGRvbS5vZmYoYG1vdXNlbW92ZS5tb3VzZW1vdmUke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5fJGRvbS5vZmYoYGNsaWNrLmNsaWNrJHt0aGlzLmlkfWApO1xuICAgIHRoaXMuXyRkb20ub2ZmKGBjb250ZXh0bWVudS5jb250ZXh0bWVudSR7dGhpcy5pZH1gKTtcbiAgICAkd2luZG93Lm9mZihgcmVzaXplLnJlc2l6ZSR7dGhpcy5pZH1gKTtcblxuICAgICR3aW5kb3cub2ZmKGAke0V2ZW50LkJMT0NLX0hPVkVSX09OfS4ke0V2ZW50LkJMT0NLX0hPVkVSX09OfSR7dGhpcy5pZH1gKTtcbiAgICAkd2luZG93Lm9mZihgJHtFdmVudC5CTE9DS19IT1ZFUl9PRkZ9LiR7RXZlbnQuQkxPQ0tfSE9WRVJfT0ZGfSR7dGhpcy5pZH1gKTtcblxuICAgIHRoaXMuX3JlbmRlcmVyID0gbnVsbDtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5fcmVuZGVyZXIucmVuZGVyKHRoaXMuX3NjZW5lLCB0aGlzLl9jYW1lcmEpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNCYXNlO1xuIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4uLy4uL2V2ZW50LmpzJztcbmltcG9ydCBXb3JsZCBmcm9tICcuLi8uLi9tb2RlbHMvd29ybGQvd29ybGQuanMnO1xuaW1wb3J0IENhbnZhc0Jhc2UgZnJvbSAnLi9jYW52YXMtYmFzZS5qcyc7XG5pbXBvcnQgRHJhd1NldHRpbmdzIGZyb20gJy4uLy4uL21vZGVscy9kcmF3LXNldHRpbmdzL2RyYXctc2V0dGluZ3MuanMnO1xuXG5cbmltcG9ydCBCbG9ja01vbm8gZnJvbSAnLi4vLi4vbW9kZWxzL2Jsb2NrL2Jsb2NrLW1vbm8uanMnO1xuXG52YXIgd29ybGQgPSBXb3JsZC5nZXRJbnN0YW5jZSgpXG4gICwgZHJhd1NldHRpbmdzID0gRHJhd1NldHRpbmdzLmdldEluc3RhbmNlKClcbiAgLCAkZG9jdW1lbnQgPSAkKGRvY3VtZW50KTtcblxuY2xhc3MgUHJldmlldyBleHRlbmRzIENhbnZhc0Jhc2Uge1xuXG4gIF9zZXREb20oKSB7XG5cbiAgICB0aGlzLl8kZG9tID0gJChDb25maWcuaHRtbC5nYW1lLmVkaXRvcik7XG5cbiAgfVxuXG4gIF9jcmVhdGVDYW1lcmEoKSB7XG5cbiAgICBzdXBlci5fY3JlYXRlQ2FtZXJhKCk7XG5cbiAgICB0aGlzLl9jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5fY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuX2NhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcbiAgICB0aGlzLl9jYW1lcmEubG9va0F0KHRoaXMuX3plcm8pO1xuXG4gICAgdGhpcy5fY29udHJvbHMgPSBuZXcgVEhSRUUuVHJhY2tiYWxsQ29udHJvbHModGhpcy5fY2FtZXJhLCB0aGlzLl9yZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICB0aGlzLl9jb250cm9scy5ub1BhbiA9IHRydWU7XG4gICAgdGhpcy5fY29udHJvbHMucm90YXRlU3BlZWQgPSAxMDtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuX2NvbnRyb2xzKTtcblxuICB9XG5cbiAgX2luaXRpYWxpemUoKSB7XG5cbiAgICBkZWJ1Zy5sb2cuZWRpdG9yKCdpbml0aWFsaXppbmcgZWRpdG9yIC4uLicpO1xuXG4gICAgdGhpcy5faXNGbGF0ID0gdHJ1ZTtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblxuICAgIHRoaXMuX2hvdmVyZWQgPSBudWxsO1xuXG4gICAgdGhpcy5fbGFzdEhvdmVyRXZlbnQgPSBudWxsO1xuXG4gICAgdGhpcy5fbG9hZEJsb2NrcygpO1xuXG4gIH1cblxuICBfYW5pbWF0ZShmcmFtZSkge1xuXG4gICAgdGhpcy5fY29udHJvbHMudXBkYXRlKCk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxuICBfZXZlbnRDbGljayhldmVudCkge1xuXG4gICAgdmFyIGludGVyYWN0cyA9IHRoaXMuX2dldEludGVyYWN0cyhldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIGlmIChpbnRlcmFjdHMubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBtZXNoID0gaW50ZXJhY3RzWzBdLm9iamVjdFxuICAgICAgICAsIGRpcmVjdGlvbiA9IGludGVyYWN0c1swXS5mYWNlLm5vcm1hbFxuICAgICAgICAsIGJsb2NrID0gdGhpcy5fbWVzaGVzLmdldEJsb2NrQnlNZXNoSWQobWVzaC51dWlkKTtcblxuICAgICAgd29ybGQuc2V0QmxvY2sobmV3IEJsb2NrTW9ubyhibG9jay54ICsgZGlyZWN0aW9uLngsIGJsb2NrLnkgKyBkaXJlY3Rpb24ueSwgYmxvY2sueiArIGRpcmVjdGlvbi56LCBkcmF3U2V0dGluZ3MuY29sb3IsIGRyYXdTZXR0aW5ncy5ib3JkZXJDb2xvcikpO1xuXG4gICAgfVxuXG4gIH1cblxuICBfZXZlbnRSaWdodENsaWNrKGV2ZW50KSB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGludGVyYWN0cyA9IHRoaXMuX2dldEludGVyYWN0cyhldmVudC5vZmZzZXRYLCBldmVudC5vZmZzZXRZKTtcblxuICAgIGlmIChpbnRlcmFjdHMubGVuZ3RoKSB7XG5cbiAgICAgIHZhciBtZXNoID0gaW50ZXJhY3RzWzBdLm9iamVjdFxuICAgICAgICAsIGJsb2NrID0gdGhpcy5fbWVzaGVzLmdldEJsb2NrQnlNZXNoSWQobWVzaC51dWlkKTtcblxuICAgICAgd29ybGQucmVtb3ZlQmxvY2soYmxvY2spO1xuXG4gICAgfVxuXG4gIH1cblxuICBfZXZlbnRTZXRCbG9jaygpIHtcblxuICAgIGlmICh0aGlzLl9sYXN0SG92ZXJFdmVudCA9PT0gbnVsbCkge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5fZXZlbnRIb3ZlcihzZWxmLl9sYXN0SG92ZXJFdmVudCk7XG4gICAgfSwgMTApO1xuXG4gIH1cblxuICBfZXZlbnRIb3ZlcihldmVudCkge1xuXG4gICAgdGhpcy5fbGFzdEhvdmVyRXZlbnQgPSBldmVudDtcblxuICAgIHZhciBpbnRlcmFjdHMgPSB0aGlzLl9nZXRJbnRlcmFjdHMoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICBpZiAoaW50ZXJhY3RzLmxlbmd0aCkge1xuXG4gICAgICB2YXIgbWVzaCA9IGludGVyYWN0c1swXS5vYmplY3Q7XG5cbiAgICAgIGlmIChtZXNoICE9PSB0aGlzLl9ob3ZlcmVkKSB7XG5cbiAgICAgICAgdmFyIGJsb2NrSWQgPSB0aGlzLl9tZXNoZXMuZ2V0QmxvY2tJZEJ5TWVzaElkKG1lc2gudXVpZCk7XG5cbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT0ZGKTtcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT04sIFtibG9ja0lkXSk7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT0ZGKTtcblxuICB9XG5cbiAgX2dldEludGVyYWN0cyhtb3VzZVgsIG1vdXNlWSkge1xuXG4gICAgdmFyIHggPSAobW91c2VYIC8gdGhpcy5fd2lkdGgpICogMiAtIDFcbiAgICAgICwgeSA9IC0gKG1vdXNlWSAvIHRoaXMuX2hlaWdodCkgKiAyICsgMVxuICAgICAgLCB2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCAxKTtcblxuICAgIHRoaXMuX3JheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKHZlYywgdGhpcy5fY2FtZXJhKTtcblxuICAgIHJldHVybiB0aGlzLl9yYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyh0aGlzLl9tZXNoZXMuZ2V0TWVzaGVzKCkpO1xuXG4gIH1cblxuICBfYWRkSG92ZXJFZmZlY3QoZXZlbnQsIGJsb2NrSWQpIHtcblxuICAgIHZhciBtZXNoID0gdGhpcy5fbWVzaGVzLmdldE1lc2hCeUJsb2NrSWQoYmxvY2tJZCk7XG5cbiAgICBpZiAobWVzaCAhPT0gbnVsbCkge1xuXG4gICAgICBtZXNoLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjg7XG4gICAgICB0aGlzLl9ob3ZlcmVkID0gbWVzaDtcblxuICAgIH1cblxuICB9XG5cbiAgX3JlbW92ZUhvdmVyRWZmZWN0KCkge1xuXG4gICAgaWYgKHRoaXMuX2hvdmVyZWQgIT09IG51bGwpIHtcblxuICAgICAgdGhpcy5faG92ZXJlZC5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcbiAgICAgIHRoaXMuX2hvdmVyZWQgPSBudWxsO1xuXG4gICAgfVxuXG4gIH1cblxuICByZXNpemUoKSB7XG5cbiAgICBzdXBlci5yZXNpemUoKTtcblxuICAgIHZhciBiYXNlID0gdGhpcy5fJHBhcmVudC5oZWlnaHQoKSAvIDIgKiBNYXRoLnNxcnQoMylcbiAgICAgICwgcGVyID0gdGhpcy5fc2hvcnRlciAvIENvbmZpZy53b3JsZC5zaXplO1xuXG4gICAgdGhpcy5fY2FtZXJhRGlzdGFuY2UgPSBiYXNlICogQ29uZmlnLmdhbWUudGV4dHVyZVNpemUgLyBwZXI7XG5cbiAgICB0aGlzLl9jb250cm9scy5taW5EaXN0YW5jZSA9IHRoaXMuX2NhbWVyYURpc3RhbmNlICogMC4yO1xuICAgIHRoaXMuX2NvbnRyb2xzLm1heERpc3RhbmNlID0gdGhpcy5fY2FtZXJhRGlzdGFuY2UgKiAyO1xuXG4gICAgdGhpcy5fY29udHJvbHMuaGFuZGxlUmVzaXplKCk7XG5cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG5cbiAgICBzdXBlci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLl9jb250cm9scy5kaXNwb3NlKCk7XG4gICAgdGhpcy5fY29udHJvbHMgPSBudWxsO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3O1xuIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jbGFzcyBDYW52YXNNZXNoZXMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fbWVzaGVzID0gW107XG4gICAgdGhpcy5fYm9yZGVycyA9IFtdO1xuXG4gIH1cblxuICBnZXRNZXNoZXMoKSB7XG5cbiAgICB2YXIgbWVzaGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpZHggaW4gdGhpcy5fbWVzaGVzKSB7XG5cbiAgICAgIG1lc2hlcy5wdXNoKHRoaXMuX21lc2hlc1tpZHhdLm1lc2gpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG1lc2hlcztcblxuICB9XG5cbiAgZ2V0TWVzaChibG9jaykge1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX21lc2hlcykge1xuXG4gICAgICBpZiAodGhpcy5fbWVzaGVzW2lkeF0uYmxvY2tJZCA9PT0gYmxvY2suaWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaGVzW2lkeF0ubWVzaDtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfVxuXG4gIGdldE1lc2hCeUJsb2NrSWQoYmxvY2tJZCkge1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX21lc2hlcykge1xuXG4gICAgICBpZiAodGhpcy5fbWVzaGVzW2lkeF0uYmxvY2tJZCA9PT0gYmxvY2tJZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoZXNbaWR4XS5tZXNoO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcblxuICB9XG5cbiAgZ2V0QmxvY2tCeU1lc2hJZChtZXNoSWQpIHtcblxuICAgIGZvciAobGV0IGlkeCBpbiB0aGlzLl9tZXNoZXMpIHtcblxuICAgICAgaWYgKHRoaXMuX21lc2hlc1tpZHhdLm1lc2hJZCA9PT0gbWVzaElkKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX21lc2hlc1tpZHhdLmJsb2NrO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcblxuICB9XG5cbiAgZ2V0QmxvY2tJZEJ5TWVzaElkKG1lc2hJZCkge1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX21lc2hlcykge1xuXG4gICAgICBpZiAodGhpcy5fbWVzaGVzW2lkeF0ubWVzaElkID09PSBtZXNoSWQpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5fbWVzaGVzW2lkeF0uYmxvY2tJZDtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfVxuXG4gIGdldEJvcmRlcihibG9jaykge1xuXG4gICAgZm9yIChsZXQgaWR4IGluIHRoaXMuX2JvcmRlcnMpIHtcblxuICAgICAgaWYgKHRoaXMuX2JvcmRlcnNbaWR4XS5ibG9ja0lkID09PSBibG9jay5pZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9ib3JkZXJzW2lkeF0uYm9yZGVyO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcblxuICB9XG5cbiAgY3JlYXRlTWVzaChibG9jaywgaXNGbGF0ID0gZmFsc2UpIHtcblxuICAgIHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZSwgQ29uZmlnLmdhbWUudGV4dHVyZVNpemUsIENvbmZpZy5nYW1lLnRleHR1cmVTaXplKVxuICAgICAgLCBtYXQgPSBpc0ZsYXQgPyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCA6IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWxcbiAgICAgICwgbWF0ZXJpYWwgPSBuZXcgbWF0KHtcbiAgICAgICAgY29sb3I6IGJsb2NrLmNvbG9yLFxuICAgICAgICBhbWJpZW50OiBibG9jay5jb2xvcixcbiAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZVxuICAgICAgfSlcbiAgICAgICwgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICBtZXNoLnBvc2l0aW9uLnggPSAoYmxvY2sueCAtIENvbmZpZy53b3JsZC5zaXplIC8gMiA8PCAwKSAqIENvbmZpZy5nYW1lLnRleHR1cmVTaXplO1xuICAgIG1lc2gucG9zaXRpb24ueSA9IChibG9jay55IC0gQ29uZmlnLndvcmxkLnNpemUgLyAyIDw8IDApICogQ29uZmlnLmdhbWUudGV4dHVyZVNpemU7XG4gICAgbWVzaC5wb3NpdGlvbi56ID0gKGJsb2NrLnogLSBDb25maWcud29ybGQuc2l6ZSAvIDIgPDwgMCkgKiBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZTtcblxuICAgIHRoaXMuX21lc2hlcy5wdXNoKHtcbiAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgbWVzaElkOiBtZXNoLnV1aWQsXG4gICAgICBibG9jazogYmxvY2ssXG4gICAgICBtZXNoOiBtZXNoXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzaDtcblxuICB9XG5cbiAgY3JlYXRlQm9yZGVyKGJsb2NrKSB7XG5cbiAgICB2YXIgbWVzaCA9IHRoaXMuZ2V0TWVzaChibG9jaylcbiAgICAgICwgYm9yZGVyID0gbmV3IFRIUkVFLkJveEhlbHBlcihtZXNoKTtcblxuICAgIGJvcmRlci5tYXRlcmlhbC5jb2xvci5zZXQoYmxvY2suYm9yZGVyQ29sb3IpO1xuXG4gICAgdGhpcy5fYm9yZGVycy5wdXNoKHtcbiAgICAgIGJsb2NrSWQ6IGJsb2NrLmlkLFxuICAgICAgbWVzaElkOiBtZXNoLnV1aWQsXG4gICAgICBibG9jazogYmxvY2ssXG4gICAgICBib3JkZXI6IGJvcmRlclxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGJvcmRlcjtcblxuICB9XG5cbiAgcmVtb3ZlKGJsb2NrKSB7XG5cbiAgICBmb3IgKGxldCBpZHggaW4gdGhpcy5fbWVzaGVzKSB7XG5cbiAgICAgIGlmICh0aGlzLl9tZXNoZXNbaWR4XS5ibG9ja0lkID09PSBibG9jay5pZCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNoZXMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzTWVzaGVzOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCBFdmVudCBmcm9tICcuLi8uLi9ldmVudC5qcyc7XG5pbXBvcnQgV29ybGQgZnJvbSAnLi4vLi4vbW9kZWxzL3dvcmxkL3dvcmxkLmpzJztcbmltcG9ydCBDYW52YXNCYXNlIGZyb20gJy4vY2FudmFzLWJhc2UuanMnO1xuXG52YXIgd29ybGQgPSBXb3JsZC5nZXRJbnN0YW5jZSgpXG4gICwgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBDYW52YXNCYXNlIHtcblxuICBfc2V0RG9tKCkge1xuXG4gICAgdGhpcy5fJGRvbSA9ICQoQ29uZmlnLmh0bWwuZ2FtZS5wcmV2aWV3KTtcblxuICB9XG5cbiAgX2NyZWF0ZUNhbWVyYSgpIHtcblxuICAgIHRoaXMuX2NhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoKTtcblxuICB9XG5cbiAgX2luaXRpYWxpemUoKSB7XG5cbiAgICBkZWJ1Zy5sb2cucHJldmlldygnaW5pdGlhbGl6aW5nIHByZXZpZXcgLi4uJyk7XG5cbiAgICB0aGlzLl9pc0ZsYXQgPSBDb25maWcuZ2FtZS5wcmV2aWV3LmlzRmxhdDtcblxuICAgIHRoaXMuX3JheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblxuICAgIHRoaXMuX2hvdmVyZWQgPSBudWxsO1xuXG4gICAgdGhpcy5fc2V0TGlnaHQoKTtcblxuICAgIHRoaXMuX2xvYWRCbG9ja3MoKTtcblxuICB9XG5cbiAgX2V2ZW50SG92ZXIoZXZlbnQpIHtcblxuICAgIHZhciBpbnRlcmFjdHMgPSB0aGlzLl9nZXRJbnRlcmFjdHMoZXZlbnQub2Zmc2V0WCwgZXZlbnQub2Zmc2V0WSk7XG5cbiAgICBpZiAoaW50ZXJhY3RzLmxlbmd0aCkge1xuXG4gICAgICB2YXIgbWVzaCA9IGludGVyYWN0c1swXS5vYmplY3Q7XG5cbiAgICAgIGlmIChtZXNoICE9PSB0aGlzLl9ob3ZlcmVkKSB7XG5cbiAgICAgICAgdmFyIGJsb2NrSWQgPSB0aGlzLl9tZXNoZXMuZ2V0QmxvY2tJZEJ5TWVzaElkKG1lc2gudXVpZCk7XG5cbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT0ZGKTtcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT04sIFtibG9ja0lkXSk7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgJGRvY3VtZW50LnRyaWdnZXIoRXZlbnQuQkxPQ0tfSE9WRVJfT0ZGKTtcblxuICB9XG5cbiAgX2FkZEhvdmVyRWZmZWN0KGV2ZW50LCBibG9ja0lkKSB7XG5cbiAgICB2YXIgbWVzaCA9IHRoaXMuX21lc2hlcy5nZXRNZXNoQnlCbG9ja0lkKGJsb2NrSWQpO1xuXG4gICAgaWYgKG1lc2ggIT09IG51bGwpIHtcblxuICAgICAgbWVzaC5tYXRlcmlhbC5vcGFjaXR5ID0gMC41O1xuICAgICAgdGhpcy5faG92ZXJlZCA9IG1lc2g7XG5cbiAgICB9XG5cbiAgfVxuXG4gIF9nZXRJbnRlcmFjdHMobW91c2VYLCBtb3VzZVkpIHtcblxuICAgIHZhciB4ID0gKG1vdXNlWCAvIHRoaXMuX3dpZHRoKSAqIDIgLSAxXG4gICAgICAsIHkgPSAtIChtb3VzZVkgLyB0aGlzLl9oZWlnaHQpICogMiArIDFcbiAgICAgICwgdmVjID0gbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgMSk7XG5cbiAgICB0aGlzLl9yYXljYXN0ZXIuc2V0RnJvbUNhbWVyYSh2ZWMsIHRoaXMuX2NhbWVyYSk7XG5cbiAgICByZXR1cm4gdGhpcy5fcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHModGhpcy5fbWVzaGVzLmdldE1lc2hlcygpKTtcblxuICB9XG5cbiAgX3JlbW92ZUhvdmVyRWZmZWN0KCkge1xuXG4gICAgaWYgKHRoaXMuX2hvdmVyZWQgIT09IG51bGwpIHtcblxuICAgICAgdGhpcy5faG92ZXJlZC5tYXRlcmlhbC5vcGFjaXR5ID0gMTtcbiAgICAgIHRoaXMuX2hvdmVyZWQgPSBudWxsO1xuXG4gICAgfVxuXG4gIH1cblxuICBfYW5pbWF0ZShmcmFtZSkge1xuXG4gICAgdmFyIHByb2dyZXNzID0gKGZyYW1lICUgQ29uZmlnLmdhbWUucHJldmlldy5yb3RhdGlvblNwZWVkKSAvIENvbmZpZy5nYW1lLnByZXZpZXcucm90YXRpb25TcGVlZFxuICAgICAgLCBwcm9ncmVzc1kgPSAoZnJhbWUgJSBDb25maWcuZ2FtZS5wcmV2aWV3LnJvdGF0aW9uU3BlZWRZKSAvIENvbmZpZy5nYW1lLnByZXZpZXcucm90YXRpb25TcGVlZFlcbiAgICAgICwgcmFkID0gcHJvZ3Jlc3MgKiAyICogTWF0aC5QSVxuICAgICAgLCByYWRZID0gcHJvZ3Jlc3NZICogMiAqIE1hdGguUElcbiAgICAgICwgeCA9IE1hdGguY29zKHJhZCkgKiB0aGlzLl9jYW1lcmFEaXN0YW5jZVxuICAgICAgLCB5ID0gTWF0aC5zaW4ocmFkWSkgKiB0aGlzLl9jYW1lcmFEaXN0YW5jZSAvIDRcbiAgICAgICwgeiA9IE1hdGguc2luKHJhZCkgKiB0aGlzLl9jYW1lcmFEaXN0YW5jZVxuICAgICAgLCBsaWdodFggPSBNYXRoLmNvcyhyYWQgLSBNYXRoLlBJICogMC4xKSAqIHRoaXMuX2NhbWVyYURpc3RhbmNlXG4gICAgICAsIGxpZ2h0WiA9IE1hdGguc2luKHJhZCAtIE1hdGguUEkgKiAwLjEpICogdGhpcy5fY2FtZXJhRGlzdGFuY2U7XG5cbiAgICB0aGlzLl9jYW1lcmEucG9zaXRpb24ueCA9IHg7XG4gICAgdGhpcy5fY2FtZXJhLnBvc2l0aW9uLnkgPSB5O1xuICAgIHRoaXMuX2NhbWVyYS5wb3NpdGlvbi56ID0gejtcbiAgICB0aGlzLl9saWdodC5wb3NpdGlvbi5zZXQobGlnaHRYLCBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZSAqIDIsIGxpZ2h0Wikubm9ybWFsaXplKCk7XG4gICAgdGhpcy5fY2FtZXJhLmxvb2tBdCh0aGlzLl96ZXJvKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG4gIHJlc2l6ZSgpIHtcblxuICAgIHN1cGVyLnJlc2l6ZSgpO1xuXG4gICAgdmFyIGJhc2UgPSB0aGlzLl8kcGFyZW50LmhlaWdodCgpIC8gMiAqIE1hdGguc3FydCgzKVxuICAgICAgLCBwZXIgPSB0aGlzLl9zaG9ydGVyIC8gQ29uZmlnLndvcmxkLnNpemU7XG5cbiAgICB0aGlzLl9jYW1lcmFEaXN0YW5jZSA9IGJhc2UgKiBDb25maWcuZ2FtZS50ZXh0dXJlU2l6ZSAvIHBlcjtcblxuICB9XG5cbiAgX3NldExpZ2h0KCkge1xuXG4gICAgdGhpcy5fbGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgdGhpcy5fbGlnaHQucG9zaXRpb24uc2V0KDEsIDEsIDEpLm5vcm1hbGl6ZSgpO1xuICAgIHRoaXMuX3NjZW5lLmFkZCh0aGlzLl9saWdodCk7XG5cbiAgICB0aGlzLl9hbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKTtcbiAgICB0aGlzLl9zY2VuZS5hZGQodGhpcy5fYW1iaWVudExpZ2h0KTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJldmlldztcbiIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY2xhc3MgTG9hZGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuXyRkb20gPSAkKENvbmZpZy5odG1sLmxvYWRlcik7XG4gICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG5cbiAgfVxuXG4gIHNob3coKSB7XG5cbiAgICBpZiAodGhpcy5faXNTaG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fJGRvbS5zaG93KCk7XG4gICAgdGhpcy5faXNTaG93ID0gdHJ1ZTtcblxuICB9XG5cbiAgaGlkZSgpIHtcblxuICAgIGlmICghdGhpcy5faXNTaG93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fJGRvbS5oaWRlKCk7XG4gICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2FkZXIoKTsiLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL21vZHVsZXMvbG9hZGVyL2luZGV4LmpzJztcblxuY2xhc3MgU2NlbmVCYXNlIHtcblxuICBjb25zdHJ1Y3Rvcihkb21JRCkge1xuXG4gICAgdGhpcy5faWQgPSBkb21JRDtcbiAgICB0aGlzLl8kZG9tID0gJChkb21JRCk7XG5cbiAgICB0aGlzLl9pc1Nob3cgPSBmYWxzZTtcblxuICAgIGRlYnVnLmxvZy5zY2VuZSgnSW5pdGlhbGl6aW5nJywgdGhpcy5faWQsICcuLi4nKTtcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG5cbiAgfVxuXG4gIF9pbml0aWFsaXplKCkge31cblxuICBfZXZlbnRFbnRlcigpIHtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICB9XG5cbiAgX2V2ZW50TGVhdmUoKSB7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgfVxuXG4gIF9ldmVudFNob3duKCkge31cblxuICBfc2hvdygpIHtcblxuICAgIHRoaXMuX2lzU2hvdyA9IHRydWU7XG5cbiAgfVxuXG4gIF9oaWRlKCkge1xuXG4gICAgdGhpcy5faXNTaG93ID0gZmFsc2U7XG5cbiAgfVxuXG4gIGVudGVyKCkge1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvdykge1xuXG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICBkZWJ1Zy5sb2cuc2NlbmUoJ2VudGVyaW5nJywgdGhpcy5faWQpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICAsIHByb21pc2VFbnRlciA9IHRoaXMuX2V2ZW50RW50ZXIoKTtcblxuICAgIHByb21pc2VFbnRlci50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICBzZWxmLl9zaG93KCk7XG4gICAgICBzZWxmLl8kZG9tXG4gICAgICAgIC5hZGRDbGFzcygnZW50ZXIgc2hvdycpO1xuXG4gICAgICBzZWxmLl9ldmVudFNob3duKCk7XG5cbiAgICAgIHNlbGYuXyRkb21cbiAgICAgICAgLmRlbGF5KENvbmZpZy5zY2VuZS5kdXJhdGlvbilcbiAgICAgICAgLnF1ZXVlKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdlbnRlcicpXG4gICAgICAgICAgICAuZGVxdWV1ZSgpO1xuXG4gICAgICAgICAgZGVidWcubG9nLnNjZW5lKCdlbnRlcmVkJywgc2VsZi5faWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZUVudGVyO1xuXG4gIH1cblxuICBsZWF2ZShjYWxsYmFjaykge1xuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3cpIHtcblxuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgZGVidWcubG9nLnNjZW5lKCdsZWF2aW5nJywgdGhpcy5faWQpO1xuXG4gICAgTG9hZGVyLnNob3coKTtcblxuICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgLCBwcm9taXNlTGVhdmUgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgdGhpcy5fZXZlbnRMZWF2ZSgpLFxuICAgICAgICAgIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyA/IGNhbGxiYWNrKCkgOiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICBdKTtcblxuICAgIHByb21pc2VMZWF2ZS50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICBMb2FkZXIuaGlkZSgpO1xuXG4gICAgICBzZWxmLl8kZG9tXG4gICAgICAgIC5hZGRDbGFzcygnbGVhdmUnKVxuICAgICAgICAuZGVsYXkoQ29uZmlnLnNjZW5lLmR1cmF0aW9uKVxuICAgICAgICAucXVldWUoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2xlYXZlIHNob3cnKVxuICAgICAgICAgICAgLmRlcXVldWUoKTtcblxuICAgICAgICAgIHNlbGYuX2hpZGUoKTtcblxuICAgICAgICAgIGRlYnVnLmxvZy5zY2VuZSgnbGVmdCcsIHNlbGYuX2lkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2VMZWF2ZTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NlbmVCYXNlOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBTY2VuZUJhc2UgZnJvbSAnLi9zY2VuZS1iYXNlLmpzJztcbmltcG9ydCBsb2FkaW5nIGZyb20gJy4vc2NlbmUtbG9hZGluZy5qcyc7XG5cbmltcG9ydCBXb3JsZCBmcm9tICcuLi9tb2RlbHMvd29ybGQvd29ybGQuanMnO1xuXG5pbXBvcnQgUHJldmlldyBmcm9tICcuLi9tb2R1bGVzL2NhbnZhcy9jYW52YXMtcHJldmlldy5qcyc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJy4uL21vZHVsZXMvY2FudmFzL2NhbnZhcy1lZGl0b3IuanMnO1xuXG5pbXBvcnQgQm94U2VsZWN0b3IgZnJvbSAnLi4vbW9kdWxlcy9ib3gtc2VsZWN0b3IvaW5kZXguanMnO1xuXG52YXIgd29ybGQgPSBXb3JsZC5nZXRJbnN0YW5jZSgpO1xuXG5jbGFzcyBTY2VuZUdhbWUgZXh0ZW5kcyBTY2VuZUJhc2Uge1xuXG4gIF9pbml0aWFsaXplKCkge1xuXG4gICAgdGhpcy5fJHF1aXRCdXR0b24gPSAkKENvbmZpZy5odG1sLmdhbWUucXVpdEJ1dHRvbik7XG4gICAgdGhpcy5fJHZpZXdDaGFuZ2VCdXR0b24gPSAkKENvbmZpZy5odG1sLmdhbWUudmlld0NoYW5nZUJ1dHRvbik7XG5cbiAgfVxuXG4gIF9ldmVudEVudGVyKCkge1xuXG4gICAgLyoqXG4gICAgICogMS4gcmVzZXQgYWxsIGRhdGEgaW4gdmlld1xuICAgICAqIDIuIGxvYWQgZGF0YSBmcm9tIHNlcnZlclxuICAgICAqIDMuIHNldCBhbGwgZGF0YSBpbiB2aWV3XG4gICAgICogNC4gaW5pdGlhbGl6ZSBjYW52YXNcbiAgICAgKiA1LiBlbmFibGUgYWN0aW9uc1xuICAgICAqL1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fJHF1aXRCdXR0b24ub25lKCdjbGljaycsIHNlbGYubGVhdmUuYmluZChzZWxmLCBsb2FkaW5nLmVudGVyLmJpbmQobG9hZGluZykpKTtcblxuICAgIHRoaXMuXyR2aWV3Q2hhbmdlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICBkZWJ1Zy5sb2cuZ2FtZSgndmlldy1jaGFuZ2UnKTtcblxuICAgICAgd29ybGQuY2hhbmdlVmlldygpO1xuICAgICAgc2VsZi5fcHJldmlldy5zZXRMaW5lKCk7XG4gICAgICBzZWxmLl9lZGl0b3Iuc2V0Q2FtZXJhKCk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG5cbiAgICAgIC8vc2VsZi5fcmVzZXQoKTtcbiAgICAgIC8vc2VsZi5fZ2V0RGF0YSgpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgICAvL3NlbGYuX3NldERhdGEoZGF0YSk7XG4gICAgICBzZWxmLl9wcmV2aWV3ID0gbmV3IFByZXZpZXcoKTtcbiAgICAgIHNlbGYuX2VkaXRvciA9IG5ldyBFZGl0b3IoKTtcbiAgICAgIC8vc2VsZi5fZW5hYmxlQWN0aW9ucygpO1xuICAgICAgLy99KTtcblxuICAgICAgc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICBfZXZlbnRTaG93bigpIHtcblxuICAgIHRoaXMuX3ByZXZpZXcucmVzaXplKCk7XG4gICAgdGhpcy5fZWRpdG9yLnJlc2l6ZSgpO1xuXG4gIH1cblxuICBfZXZlbnRMZWF2ZSgpIHtcblxuICAgIHRoaXMuXyRxdWl0QnV0dG9uLm9mZignY2xpY2snKTtcblxuICAgIHRoaXMuX3ByZXZpZXcuZGVzdHJveSgpO1xuICAgIHRoaXMuX2VkaXRvci5kZXN0cm95KCk7XG5cbiAgICB0aGlzLl9wcmV2aWV3ID0gbnVsbDtcbiAgICB0aGlzLl9lZGl0b3IgPSBudWxsO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVHYW1lKENvbmZpZy5odG1sLnNjZW5lLmdhbWUpOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBTY2VuZUJhc2UgZnJvbSAnLi9zY2VuZS1iYXNlLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4uL3NjZW5lcy9zY2VuZS1nYW1lLmpzJztcbmltcG9ydCBjb25uZWN0aW9uIGZyb20gJy4uL2hhbmRsZXJzL2Nvbm5lY3Rpb24uanMnO1xuXG5jbGFzcyBTY2VuZUxvYWRpbmcgZXh0ZW5kcyBTY2VuZUJhc2Uge1xuXG4gIF9pbml0aWFsaXplKCkge1xuXG4gICAgdGhpcy5fJHBsYXlCdXR0b24gPSAkKENvbmZpZy5odG1sLmxvYWRpbmcucGxheUJ1dHRvbik7XG5cbiAgfVxuXG4gIF9ldmVudEVudGVyKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5fJHBsYXlCdXR0b24ub25lKCdjbGljaycsIHNlbGYubGVhdmUuYmluZChzZWxmLCBnYW1lLmVudGVyLmJpbmQoZ2FtZSkpKTtcblxuXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiAgfVxuXG4gIF9ldmVudExlYXZlKCkge1xuXG4gICAgdGhpcy5fJHBsYXlCdXR0b24ub2ZmKCdjbGljaycpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2NlbmVMb2FkaW5nKENvbmZpZy5odG1sLnNjZW5lLmxvYWRpbmcpOyIsImltcG9ydCBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzJztcbmltcG9ydCBTY2VuZUJhc2UgZnJvbSAnLi9zY2VuZS1iYXNlLmpzJztcblxuY2xhc3MgU2NlbmVSZXN1bHQgZXh0ZW5kcyBTY2VuZUJhc2Uge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTY2VuZVJlc3VsdChDb25maWcuaHRtbC5zY2VuZS5yZXN1bHQpOyJdfQ==
