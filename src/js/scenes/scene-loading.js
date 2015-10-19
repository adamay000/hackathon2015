import Config from '../config.js';
import SceneBase from './scene-base.js';
import game from '../scenes/scene-game.js';

class SceneLoading extends SceneBase {

  _initialize() {

    this._$playButton = $(Config.html.loading.playButton);

  }

  _eventEnter() {

    var self = this;

    this._$playButton.one('click', self.leave.bind(self, game.enter.bind(game)));

    return Promise.resolve();

  }

  _eventLeave() {

    this._$playButton.off('click');

    return Promise.resolve();

  }

}

export default new SceneLoading(Config.html.scene.loading);