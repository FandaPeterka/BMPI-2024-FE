"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const { ObjectId } = require("mongodb");

class NotificationMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, userId: 1, seen: 1 });
  }

  async list(awid, dtoIn) {
    const { pageInfo, seen, userId } = dtoIn;
    return super.find({ awid: awid, seen: seen, userId: userId }, pageInfo, { "sys.cts": 1 });
  }

  async create(notification) {
    return super.insertOne(notification);
  }

  async update(notification) {
    let filter = {
      awid: notification.awid,
      id: notification.id
    };
    return await super.findOneAndUpdate(filter, notification, "NONE");
  }
}

module.exports = NotificationMongo;