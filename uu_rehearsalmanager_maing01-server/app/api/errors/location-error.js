/* eslint-disable */
"use strict";
const RehearsalmanagerMainUseCaseError = require("./rehearsalmanager-main-use-case-error.js");

const List = {
    UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/location/list`,
    invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    LocationDaoListFailed: class extends RehearsalmanagerMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/locationDaoListFailed`;
            this.message = "Getting location list failed.";
        }
    }
}

const Create = {
    UC_CODE: `${RehearsalmanagerMainUseCaseError.ERROR_PREFIX}/location/create`,
    
    invalidDtoIn: class extends RehearsalmanagerMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    LocationDaoCreateFailed: class extends RehearsalmanagerMainUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}/locationDaoCreateFailed`;
            this.message = "Creating location failed.";
        }
    }
}

module.exports = {
  List,
  Create
}