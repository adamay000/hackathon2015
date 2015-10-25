import Config from '../../config.js';
import Event from '../../event.js';
import World from '../../models/world/world.js';
import CanvasMeshes from './canvas-meshes.js';

var world = World.getInstance()
  , id = 0
  , $window = $(window)
  , $document = $(document);

class CanvasBase {

  _setDom() {

    this._$dom = $();

  }

  _createCamera() {

    this._camera = new THREE.PerspectiveCamera(60);

  }

  _initialize() {}

  constructor() {

    this.id = ++id;

    this._isAlive = true;

    this._setDom();
    this._$parent = this._$dom.parent();

    this._meshes = new CanvasMeshes();
    this._isFlat = false;

    this._zero = new THREE.Vector3(0, 0, 0);

    this._renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialiasing: true,
      canvas: this._$dom.get(0)
    });
    this._scene = new THREE.Scene();

    this._createCamera();

    this.resize();

    this._clock = new THREE.Clock();

    world.on(World.EVENT_SETBLOCK, this._eventSetBlockDefault.bind(this));
    world.on(World.EVENT_REMOVEBLOCK, this._eventRemoveBlockDefault.bind(this));
    world.on(World.EVENT_RESET, this._eventResetDefault.bind(this));

    world.on(World.EVENT_SETBLOCK, this._eventSetBlock.bind(this));
    world.on(World.EVENT_REMOVEBLOCK, this._eventRemoveBlock.bind(this));
    world.on(World.EVENT_RESET, this._eventReset.bind(this));

    this._$dom.on(`mousemove.mousemove${this.id}`, this._eventHover.bind(this));
    this._$dom.on(`click.click${this.id}`, this._eventClick.bind(this));
    this._$dom.on(`contextmenu.contextmenu${this.id}`, this._eventRightClick.bind(this));
    $window.on(`resize.resize${this.id}`, this.resize.bind(this));

    $document.on(`${Event.BLOCK_HOVER_ON}.${Event.BLOCK_HOVER_ON}${this.id}`, this._addHoverEffect.bind(this));
    $document.on(`${Event.BLOCK_HOVER_OFF}.${Event.BLOCK_HOVER_OFF}${this.id}`, this._removeHoverEffect.bind(this));

    this._initialize();

    this._animateLoop();

  }

  _eventSetBlockDefault(oldBlock, newBlock) {

    debug.log.game('setBlock:', oldBlock, newBlock);

    this._removeBlock(oldBlock);
    this._setBlock(newBlock);

  }

  _eventRemoveBlockDefault(oldBlock, newBlock) {

    debug.log.game('removeBlock:', oldBlock, newBlock);

    this._removeBlock(oldBlock);
    this._setBlock(newBlock);

  }

  _eventResetDefault() {

    this._resetScene();

    this._loadBlocks();

  }

  _eventSetBlock() {}

  _eventRemoveBlock() {}

  _eventReset() {}

  _eventClick(event) {}

  _eventRightClick(event) {}

  _eventHover(event) {}

  _addHoverEffect() {}

  _removeHoverEffect() {}

  _animate() {}

  _animateLoop() {

    if (!this._isAlive) {

      return;

    }

    var frame = this._clock.getElapsedTime() * 1000;

    this._animate(frame);

    requestAnimationFrame(this._animateLoop.bind(this));

  }

  resize() {

    this._width = this._$parent.width();
    this._height = this._$parent.height();
    this._shorter = this._width > this._height ? this._height : this._width;

    this._renderer.setSize(this._width, this._height);

    var distance = Config.world.size / 4 * Config.game.textureSize
      , rate = this._width / this._height;

    this._camera.top = distance;
    this._camera.right = distance * rate;
    this._camera.bottom = -distance;
    this._camera.left = -distance * rate;

    if (this._camera.aspect) {

      this._camera.aspect = this._width / this._height;

    }

    this._camera.updateProjectionMatrix();

  }

  _resetScene() {

    this._scene = null;

    this._scene = new THREE.Scene();

  }

  _loadBlocks() {

    var self = this
      , blocks = world.getBlocks();

    debug.log.game('loadBlocks:', blocks);

    blocks.forEach(function(block) {

      self._setBlock(block);

    });

  }

  _setBlock(block) {

    if (block === null) {

      return;

    }

    var mesh = this._meshes.createMesh(block, this._isFlat);
    this._scene.add(mesh);

    if (Config.game.preview.showBorder) {

      var border = this._meshes.createBorder(block);
      this._scene.add(border);

    }

  }

  _removeBlock(block) {

    if (block === null) {

      return;

    }

    var mesh = this._meshes.getMesh(block);
    this._scene.remove(mesh);

    if (Config.game.preview.showBorder) {

      var border = this._meshes.getBorder(block);
      this._scene.remove(border);

    }

    this._meshes.remove(block);

  }

  destroy() {

    this._isAlive = false;

    world.off();

    this._$dom.off(`mousemove.mousemove${this.id}`);
    this._$dom.off(`click.click${this.id}`);
    this._$dom.off(`contextmenu.contextmenu${this.id}`);
    $window.off(`resize.resize${this.id}`);

    $window.off(`${Event.BLOCK_HOVER_ON}.${Event.BLOCK_HOVER_ON}${this.id}`);
    $window.off(`${Event.BLOCK_HOVER_OFF}.${Event.BLOCK_HOVER_OFF}${this.id}`);

    this._renderer = null;

  }

  render() {

    this._renderer.render(this._scene, this._camera);

  }

}

export default CanvasBase;
