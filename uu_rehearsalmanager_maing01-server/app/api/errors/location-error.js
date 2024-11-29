/* eslint-disable */
"use strict";
const RehearsalmanagerLocationUseCaseError = require("./rehearsalmanager-location-use-case-error.js");

const List = {
    UC_CODE: `${RehearsalmanagerLocationUseCaseError.ERROR_PREFIX}list`,
    invalidDtoIn: class extends RehearsalmanagerLocationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    LocationDaoListFailed: class extends RehearsalmanagerLocationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/locationDaoListFailed`;
            this.message = "Getting location list failed.";
        }
    }
}

const Create = {
    UC_CODE: `${RehearsalmanagerLocationUseCaseError.ERROR_PREFIX}create`,

    invalidDtoIn: class extends RehearsalmanagerLocationUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${Create.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    LocationDaoCreateFailed: class extends RehearsalmanagerLocationUseCaseError {
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
