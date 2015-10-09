(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Config = {
  html: {
    preview: 'preview',
    editor: 'editor'
  }
};

exports['default'] = Config;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _handlersConnectionJs = require('../handlers/connection.js');

var _handlersConnectionJs2 = _interopRequireDefault(_handlersConnectionJs);

var _modulesPreviewIndexJs = require('../modules/preview/index.js');

var _modulesPreviewIndexJs2 = _interopRequireDefault(_modulesPreviewIndexJs);

var Main = function Main() {
  _classCallCheck(this, Main);

  new _modulesPreviewIndexJs2['default']();
};

new Main();

},{"../handlers/connection.js":3,"../modules/preview/index.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = (function () {
  function Connection() {
    _classCallCheck(this, Connection);
  }

  /**
   * ソケット通信を開始する
   */

  _createClass(Connection, [{
    key: "connect",
    value: function connect() {}

    /**
     * ソケット通信を切断する
     */
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }]);

  return Connection;
})();

exports["default"] = new Connection();
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _configJs = require('../../config.js');

var _configJs2 = _interopRequireDefault(_configJs);

var Preview = (function () {
  function Preview() {
    _classCallCheck(this, Preview);

    this.initialize();
  }

  _createClass(Preview, [{
    key: 'initialize',
    value: function initialize() {

      var canvas = document.getElementById('#' + _configJs2['default'].html.preview);

      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas: canvas
      });

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(60);
    }
  }]);

  return Preview;
})();

exports['default'] = Preview;
module.exports = exports['default'];

},{"../../config.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZHlhbWFkYS9XZWIvaGFja2F0aG9uMjAxNS9zcmMvanMvY29uZmlnLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL2VudHJpZXMvbWFpbi5qcyIsIi9Vc2Vycy9keWFtYWRhL1dlYi9oYWNrYXRob24yMDE1L3NyYy9qcy9oYW5kbGVycy9jb25uZWN0aW9uLmpzIiwiL1VzZXJzL2R5YW1hZGEvV2ViL2hhY2thdGhvbjIwMTUvc3JjL2pzL21vZHVsZXMvcHJldmlldy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsSUFBSSxNQUFNLEdBQUc7QUFDWCxNQUFJLEVBQUU7QUFDSixXQUFPLEVBQUUsU0FBUztBQUNsQixVQUFNLEVBQUUsUUFBUTtHQUNqQjtDQUNGLENBQUM7O3FCQUVhLE1BQU07Ozs7Ozs7Ozs7b0NDUEUsMkJBQTJCOzs7O3FDQUU5Qiw2QkFBNkI7Ozs7SUFFM0MsSUFBSSxHQUVHLFNBRlAsSUFBSSxHQUVNO3dCQUZWLElBQUk7O0FBSU4sMENBQWEsQ0FBQztDQUVmOztBQUlILElBQUksSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNaTCxVQUFVO0FBRUgsV0FGUCxVQUFVLEdBRUE7MEJBRlYsVUFBVTtHQUliOzs7Ozs7ZUFKRyxVQUFVOztXQVNQLG1CQUFHLEVBRVQ7Ozs7Ozs7V0FLUyxzQkFBRyxFQUVaOzs7U0FsQkcsVUFBVTs7O3FCQXNCRCxJQUFJLFVBQVUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozt3QkN4QlosaUJBQWlCOzs7O0lBRTlCLE9BQU87QUFFQSxXQUZQLE9BQU8sR0FFRzswQkFGVixPQUFPOztBQUlULFFBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztHQUVuQjs7ZUFORyxPQUFPOztXQVFELHNCQUFHOztBQUVYLFVBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLE9BQUssc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBRyxDQUFDOztBQUVoRSxVQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUN0QyxhQUFLLEVBQUUsSUFBSTtBQUNYLGNBQU0sRUFBRSxNQUFNO09BQ2YsQ0FBQyxDQUFDOztBQUVILFVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRS9CLFVBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7S0FFL0M7OztTQXJCRyxPQUFPOzs7cUJBd0JFLE9BQU8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIENvbmZpZyA9IHtcbiAgaHRtbDoge1xuICAgIHByZXZpZXc6ICdwcmV2aWV3JyxcbiAgICBlZGl0b3I6ICdlZGl0b3InXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZzsiLCJpbXBvcnQgQ29ubmVjdGlvbiBmcm9tICcuLi9oYW5kbGVycy9jb25uZWN0aW9uLmpzJztcblxuaW1wb3J0IFByZXZpZXcgZnJvbSAnLi4vbW9kdWxlcy9wcmV2aWV3L2luZGV4LmpzJztcblxuY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBuZXcgUHJldmlldygpO1xuXG4gIH1cblxufVxuXG5uZXcgTWFpbigpO1xuIiwiXG5cbmNsYXNzIENvbm5lY3Rpb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICAvKipcbiAgICog44K944Kx44OD44OI6YCa5L+h44KS6ZaL5aeL44GZ44KLXG4gICAqL1xuICBjb25uZWN0KCkge1xuXG4gIH1cblxuICAvKipcbiAgICog44K944Kx44OD44OI6YCa5L+h44KS5YiH5pat44GZ44KLXG4gICAqL1xuICBkaXNjb25uZWN0KCkge1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29ubmVjdGlvbigpO1xuIiwiaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jbGFzcyBQcmV2aWV3IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuXG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuXG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAjJHtDb25maWcuaHRtbC5wcmV2aWV3fWApO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgY2FudmFzOiBjYW52YXNcbiAgICB9KTtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDYwKTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZXZpZXc7XG4iXX0=
