import Config from '../../config.js';
import World from '../../models/world/world.js';
import CanvasBase from './canvas-base.js';
import Broadcast from '../../utils/broadcast.js';
import DrawSettings from '../../models/draw-settings/draw-settings.js';


import BlockMono from '../../models/block/block-mono.js';

var world = World.getInstance()
  , broadcast = Broadcast.getInstance()
  , drawSettings = DrawSettings.getInstance();

class Preview extends CanvasBase {

  _setDom() {

    this._$dom = $(Config.html.game.editor);

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

    this.render();

  }

  _eventClick(event) {

    var interacts = this._getInteracts(event.offsetX, event.offsetY);

    if (interacts.length) {

      var mesh = interacts[0].object
        , block = this._meshes.getBlockByMeshId(mesh.uuid)
        , self = this;

      world.setBlock(new BlockMono(block.x + world.direction.x, block.y + world.direction.y, block.z + world.direction.z, drawSettings.color, drawSettings.borderColor));

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

        broadcast.execute(Broadcast.BLOCK_HOVER_REMOVE);
        broadcast.execute(Broadcast.BLOCK_HOVER_ADD, [blockId]);

      }

      return;

    }

    broadcast.execute(Broadcast.BLOCK_HOVER_REMOVE);

  }

  _getInteracts(mouseX, mouseY) {

    var x = (mouseX / this._width) * 2 - 1
      , y = - (mouseY / this._height) * 2 + 1
      , vec = new THREE.Vector3(x, y, 1);

    this._raycaster.setFromCamera(vec, this._camera);

    return this._raycaster.intersectObjects(this._meshes.getMeshes());

  }

  _addHoverEffect(blockId) {

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

    this.setCamera();

  }

  setCamera() {

    var camera = world.direction.clone().multiplyScalar(this._cameraDistance);
    this._camera.position.x = camera.x;
    this._camera.position.y = camera.y;
    this._camera.position.z = camera.z;
    this._camera.lookAt(this._zero);

  }

}

export default Preview;
