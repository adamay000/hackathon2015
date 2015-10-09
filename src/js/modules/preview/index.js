import Config from '../../config.js';

class Preview {

  constructor() {

    this.initialize();

  }

  initialize() {

    var canvas = document.getElementById(`#${Config.html.preview}`);

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canvas
    });

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(60);

  }
}

export default Preview;
