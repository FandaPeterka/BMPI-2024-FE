"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class RehearsalMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex( { awid: 1, actId: 1});
  }

  async create(rehearsal){
    return super.insertOne(rehearsal);
  }

  async list(awid, sceneIds, isValid, pageInfo) {
    return super.find({awid: awid, sceneList: {$in: sceneIds}, valid: isValid}, pageInfo, {"sys.cts": 1});
  }

  async update(rehearsal) {
    let filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };
    return await super.findOneAndUpdate(filter, rehearsal, "NONE");
  }

}

module.exports = RehearsalMongo;
