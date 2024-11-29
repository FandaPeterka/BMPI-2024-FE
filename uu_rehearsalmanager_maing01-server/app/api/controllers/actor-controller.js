"use strict";
const ActorAbl = require("../../abl/actor-abl.js");

class ActorController {

  list(ucEnv) {
    return ActorAbl.list(ucEnv);
  }

}

module.exports = new ActorController();
