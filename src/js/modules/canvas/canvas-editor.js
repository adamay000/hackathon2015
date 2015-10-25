import Config from '../../config.js';
import Event from '../../event.js';
import World from '../../models/world/world.js';
import CanvasBase from './canvas-base.js';
import DrawSettings from '../../models/draw-settings/draw-settings.js';


import BlockMono from '../../models/block/block-mono.js';

var world = World.getInstance()
  , drawSettings = DrawSettings.getInstance()
  , $document = $(document);

class Preview extends CanvasBase {

  _setDom() {

    this._$dom = $(Config.html.game.editor);

  }

  _createCamera() {

    super._createCamera();

    this._camera.position.x = 0;
    this._camera.position.y = 0;
    this._camera.position.z = 1000;
    this._camera.lookAt(this._zero);

    this._controls = new THREE.TrackballControls(this._camera, this._renderer.domElement);
    this._controls.noPan = true;
    this._controls.rotateSpeed = 10;

    console.log(this._controls);

  }

  _initialize() {

    debug.log.editor('initializing editor ...');

    this._isFlat = true;

    this._raycaster = new THREE.Raycaster();

    this._hovered = null;

    this._lastHoverEvent = null;

    this._loadBlocks();

  }

  _animate(frame) {

    this._controls.update();

    this.render();

  }

  _eventClick(event) {

    var interacts = this._getInteracts(event.offsetX, event.offsetY);

    if (interacts.length) {

      var mesh = interacts[0].object
        , direction = interacts[0].face.normal
        , block = this._meshes.getBlockByMeshId(mesh.uuid);

      world.setBlock(new BlockMono(block.x + direction.x, block.y + direction.y, block.z + direction.z, drawSettings.color, drawSettings.borderColor));

    }

  }

  _eventRightClick(event) {

    event.preventDefault();

    var interacts = this._getInteracts(event.offsetX, event.offsetY);

    if (interacts.length) {

      var mesh = interacts[0].object
        , block = this._meshes.getBlockByMeshId(mesh.uuid);

      world.removeBlock(block);

    }

  }

  _eventSetBlock() {

    if (this._lastHoverEvent === null) {

      return;

    }

    var self = this;

    setTimeout(function() {
      self._eventHover(self._lastHoverEvent);
    }, 10);

  }

  _eventHover(event) {

    this._lastHoverEvent = event;

    var interacts = this._getInteracts(event.offsetX, event.offsetY);

    if (interacts.length) {

      var mesh = interacts[0].object;

      if (mesh !== this._hovered) {

        var blockId = this._meshes.getBlockIdByMeshId(mesh.uuid);

        $document.trigger(Event.BLOCK_HOVER_OFF);
        $document.trigger(Event.BLOCK_HOVER_ON, [blockId]);

      }

      return;

    }

    $document.trigger(Event.BLOCK_HOVER_OFF);

  }

  _getInteracts(mouseX, mouseY) {

    var x = (mouseX / this._width) * 2 - 1
      , y = - (mouseY / this._height) * 2 + 1
      , vec = new THREE.Vector3(x, y, 1);

    this._raycaster.setFromCamera(vec, this._camera);

    return this._raycaster.intersectObjects(this._meshes.getMeshes());

  }

  _addHoverEffect(event, blockId) {

    var mesh = this._meshes.getMeshByBlockId(blockId);

    if (mesh !== null) {

      mesh.material.opacity = 0.8;
      this._hovered = mesh;

    }

  }

  _removeHoverEffect() {

    if (this._hovered !== null) {

      this._hovered.material.opacity = 1;
      this._hovered = null;

    }

  }

  resize() {

    super.resize();

    var base = this._$parent.height() / 2 * Math.sqrt(3)
      , per = this._shorter / Config.world.size;

    this._cameraDistance = base * Config.game.textureSize / per;

    this._controls.minDistance = this._cameraDistance * 0.2;
    this._controls.maxDistance = this._cameraDistance * 2;

    this._controls.handleResize();

  }

  destroy() {

    super.destroy();

    this._controls.dispose();
    this._controls = null;

  }

}

export default Preview;
