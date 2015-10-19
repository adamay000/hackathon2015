import Config from '../config.js';
import SceneBase from './scene-base.js';
import loading from './scene-loading.js';

import World from '../models/world/world.js';

import Preview from '../modules/canvas/canvas-preview.js';
import Editor from '../modules/canvas/canvas-editor.js';

import BoxSelector from '../modules/box-selector/index.js';

var world = World.getInstance();

class SceneGame extends SceneBase {

  _initialize() {

    this._$quitButton = $(Config.html.game.quitButton);
    this._$viewChangeButton = $(Config.html.game.viewChangeButton);

  }

  _eventEnter() {

    /**
     * 1. reset all data in view
     * 2. load data from server
     * 3. set all data in view
     * 4. initialize canvas
     * 5. enable actions
     */

    var self = this;

    this._$quitButton.one('click', self.leave.bind(self, loading.enter.bind(loading)));

    this._$viewChangeButton.on('click', function() {

      debug.log.game('view-change');

      world.changeView();
      self._preview.setLine();
      self._editor.setCamera();

    });

    return new Promise(function(resolve) {

      //self._reset();
      //self._getData().then(function(data){
      //self._setData(data);
      self._preview = new Preview();
      self._editor = new Editor();
      //self._enableActions();
      //});

      setTimeout(resolve, 1000);

    });

  }

  _eventShown() {

    this._preview.resize();
    this._editor.resize();

  }

  _eventLeave() {

    this._$quitButton.off('click');

    this._preview.destroy();
    this._editor.destroy();

    this._preview = null;
    this._editor = null;

    return Promise.resolve();

  }

}

export default new SceneGame(Config.html.scene.game);