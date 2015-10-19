import Config from '../../config.js';
import World from '../../models/world/world.js';
import CanvasBase from './canvas-base.js';
import Broadcast from '../../utils/broadcast.js';

var world = World.getInstance()
  , broadcast = Broadcast.getInstance();

class Preview extends CanvasBase {

  _setDom() {

    this._$dom = $(Config.html.game.preview);

  }

  _initialize() {

    debug.log.preview('initializing preview ...');

    this._isFlat = Config.game.preview.isFlat;

    this._raycaster = new THREE.Raycaster();

    this._hovered = null;

    this._setLight();
    this._setLine();

    this._loadBlocks();

  }

  _eventHover(event) {

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

  _addHoverEffect(blockId) {

    var mesh = this._meshes.getMeshByBlockId(blockId);

    if (mesh !== null) {

      mesh.material.opacity = 0.5;
      this._hovered = mesh;

    }

  }

  _getInteracts(mouseX, mouseY) {

    var x = (mouseX / this._width) * 2 - 1
      , y = - (mouseY / this._height) * 2 + 1
      , vec = new THREE.Vector3(x, y, 1);

    this._raycaster.setFromCamera(vec, this._camera);

    return this._raycaster.intersectObjects(this._meshes.getMeshes());

  }

  _removeHoverEffect() {

    if (this._hovered !== null) {

      this._hovered.material.opacity = 1;
      this._hovered = null;

    }

  }

  _animate(frame) {

    var progress = (frame % Config.game.preview.rotationSpeed) / Config.game.preview.rotationSpeed
      , progressY = (frame % Config.game.preview.rotationSpeedY) / Config.game.preview.rotationSpeedY
      , rad = progress * 2 * Math.PI
      , radY = progressY * 2 * Math.PI
      , x = Math.cos(rad) * this._cameraDistance
      , y = Math.sin(radY) * this._cameraDistance / 4
      , z = Math.sin(rad) * this._cameraDistance
      , lightX = Math.cos(rad - Math.PI * 0.1) * this._cameraDistance
      , lightZ = Math.sin(rad - Math.PI * 0.1) * this._cameraDistance;

    this._camera.position.x = x;
    this._camera.position.y = y;
    this._camera.position.z = z;
    this._light.position.set(lightX, Config.game.textureSize * 2, lightZ).normalize();
    this._camera.lookAt(this._zero);

    this.render();

  }

  resize() {

    super.resize();

    var base = this._$parent.height() / 2 * Math.sqrt(3)
      , per = this._shorter / Config.world.size;

    this._cameraDistance = base * Config.game.textureSize / per;

  }

  _setLight() {

    this._light = new THREE.DirectionalLight(0xffffff);
    this._light.position.set(1, 1, 1).normalize();
    this._scene.add(this._light);

    this._ambientLight = new THREE.AmbientLight(0xffffff);
    this._scene.add(this._ambientLight);

  }

  _setLine() {

    var geometry = new THREE.Geometry()
      , material = new THREE.LineBasicMaterial({
          color: 0xffffff
        });

    geometry.vertices = [
      this._zero,
      world.direction.clone().multiplyScalar(this._cameraDistance * 0.8)
    ];

    this._line = new THREE.Line(geometry, material);

    this._scene.add(this._line);

  }

  setLine() {

    this._line.geometry.vertices = [
      this._zero,
      world.direction.clone().multiplyScalar(this._cameraDistance * 0.8)
    ];
    this._line.geometry.verticesNeedUpdate = true;

  }

}

export default Preview;
