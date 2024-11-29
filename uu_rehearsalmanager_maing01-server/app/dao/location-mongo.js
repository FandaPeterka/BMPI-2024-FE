/* eslint-disable */
"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex( { awid: 1, actId: 1});
    }

    async list(awid, active, pageInfo) {
        if(active !== undefined){
            return super.find({awid: awid, active: active}, pageInfo, {"sys.cts": 1});
        } else {
            return super.find({awid: awid}, pageInfo, {"sys.cts": 1});
        }
    }

    async create(location){
        return super.insertOne(location);
    }
}

module.exports = LocationMongo;
