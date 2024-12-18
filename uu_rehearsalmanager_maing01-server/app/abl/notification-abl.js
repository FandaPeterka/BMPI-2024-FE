/* eslint-disable */
"use strict";

const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/notification-error.js");
const logger = LoggerFactory.get("NotificationAbl");

const WARNINGS = {
    listUnsupportedKeys: {
        code: `${Errors.List.UC_CODE}/unsupportedKeys`
    },
    createUnsupportedKeys: {
        code: `${Errors.Create.UC_CODE}/unsupportedKeys`
    }
}

class NotificationAbl {

    constructor() {
        this.validator = Validator.load();
        this.dao = DaoFactory.getDao("notification");
    }

    async list(ucEnv) {
        logger.debug("Validating NotificationList input");
        let dtoIn = ucEnv.getDtoIn();
        let validationResult = this.validator.validate("notificationListDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.invalidDtoIn);

        let dtoOut;

        if(dtoIn.seen === undefined) dtoIn.seen = false;
        try {
            logger.debug("Going to get notification list");
            dtoOut = await this.dao.list(ucEnv.getUri().getAwid(), dtoIn);
        } catch (e) {
            if (e instanceof ObjectStoreError) {
                throw new Errors.List.NotificationDaoListFailed({uuAppErrorMap}, e);
            }
            throw e;
        }
        dtoOut.uuAppErrorMap = uuAppErrorMap;
        return dtoOut;
    }

    async create(ucEnv) {
        logger.debug("Validating NotificationCreate input");
        let dtoIn = ucEnv.getDtoIn();
        let validationResult = this.validator.validate("notificationCreateDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.invalidDtoIn);

        dtoIn = {...dtoIn,  awid: ucEnv.getUri().getAwid(), seen: false};
        let dtoOut;

        try {
            logger.debug("Going to create notification");
            dtoOut = await this.dao.create(dtoIn);
        } catch (e) {
            if (e instanceof ObjectStoreError) {
                throw new Errors.Create.NotificationDaoCreateFailed({uuAppErrorMap}, e);
            }
            throw e;
        }
        dtoOut.uuAppErrorMap = uuAppErrorMap;
        return dtoOut;
    }

    async update(ucEnv) {
        logger.debug("Validating NotificationUpdate input");
        let dtoIn = ucEnv.getDtoIn();
        let validationResult = this.validator.validate("notificationUpdateDtoInType", dtoIn);
        let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.invalidDtoIn);

        dtoIn = {...dtoIn,  awid: ucEnv.getUri().getAwid()};
        let dtoOut;

        try {
            logger.debug("Going to update notification");
            dtoOut = await this.dao.update(dtoIn);
        } catch (e) {
            if (e instanceof ObjectStoreError) {
                throw new Errors.Create.NotificationDaoCreateFailed({uuAppErrorMap}, e);
            }
            throw e;
        }
        dtoOut.uuAppErrorMap = uuAppErrorMap;
        return dtoOut;
    }

}

module.exports = new NotificationAbl();