// src/api/SceneService.js

import Calls from "../calls";
import {
  SCENE_CREATE,
  SCENE_LIST,
  SCENE_UPDATE,
  SCENE_DELETE,
} from "./api";

const SceneService = {
  /**
   * Vytvoří novou scénu.
   * @param {Object} sceneData - Data nové scény (actId, name, notes, figures, ...)
   */
  async createScene(sceneData) {
    try {
      const response = await Calls.call("cmdPost", SCENE_CREATE, sceneData);
      return response; 
    } catch (error) {
      console.error("Error creating scene:", error);
      throw error;
    }
  },

  /**
   * Získá seznam scén pro danou hru (actId).
   * @param {string} actId - ID hry.
   * @param {number} [pageIndex=0]
   * @param {number} [pageSize=1000]
   */
  async listScenes(actId, pageIndex = 0, pageSize = 1000) {
    try {
      const params = {
        actId,
        pageInfo: {
          pageIndex,
          pageSize,
        },
      };
      const response = await Calls.call("cmdGet", SCENE_LIST, params);
      return response; 
    } catch (error) {
      console.error("Error listing scenes:", error);
      throw error;
    }
  },

  /**
   * Aktualizuje existující scénu.
   * @param {Object} sceneData - Aktualizovaná data scény (id, name, notes, figures, ...)
   */
  async updateScene(sceneData) {
    try {
      const response = await Calls.call("cmdPost", SCENE_UPDATE, sceneData);
      return response;
    } catch (error) {
      console.error("Error updating scene:", error);
      throw error;
    }
  },

  /**
   * Smaže scénu podle ID.
   * @param {string} sceneId - ID scény
   */
  async deleteScene(sceneId) {
    try {
      const dtoIn = { id: sceneId };
      const response = await Calls.call("cmdPost", SCENE_DELETE, dtoIn);
      return response; 
    } catch (error) {
      console.error("Error deleting scene:", error);
      throw error;
    }
  },
};

export default SceneService;