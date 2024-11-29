/* eslint-disable */
"use strict";
const RehearsalmanagerActorUseCaseError = require("./rehearsalmanager-actor-use-case-error.js");

const List = {
    UC_CODE: `${RehearsalmanagerActorUseCaseError.ERROR_PREFIX}list`,
    invalidDtoIn: class extends RehearsalmanagerActorUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/invalidDtoIn`;
            this.message = "DtoIn is not valid.";
        }
    },
    ActorDaoListFailed: class extends RehearsalmanagerActorUseCaseError {
        constructor() {
            super(...arguments);
            this.code = `${List.UC_CODE}/actorDaoListFailed`;
            this.message = "Getting actor list failed.";
        }
    }
}

module.exports = {
  List
}
