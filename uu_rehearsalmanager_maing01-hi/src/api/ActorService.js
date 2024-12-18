import Calls from "../calls";
import { ACTOR_LIST } from "./api";
import { People } from "uu_plus4u5g02";

const ActorService = {
  async listActors(params) {
    try {
      const response = await Calls.call("cmdGet", ACTOR_LIST, params);
      const uuIdentities = response.itemList || [];

      // Načtení jmen pro každou uuIdentity
      const actorDetails = await Promise.all(
        uuIdentities.map(async (uuId) => {
          try {
            const personData = await People.getPerson({ uuIdentity: uuId });
            return {
              uuIdentity: uuId,
              name: personData.name || uuId
            };
          } catch (e) {
            console.warn(`Nepodařilo se načíst údaje pro uuIdentity ${uuId}`, e);
            return { uuIdentity: uuId, name: uuId };
          }
        })
      );

      return actorDetails; // { uuIdentity, name }
    } catch (error) {
      console.error("Error listing actors:", error);
      throw error;
    }
  },
};

export default ActorService;