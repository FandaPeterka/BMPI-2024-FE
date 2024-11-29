"use strict";
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const { LoggerFactory } = require("uu_appg01_server").Logging;
const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/rehearsal-error.js");
const logger = LoggerFactory.get("RehearsalAbl");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}/unsupportedKeys`
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}/unsupportedKeys`
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}/unsupportedKeys`
  },
  memberListUnsupportedKeys: {
    code: `${Errors.MemberList.UC_CODE}/unsupportedKeys`
  }
};

class RehearsalAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("rehearsal");
    this.sceneDao = DaoFactory.getDao("scene");
  }

  async create(ucEnv) {
    logger.debug("Validating CreateRehearsal input")
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("rehearsalCreateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.createUnsupportedKeys.code, Errors.Create.invalidDtoIn);

    dtoIn  = {...dtoIn, ...{
      awid: ucEnv.getUri().getAwid(),
      date: dtoIn.date ? dtoIn.date : "",
      sceneList: [],
      valid: false,
      presenceList: []
    }};

    let dtoOut;
    try {
      let scenes = await this.sceneDao.list(dtoIn.awid, dtoIn.actId);
      let sceneList = [];
      for (const scene of scenes.itemList) {
        sceneList.push(scene.id);
      }
      dtoIn.sceneList = sceneList;
      logger.debug("Going to create rehearsal");
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.RehearsalDaoCreateFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async list(ucEnv) {
    logger.debug("Validating RehearsalList input");
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("rehearsalListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.listUnsupportedKeys.code, Errors.List.invalidDtoIn);

    let dtoOut;
    try {
      logger.debug("Going to get list of scenes with user");
      const uuIdentity = ucEnv.getSession().getIdentity().getUuIdentity();
      const awid = ucEnv.getUri().getAwid();

      let scenesWhereUserActorOrDirector = await this.sceneDao.listByUser(awid, uuIdentity)
      const sceneIds = scenesWhereUserActorOrDirector.itemList.map(item => item.id.toString());

      logger.debug("Going to get rehearsal list");
      // TODO invalid rehearsals can be listed by ORGANISER
      let isValid = true;
      dtoOut = await this.dao.list(awid, sceneIds, isValid, null, null, dtoIn.pageInfo);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.List.RehearsalDaoListFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async update(ucEnv) {
    logger.debug("Validating RehearsalUpdate input");
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("rehearsalUpdateDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.updateUnsupportedKeys.code, Errors.Update.invalidDtoIn);

    dtoIn  = {...dtoIn, ...{
        awid: ucEnv.getUri().getAwid()
    }};

    let dtoOut;
    try {
      logger.debug("Going to update rehearsal");
      dtoOut = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.Update.RehearsalDaoUpdateFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async memberList(ucEnv) {
    logger.debug("Validating RehearsalMemberList input");
    let dtoIn = ucEnv.getDtoIn();
    let validationResult = this.validator.validate("rehearsalMemberListDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(dtoIn, validationResult, WARNINGS.memberListUnsupportedKeys.code, Errors.MemberList.invalidDtoIn);

    dtoIn  = {...dtoIn, ...{
        awid: ucEnv.getUri().getAwid()
    }};

    let dtoOut = {};
    try {
      logger.debug("Going to get MemberList of rehearsal");
      const rehearsal = await this.dao.get(dtoIn);
      const sceneList = await this.sceneDao.list(dtoIn.awid, rehearsal.sceneList);
      dtoOut.itemList = [...new Set(sceneList.itemList.flatMap(item => [
        item.directorId,
        ...item.characterList.flatMap(character => character.actorList)
      ]))];
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        throw new Errors.MemberList.RehearsalDaoGetFailed({uuAppErrorMap}, e)
      }
      throw e;
    }
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

}

module.exports = new RehearsalAbl();
