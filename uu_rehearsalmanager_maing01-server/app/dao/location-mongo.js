/* eslint-disable */
"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
    async createSchema() {
        await super.createIndex( { awid: 1, active: 1 });
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

    async update(location){
        const { id, awid, ...locationData } = location;
        let filter = {
            awid: awid,
            id: id
        };

        return await super.findOneAndUpdate(filter, locationData, "NONE");
    }
}

module.exports = LocationMongo;
