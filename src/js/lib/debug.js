window.debug = new function() {

  var enabled = true;

  this.enable = function() {

    enabled = true;

  };

  this.disable = function() {

    enabled = false;

  };

  this.log = function() {

    if (!enabled) {
      return;
    }

    console.log.apply(console, arguments);

  };

};
