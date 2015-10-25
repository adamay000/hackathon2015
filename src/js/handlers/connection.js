import Config from '../config.js';

class Connection {

  constructor() {

    this._socket = null;

  }

  connect() {

    if (this._socket === null) {

      this._socket = io(`${Config.host}:${Config.port}`);

    }

  }

  disconnect() {

    if (this._socket !== null) {

      this._socket.close();
      this._socket = null;

    }

  }

}

export default new Connection();
