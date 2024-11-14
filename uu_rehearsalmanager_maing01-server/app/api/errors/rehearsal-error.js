"use strict";
const RehearsalmanagerMainUseCaseError = require("./rehearsalmanager-main-use-case-error.js");

const Create = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehearsal/create`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoCreateFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/rehearsalDaoCreateFailed`;
      this.message = 'Creating rehearsal failed';
    }
  }
}

const List = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehearsal/list`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoListFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/rehearsalDaoListFailed`;
      this.message = 'Getting rehearsal list failed';
    }
  }
}

const Update = {
  UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/rehearsal/update`,

  invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoUpdateFailed: class extends RehearsalmanagerMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/rehearsalDaoUpdateFailed`;
      this.message = 'Updating rehearsal failed';
    }
  }
}

module.exports = {
  Create,
  List,
  Update
}
