// src/api/NotificationService.js

import Calls from "../calls";
import {
  NOTIFICATION_CREATE,
  NOTIFICATION_LIST,
  NOTIFICATION_UPDATE
} from "./api";

/**
 * NotificationService - Služba pro správu notifikací.
 */
const NotificationService = {
  /**
   * Odesílá notifikaci uživateli.
   * @param {Object} params
   * @param {string} params.text - Text notifikace.
   * @param {string} params.userId - ID uživatele, kterému je notifikace určena.
   * @returns {Promise<Object>} - Vrací vytvořenou notifikaci.
   */
  async sendNotification({ text, userId }) {
    const dtoIn = { text, userId };
    try {
      const response = await Calls.call("cmdPost", NOTIFICATION_CREATE, dtoIn);
      return response; // Vrací vytvořenou notifikaci
    } catch (error) {
      console.error("Error sending notification:", error);
      throw error;
    }
  },

  /**
   * Získává seznam notifikací pro uživatele.
   * @param {Object} params
   * @param {string} params.userId - ID uživatele.
   * @param {boolean} [params.seen] - Filtr pro zobrazení pouze přečtených/nepřečtených notifikací.
   * @returns {Promise<Object>} - Vrací seznam notifikací.
   */
  async fetchNotifications({ userId, seen = undefined }) {
    let url = `${NOTIFICATION_LIST}?userId=${userId}`;
    if (seen !== undefined) {
      url += `&seen=${seen}`;
    }

    try {
      const response = await Calls.call("cmdGet", url);
      return response; // { itemList: [...], pageInfo: {...}, uuAppErrorMap: {...} }
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  },

  /**
   * Aktualizuje stav notifikace (např. označení jako přečtené).
   * @param {Object} params
   * @param {string} params.id - ID notifikace.
   * @param {Object} params.updates - Aktualizace (např. { seen: true }).
   * @returns {Promise<Object>} - Vrací aktualizovanou notifikaci.
   */
  async updateNotification({ id, updates }) {
    const dtoIn = { id, ...updates };
    try {
      const response = await Calls.call("cmdPost", NOTIFICATION_UPDATE, dtoIn);
      return response; // Vrací aktualizovanou notifikaci
    } catch (error) {
      console.error("Error updating notification:", error);
      throw error;
    }
  }
};

export default NotificationService;