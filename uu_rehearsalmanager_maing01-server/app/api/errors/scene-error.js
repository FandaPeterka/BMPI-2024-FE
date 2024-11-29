"use strict";
const RehearsalmanagerSceneUseCaseError = require("./rehearsalmanager-scene-use-case-error.js");

const Create = {
  UC_CODE: `${RehearsalmanagerSceneUseCaseError.ERROR_PREFIX}create`,

  invalidDtoIn: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoCreateFailed: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/sceneDaoCreateFailed`;
      this.message = 'Creating scene failed';
    }
  }
}

const List = {
  UC_CODE: `${RehearsalmanagerSceneUseCaseError.ERROR_PREFIX}list`,

  invalidDtoIn: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoListFailed: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/sceneDaoListFailed`;
      this.message = 'Getting scene list failed';
    }
  }
}

const Update = {
  UC_CODE: `${RehearsalmanagerSceneUseCaseError.ERROR_PREFIX}update`,

  invalidDtoIn: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoUpdateFailed: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/sceneDaoUpdateFailed`;
      this.message = 'Updating scene failed';
    }
  },
  ScenePlannedInRehearsal: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/scenePlannedInRehearsal`;
      this.message = 'Updating scene failed because it is planned in active rehearsal';
    }
  }
}

const Delete = {
  UC_CODE: `${RehearsalmanagerSceneUseCaseError.ERROR_PREFIX}delete`,

  invalidDtoIn: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  SceneDaoDeleteFailed: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}/sceneDaoDeleteFailed`;
      this.message = 'Deleting scene failed';
    }
  },
  ScenePlannedInRehearsal: class extends RehearsalmanagerSceneUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}/scenePlannedInRehearsal`;
      this.message = 'Deleting scene failed because it is planned in active rehearsal';
    }
  }
}

module.exports = {
  Create,
  List,
  Update,
  Delete
}
