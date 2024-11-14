/* eslint-disable */
"use strict";
const LocationAbl = require("../../abl/location-abl.js");

class LocationController {

  list(ucEnv) {
    return LocationAbl.list(ucEnv);
  }

  create(ucEnv) {
    return LocationAbl.create(ucEnv);
  }

}

module.exports = new LocationController();