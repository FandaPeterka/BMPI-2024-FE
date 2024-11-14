"use strict";
const SceneAbl = require("../../abl/scene-abl.js");

class SceneController {

  create(ucEnv) {
    return SceneAbl.create(ucEnv);
  }

  list(ucEnv) {
    return SceneAbl.list(ucEnv);
  }

  update(ucEnv) {
    return SceneAbl.update(ucEnv);
  }

}

module.exports = new SceneController();
