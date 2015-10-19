import Config from '../config.js';
import Loader from '../modules/loader/index.js';

class SceneBase {

  constructor(domID) {

    this._id = domID;
    this._$dom = $(domID);

    this._isShow = false;

    debug.log.scene('Initializing', this._id, '...');
    this._initialize();

  }

  _initialize() {}

  _eventEnter() {

    return Promise.resolve();

  }

  _eventLeave() {

    return Promise.resolve();

  }

  _eventShown() {}

  _show() {

    this._isShow = true;

  }

  _hide() {

    this._isShow = false;

  }

  enter() {

    if (this._isShow) {

      return;

    }

    debug.log.scene('entering', this._id);

    var self = this
      , promiseEnter = this._eventEnter();

    promiseEnter.then(function() {

      self._show();
      self._$dom
        .addClass('enter show');

      self._eventShown();

      self._$dom
        .delay(Config.scene.duration)
        .queue(function() {

          $(this)
            .removeClass('enter')
            .dequeue();

          debug.log.scene('entered', self._id);

        });

    });

    return promiseEnter;

  }

  leave(callback) {

    if (!this._isShow) {

      return;

    }

    debug.log.scene('leaving', this._id);

    Loader.show();

    var self = this
      , promiseLeave = Promise.all([
          this._eventLeave(),
          typeof callback === 'function' ? callback() : Promise.resolve()
        ]);

    promiseLeave.then(function() {

      Loader.hide();

      self._$dom
        .addClass('leave')
        .delay(Config.scene.duration)
        .queue(function() {

          $(this)
            .removeClass('leave show')
            .dequeue();

          self._hide();

          debug.log.scene('left', self._id);

        });

    });

    return promiseLeave;

  }

}

export default SceneBase;