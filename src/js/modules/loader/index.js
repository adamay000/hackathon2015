import Config from '../../config.js';

class Loader {

  constructor() {

    this._$dom = $(Config.html.loader);
    this._isShow = false;

  }

  show() {

    if (this._isShow) {
      return;
    }

    this._$dom.show();
    this._isShow = true;

  }

  hide() {

    if (!this._isShow) {
      return;
    }

    this._$dom.hide();
    this._isShow = false;

  }

}

export default new Loader();