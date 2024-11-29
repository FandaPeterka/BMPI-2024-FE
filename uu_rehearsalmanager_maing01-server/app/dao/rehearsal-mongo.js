"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class RehearsalMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex( { awid: 1, actId: 1});
  }

  async create(rehearsal){
    return super.insertOne(rehearsal);
  }

  async get(rehearsal) {
    const filter = {
      awid: rehearsal.awid,
      id: rehearsal.id,
    };

    return super.findOne(filter);
  }

  async list(awid, sceneIds, isValid, dateFrom, dateTo, pageInfo) {
    const filter = {
      awid: awid,
      ...sceneIds.length > 0 && {sceneList: {$in: sceneIds}},
      valid: isValid,
      ...((dateFrom || dateTo) && {
        date: {
          ...(dateFrom && {$gte: dateFrom}),
          ...(dateTo && {$lte: dateTo})
        }
      }),
    };
    return super.find(filter, pageInfo, {"sys.cts": 1});
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
