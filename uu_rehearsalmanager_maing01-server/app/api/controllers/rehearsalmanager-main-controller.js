"use strict";
const RehearsalmanagerMainAbl = require("../../abl/rehearsalmanager-main-abl.js");

class RehearsalmanagerMainController {
  init(ucEnv) {
    return RehearsalmanagerMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return RehearsalmanagerMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return RehearsalmanagerMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new RehearsalmanagerMainController();
