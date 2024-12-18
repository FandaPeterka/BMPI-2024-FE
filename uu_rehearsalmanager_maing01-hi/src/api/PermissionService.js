// src/api/PermissionService.js

import Calls from "../calls";
import { SYS_WORKSPACE_PERMISSION_LIST } from "./api";

/**
 * PermissionService - Služba pro správu oprávnění a rolí uživatelů.
 */
const PermissionService = {
  /**
   * Získá seznam rolí pro dané uživatele.
   * @param {Object} params
   * @param {Array<string>} params.profileList - Seznam profilů k dotazu (např. ["Actors", "Directors", "Organizers"]).
   * @param {Array<string>} params.uuIdentityList - Seznam UUID identit uživatelů.
   * @returns {Promise<Object>} - Vrací odpověď z API.
   */
  async listUserRoles({ profileList, uuIdentityList }) {
    const dtoIn = {
      profileList,
      uuIdentityList,
      pageInfo: {
        pageIndex: 0,
        pageSize: 1000,
      },
    };

    try {
      const response = await Calls.call("cmdGet", SYS_WORKSPACE_PERMISSION_LIST, dtoIn);
      return response; // { itemList: [...], pageInfo: {...}, uuAppErrorMap: {...} }
    } catch (error) {
      console.error("Error fetching user roles:", error);
      throw error;
    }
  },
};

export default PermissionService;