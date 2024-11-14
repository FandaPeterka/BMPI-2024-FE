"use strict";
const RehearsalAbl = require("../../abl/rehearsal-abl.js");

class RehearsalController {

  create(ucEnv) {
    return RehearsalAbl.create(ucEnv);
  }

  list(ucEnv) {
    return RehearsalAbl.list(ucEnv);
  }

  update(ucEnv) {
    return RehearsalAbl.update(ucEnv);
  }
}

module.exports = new RehearsalController();
