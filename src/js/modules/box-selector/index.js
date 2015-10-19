import Config from '../../config.js';
import DrawSettings from '../../models/draw-settings/draw-settings.js';

var drawSettings = DrawSettings.getInstance();

class BoxSelector {

  constructor() {

    this._$dom = $(Config.html.game.boxSelector);

    this._idx = 0;
    this._color = '#ffffff';
    this._borderColor = '#c0c0c0';

    var self = this
      , colors = [
        { color: '#ffffff', borderColor: '#808080' },
        { color: '#404040', borderColor: '#808080' },
        { color: '#808080', borderColor: '#c0c0c0' },
        { color: '#c0c0c0', borderColor: '#808080' },
        { color: '#ff0000', borderColor: '#800000' },
        { color: '#00ff00', borderColor: '#008000' },
        { color: '#0000ff', borderColor: '#000080' },
        { color: '#ffff00', borderColor: '#808000' },
        { color: '#ff00ff', borderColor: '#800080' },
        { color: '#00ffff', borderColor: '#008080' },
        { color: '#800000', borderColor: '#c00000' },
        { color: '#008000', borderColor: '#00c000' },
        { color: '#000080', borderColor: '#0000c0' },
        { color: '#808000', borderColor: '#c0c000' },
        { color: '#800080', borderColor: '#c000c0' },
        { color: '#008080', borderColor: '#00c0c0' }
    ];

    var li = [];

    colors.forEach(function(color, idx) {

      li.push(`<li id="box-selector-color-${idx}" style="background: ${color.color}; border-top: 1px ${color.borderColor} solid; border-bottom: 1px ${color.borderColor} solid;">${color.color}</li>`);

    });

    this._$dom.html(`<ul>${li.join('')}</ul>`);

    colors.forEach(function(color, idx) {

      $(`#box-selector-color-${idx}`).on('click', function() {

        self._idx = idx;
        self._color = color.color;
        self._borderColor = color.borderColor;
        drawSettings.setColor(color.color);
        drawSettings.setBorderColor(color.borderColor);

      });

    });

  }


}

export default new BoxSelector();