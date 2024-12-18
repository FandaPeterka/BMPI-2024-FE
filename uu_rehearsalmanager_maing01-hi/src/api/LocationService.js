// src/api/LocationService.js

import Calls from "../calls";
import {
  LOCATION_LIST,
  LOCATION_CREATE,
  LOCATION_UPDATE,
} from "./api";

const LocationService = {
  /**
   * Získá seznam lokací z backendu.
   * @param {Object} params - Parametry pro získání lokací.
   * @param {number} params.pageIndex - Index stránky.
   * @param {number} params.pageSize - Počet položek na stránku.
   * @param {boolean} [params.active] - Filtr aktivních lokací.
   * @returns {Promise<Object>} - Vrací objekt s itemList, pageInfo a uuAppErrorMap.
   */
  async listLocations({ pageIndex = 0, pageSize = 1000, active = undefined } = {}) {
    let url = `${LOCATION_LIST}?pageInfo.pageIndex=${pageIndex}&pageInfo.pageSize=${pageSize}`;
    if (typeof active === "boolean") {
      url += `&active=${active}`;
    }

    try {
      const response = await Calls.call("cmdGet", url);
      return response; // { itemList: [...], pageInfo: {...}, uuAppErrorMap: {...} }
    } catch (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }
  },

  /**
   * Vytvoří novou lokaci.
   * @param {Object} params - Parametry pro vytvoření lokace.
   * @param {string} params.name - Název lokace.
   * @param {string} params.address - Adresa lokace.
   * @param {boolean} params.active - Aktivní status lokace.
   * @returns {Promise<Object>} - Vrací vytvořenou lokaci.
   */
  async createLocation({ name, address, active }) {
    const dtoIn = { name, address, active };

    try {
      const response = await Calls.call("cmdPost", LOCATION_CREATE, dtoIn);
      return response; // Vrací nově vytvořenou lokaci
    } catch (error) {
      console.error("Error creating location:", error);
      throw error;
    }
  },

  /**
   * Aktualizuje existující lokaci.
   * @param {Object} params - Parametry pro aktualizaci lokace.
   * @param {string} params.id - ID lokace.
   * @param {string} [params.name] - Nový název lokace.
   * @param {string} [params.address] - Nová adresa lokace.
   * @param {boolean} [params.active] - Nový aktivní status lokace.
   * @returns {Promise<Object>} - Vrací aktualizovanou lokaci.
   */
  async updateLocation({ id, name, address, active }) {
    const dtoIn = { id, name, address, active };
    try {
      const response = await Calls.call("cmdPost", LOCATION_UPDATE, dtoIn);
      return response;
    } catch (error) {
      console.error("Error updating location:", error);
      throw error;
    }
  },

  
};

export default LocationService;