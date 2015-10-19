import Config from '../../config.js';

class CanvasMeshes {

  constructor() {

    this._meshes = [];
    this._borders = [];

  }

  getMeshes() {

    var meshes = [];

    for (let idx in this._meshes) {

      meshes.push(this._meshes[idx].mesh);

    }

    return meshes;

  }

  getMesh(block) {

    for (let idx in this._meshes) {

      if (this._meshes[idx].blockId === block.id) {

        return this._meshes[idx].mesh;

      }

    }

    return null;

  }

  getMeshByBlockId(blockId) {

    for (let idx in this._meshes) {

      if (this._meshes[idx].blockId === blockId) {

        return this._meshes[idx].mesh;

      }

    }

    return null;

  }

  getBlockByMeshId(meshId) {

    for (let idx in this._meshes) {

      if (this._meshes[idx].meshId === meshId) {

        return this._meshes[idx].block;

      }

    }

    return null;

  }

  getBlockIdByMeshId(meshId) {

    for (let idx in this._meshes) {

      if (this._meshes[idx].meshId === meshId) {

        return this._meshes[idx].blockId;

      }

    }

    return null;

  }

  getBorder(block) {

    for (let idx in this._borders) {

      if (this._borders[idx].blockId === block.id) {

        return this._borders[idx].border;

      }

    }

    return null;

  }

  createMesh(block, isFlat = false) {

    var geometry = new THREE.BoxGeometry(Config.game.textureSize, Config.game.textureSize, Config.game.textureSize)
      , mat = isFlat ? THREE.MeshBasicMaterial : THREE.MeshLambertMaterial
      , material = new mat({
        color: block.color,
        ambient: block.color,
        side: THREE.DoubleSide
      })
      , mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = (block.x - Config.world.size / 2 << 0) * Config.game.textureSize;
    mesh.position.y = (block.y - Config.world.size / 2 << 0) * Config.game.textureSize;
    mesh.position.z = (block.z - Config.world.size / 2 << 0) * Config.game.textureSize;

    this._meshes.push({
      blockId: block.id,
      meshId: mesh.uuid,
      block: block,
      mesh: mesh
    });

    return mesh;

  }

  createBorder(block) {

    var mesh = this.getMesh(block)
      , border = new THREE.BoxHelper(mesh);

    border.material.color.set(block.borderColor);

    this._borders.push({
      blockId: block.id,
      meshId: mesh.uuid,
      block: block,
      border: border
    });

    return border;

  }

  remove(block) {

    for (let idx in this._meshes) {

      if (this._meshes[idx].blockId === block.id) {

        return this._meshes.splice(idx, 1);

      }

    }

  }

}

export default CanvasMeshes;