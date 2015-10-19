var drawSettings = null;

class DrawSettings {

  static getInstance() { return drawSettings; }

  constructor() {

    this.color = 0xffffff;
    this.borderColor = 0x808080;

  }

  setColor(color) {

    this.color = color;

  }

  setBorderColor(borderColor) {

    this.borderColor = borderColor;

  }

}

drawSettings = new DrawSettings();

export default DrawSettings;