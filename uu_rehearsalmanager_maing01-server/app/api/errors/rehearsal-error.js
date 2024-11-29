"use strict";
const RehearsalmanagerRehearsalUseCaseError = require("./rehearsalmanager-rehearsal-use-case-error.js");

const Create = {
  UC_CODE: `${RehearsalmanagerRehearsalUseCaseError.ERROR_PREFIX}create`,

  invalidDtoIn: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoCreateFailed: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}/rehearsalDaoCreateFailed`;
      this.message = 'Creating rehearsal failed';
    }
  }
}

const List = {
  UC_CODE: `${RehearsalmanagerRehearsalUseCaseError.ERROR_PREFIX}list`,

  invalidDtoIn: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoListFailed: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${List.UC_CODE}/rehearsalDaoListFailed`;
      this.message = 'Getting rehearsal list failed';
    }
  }
}

const Update = {
  UC_CODE: `${RehearsalmanagerRehearsalUseCaseError.ERROR_PREFIX}update`,

  invalidDtoIn: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoUpdateFailed: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Update.UC_CODE}/rehearsalDaoUpdateFailed`;
      this.message = 'Updating rehearsal failed';
    }
  }
}

const MemberList = {
  UC_CODE: `${RehearsalmanagerRehearsalUseCaseError.ERROR_PREFIX}member/list`,

  invalidDtoIn: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${MemberList.UC_CODE}/invalidDtoIn`;
      this.message = 'DtoIn is not valid.';
    }
  },
  RehearsalDaoGetFailed: class extends RehearsalmanagerRehearsalUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${MemberList.UC_CODE}/rehearsalDaoGetFailed`;
      this.message = 'Getting rehearsal member list failed';
    }
  }
}

module.exports = {
  Create,
  List,
  Update,
  MemberList
}
