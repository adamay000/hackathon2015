var Config = {
  html: {
    scene: {
      loading: '#scene-loading',
      game: '#scene-game',
      result: '#scene-result'
    },
    loading: {
      playButton: '#start-play'
    },
    game: {
      preview: '#preview',
      editor: '#editor',
      quitButton: '#game-quit',
      viewChangeButton: '#view-changer',
      boxSelector: '#box-selector'
    },
    loader: '#loader'
  },
  scene: {
    duration: 500
  },
  game: {
    textureSize: 33,
    preview: {
      showBorder: true,
      isFlat: false,
      rotationSpeed: 15 * 1000,
      rotationSpeedY: 30 * 1000
    }
  },
  world: {
    size: 32
  },
  connection: {
    host: 'localhost',
    port: '8902'
  }
};

export default Config;