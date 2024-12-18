"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("mongodb");

class SceneMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex( { awid: 1, actId: 1});
  }

  async create(scene){
    return super.insertOne(scene);
  }

  async list(awid, actId, pageInfo) {
    return super.find({awid: awid, actId: actId}, pageInfo, {"sys.cts": 1});
  }

  async listById(awid, sceneIds) {
    const filter = {
      awid: awid,
      ...sceneIds.length > 0 && {_id: {$in: sceneIds.map((id) => new ObjectId(id))}}
    };
    return super.find(filter)
  }

  async listByUser(awid, uuIdentity) {
    return super.find({awid: awid, $or: [{directorId: uuIdentity}, {"characterList.actorList": uuIdentity}]}, {"sys.cts": 1});
  }

  async update(scene) {
    let filter = {
      awid: scene.awid,
      id: scene.id,
    };
    return await super.findOneAndUpdate(filter, scene, "NONE");
  }

  async delete(awid, id){
    let filter = {
      awid: awid,
      id: id,
    };
    await super.deleteOne(filter)
  }

}

module.exports = SceneMongo;
