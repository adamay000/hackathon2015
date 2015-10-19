window.debug = new function() {

  var enabled = true;

  var self = function(fn) {

    if (enabled) {

      typeof fn === 'function' && fn();

    }

  };

  self.__proto__.enable = function() {

    enabled = true;

  };

  self.__proto__.disable = function() {

    enabled = false;

  };

  self.__proto__.log = function() {

    if (!enabled) {

      return;

    }

    console.log.apply(console, arguments);

  };

  return self;

};

[
  'connection',
  'chat',
  'game',
  'preview',
  'editor',
  'scene',
  'block',
  'world'
].forEach(function(word) {

  window.debug.log.__proto__[word] = function() {

    var args = [word.charAt(0).toUpperCase() + word.slice(1) + ':'];

    Array.prototype.push.apply(args, arguments);

    this.apply(this, args);

  };

});