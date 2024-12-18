// src/api/RehearsalService.js

import Calls from "../calls";
import {
  REHEARSAL_CREATE,
  REHEARSAL_LIST,
  REHEARSAL_UPDATE,
  REHEARSAL_MEMBER_LIST
} from "./api";

const RehearsalService = {
  /**
   * Vytvoří novou zkoušku.
   * @param {Object} rehearsalData {locationId, date, actId, presenceList: []}
   */
  async createRehearsal(rehearsalData) {
    try {
      const response = await Calls.call("cmdPost", REHEARSAL_CREATE, rehearsalData);
      console.log("Rehearsal created:", response); // Debugging
      return response; 
    } catch (error) {
      console.error("Error creating rehearsal:", error);
      throw error;
    }
  },

  /**
   * Získá seznam zkoušek.
   * @param {Object} params - Např. {pageIndex, pageSize}
   */
  async listRehearsals({ pageIndex = 0, pageSize = 1000 } = {}) {
    try {
      let url = `${REHEARSAL_LIST}?pageInfo.pageIndex=${pageIndex}&pageInfo.pageSize=${pageSize}`;
      const response = await Calls.call("cmdGet", url, {});
      console.log("Rehearsals fetched:", response); // Debugging
      return response;
    } catch (error) {
      console.error("Error listing rehearsals:", error);
      throw error;
    }
  },

  /**
   * Aktualizuje existující zkoušku.
   * @param {Object} rehearsalData {id, date?, locationId?, valid?, presenceList?}
   */
  async updateRehearsal(rehearsalData) {
    try {
      const response = await Calls.call("cmdPost", REHEARSAL_UPDATE, rehearsalData);
      console.log("Rehearsal updated:", response); // Debugging
      return response;
    } catch (error) {
      console.error("Error updating rehearsal:", error);
      throw error;
    }
  },

  /**
   * Získá členy zkoušky.
   * @param {string} rehearsalId
   */
  async getRehearsalMembers(rehearsalId) {
    try {
      const params = `?id=${rehearsalId}`;
      const response = await Calls.call("cmdGet", `${REHEARSAL_MEMBER_LIST}${params}`, {});
      console.log(`Members for rehearsal ${rehearsalId}:`, response); // Debugging
      return response; 
    } catch (error) {
      console.error("Error getting rehearsal members:", error);
      throw error;
    }
  },
};

export default RehearsalService;