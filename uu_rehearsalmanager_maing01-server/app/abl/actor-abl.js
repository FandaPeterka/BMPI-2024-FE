"use strict";
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const {LoggerFactory} = require("uu_appg01_server").Logging;
const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/actor-error.js");
const logger = LoggerFactory.get("ActorAbl");

const WARNINGS = {
    listUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}/unsupportedKeys`
    }
};

class ActorAbl {

    constructor() {
        this.validator = Validator.load();
        this.permissionDao = DaoFactory.getDao("sysPermission");
    }

    async list(ucEnv) {
        logger.debug("Validating ActorList input");
        let dtoIn = ucEnv.getDtoIn();
        let validationResult = this.validator.validate("actorListDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.invalidDtoIn);

        let dtoOut;
        try {
            logger.debug("Going to get actor list");

            const actorProfileList = {profileList: ["Actors"]};
            const actors = await this.permissionDao.listByUuIdentityAndAppProfile(ucEnv.getUri().getAwid(), actorProfileList, dtoIn.pageInfo);
            dtoOut = {
                ...{itemList: actors.itemList.map((actor) => actor.uuIdentity)}
            };
        } catch (e) {
            if (e instanceof ObjectStoreError) {
                throw new Errors.List.ActorDaoListFailed({uuAppErrorMap}, e)
            }
            throw e;
        }
        dtoOut.uuAppErrorMap = uuAppErrorMap;
        return dtoOut;
    }

}

module.exports = new ActorAbl();
