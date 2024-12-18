// src/context/DashboardContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import LocationService from "../api/LocationService";
import RehearsalService from "../api/RehearsalService";
import NotificationService from "../api/NotificationService";
import PermissionService from "../api/PermissionService"; // Přidáno
import { PLAY_CONSTANTS } from "../constants/PlayConstants";
import { useRequestStatus } from "./RequestStatusContext";
import { ACTOR_LIST } from "../api/api";
import { useSession } from "uu5g05";

const DashboardContext = createContext();

export const useDataContext = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const { setPending, setError, setSuccess } = useRequestStatus();
  const { identity } = useSession();
  const currentUserUuIdentity = identity?.uuIdentity;

  // Přidání console.log pro ověření identity
  useEffect(() => {
    console.log("DashboardContext - Identity object:", identity);
    console.log("DashboardContext - Current user UuIdentity:", currentUserUuIdentity);
  }, [identity, currentUserUuIdentity]);

  const [rehearsals, setRehearsals] = useState([]);
  const [plays, setPlays] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [locations, setLocations] = useState([]);
  const [membersByRehearsal, setMembersByRehearsal] = useState({});
  const [actors, setActors] = useState([]);
  const [userRoles, setUserRoles] = useState([]); // Přidáno

  // Načtení her
  const loadPlays = () => {
    const extractedPlays = PLAY_CONSTANTS.map(p => ({ id: p.id, name: p.name }));
    setPlays(extractedPlays);
  };

  // Načtení lokací
  const loadLocations = async () => {
    setPending("Loading locations...");
    try {
      const data = await LocationService.listLocations({ pageIndex: 0, pageSize: 1000, active: true });
      setLocations(data.itemList || []);
      setSuccess("Locations loaded successfully.");
    } catch (error) {
      console.error("Failed to load locations.", error);
      setLocations([]);
      setError("Nepodařilo se načíst lokace.");
    }
  };

  // Načtení herců
  const loadActors = async () => {
    setPending("Loading actors...");
    try {
      const data = await RehearsalService.call("cmdGet", ACTOR_LIST, { pageIndex: 0, pageSize: 1000 });
      setActors(data.itemList || []);
      setSuccess("Actors loaded successfully.");
    } catch (error) {
      console.error("Failed to load actors.", error);
      setActors([]);
      setError("Nepodařilo se načíst herce.");
    }
  };

  // Načtení rehearsals
  const loadRehearsals = async () => {
    setPending("Loading rehearsals...");
    try {
      const data = await RehearsalService.listRehearsals({ pageIndex: 0, pageSize: 1000 });
      console.log("Rehearsals data:", data);
      setRehearsals(data.itemList || []);
      setSuccess("Rehearsals loaded successfully.");
      // Načtení členů pro všechny zkoušky
      await loadMembersForAllRehearsals(data.itemList || []);
    } catch (error) {
      console.error("Error loading rehearsals:", error);
      setError("Nepodařilo se načíst zkoušky.");
    }
  };

  // Načtení členů pro všechny zkoušky
  const loadMembersForAllRehearsals = async (rehearsalsList) => {
    const promises = rehearsalsList.map(r => loadMembersForRehearsal(r.id));
    await Promise.all(promises);
  };

  // Načtení členů pro jednotlivou zkoušku
  const loadMembersForRehearsal = async (rehearsalId) => {
    setPending("Loading rehearsal members...");
    try {
      const response = await RehearsalService.getRehearsalMembers(rehearsalId);
      setMembersByRehearsal(prev => ({ ...prev, [rehearsalId]: response.itemList || [] }));
      setSuccess("Rehearsal members loaded successfully.");
    } catch (error) {
      console.error("Failed to load members for rehearsal", rehearsalId, error);
      setMembersByRehearsal(prev => ({ ...prev, [rehearsalId]: [] }));
      setError("Nepodařilo se načíst členy zkoušky.");
    }
  };

  // Načtení rolí uživatele
  const loadUserRoles = async () => {
    if (!currentUserUuIdentity) return;
    setPending("Loading user roles...");
    try {
      const response = await PermissionService.listUserRoles({
        profileList: ["Actors", "Directors", "Organizers"],
        uuIdentityList: [currentUserUuIdentity],
      });
      const roles = response.itemList.map(item => item.profile);
      setUserRoles(roles);
      console.log("DashboardContext - User roles:", roles); // Logování rolí
      setSuccess("User roles loaded successfully.");
    } catch (error) {
      console.error("Failed to load user roles.", error);
      setUserRoles([]);
      setError("Nepodařilo se načíst role uživatele.");
    }
  };

  // Načtení detailů aktuálního uživatele a notifikací při změně identity
  const loadAllData = async () => {
    loadPlays();
    await loadLocations();
    await loadActors();
    await loadRehearsals();
    await loadUserRoles(); // Přidáno
  };

  useEffect(() => {
    if (currentUserUuIdentity) {
      loadAllData();
      loadNotifications(); // Načte notifikace při načtení dat
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserUuIdentity]);

  // Přidání nové zkoušky
  const addRehearsal = async (newRehearsal) => {
    setPending("Adding rehearsal...");
    const play = plays.find(p => p.name === newRehearsal.playName);
    const actId = play ? play.id : "unknownActId";

    // Zajistíme, že locationId nebude prázdný
    let locationId = newRehearsal.locationId;
    if (!locationId || locationId.trim().length === 0) {
      // Vybereme první aktivní lokaci
      const activeLocation = locations.find(l => l.active);
      if (!activeLocation) {
        setError("Nepodařilo se vytvořit zkoušku. Nejdříve vytvořte a aktivujte lokaci.");
        return;
      }
      locationId = activeLocation.id;
    }

    const dtoIn = {
      locationId,
      date: newRehearsal.date || new Date().toISOString(),
      actId,
      presenceList: newRehearsal.presenceList || []
    };

    try {
      const created = await RehearsalService.createRehearsal(dtoIn);
      console.log("Rehearsal created:", created);
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Rehearsal created successfully.");
    } catch (error) {
      console.error("Failed to create rehearsal.", error);
      setError("Nepodařilo se vytvořit zkoušku.");
    }
  };

  // Aktualizace zkoušky
  const updateRehearsal = async (updatedData) => {
    setPending("Updating rehearsal...");
    const rehearsal = rehearsals.find(r => r.id === updatedData.id);
    if (!rehearsal) {
      console.error("Rehearsal not found for update.");
      setError("Rehearsal not found.");
      return;
    }

    const dtoIn = { id: rehearsal.id };
    if (updatedData.date !== undefined) dtoIn.date = updatedData.date;
    if (updatedData.locationId !== undefined) dtoIn.locationId = updatedData.locationId;
    if (updatedData.valid !== undefined) dtoIn.valid = updatedData.valid;
    if (updatedData.presenceList !== undefined) dtoIn.presenceList = updatedData.presenceList;

    console.log("Updating rehearsal with dtoIn:", dtoIn); // Added logging

    try {
      const updated = await RehearsalService.updateRehearsal(dtoIn);
      console.log("Rehearsal updated:", updated);
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Rehearsal updated successfully.");
    } catch (error) {
      console.error("Failed to update rehearsal.", error);
      setError("Nepodařilo se aktualizovat zkoušku.");
    }
  };

  // Aktualizace statusu přítomnosti uživatele
  const updatePresenceStatus = async (rehearsalId, userId, status) => {
    console.log(`Updating presence status for user ${userId} to ${status} in rehearsal ${rehearsalId}`); // Added logging
    const rehearsal = rehearsals.find(r => r.id === rehearsalId);
    if (!rehearsal) {
      console.error("Rehearsal not found for updating presence status.");
      setError("Rehearsal not found.");
      return;
    }

    let newPresenceList = rehearsal.presenceList || [];

    if (status === "Accepted") {
      if (!newPresenceList.includes(userId)) {
        newPresenceList = [...newPresenceList, userId];
      }
    } else if (status === "Refused") {
      newPresenceList = newPresenceList.filter(u => u !== userId);
    }

    console.log("New presenceList:", newPresenceList); // Added logging

    await updateRehearsal({ id: rehearsalId, presenceList: newPresenceList });
  };

  // Odeslání notifikace
  const sendNotification = async (text, userId) => {
    setPending("Sending notification...");
    try {
      await NotificationService.sendNotification({ text, userId });
      setSuccess("Notification sent successfully.");
    } catch (error) {
      console.error("Failed to send notification.", error);
      setError("Nepodařilo se odeslat notifikaci.");
    }
  };

  // Načtení notifikací pro aktuálního uživatele
  const loadNotifications = async () => {
    if (!currentUserUuIdentity) return;
    setPending("Loading notifications...");
    try {
      const data = await NotificationService.fetchNotifications({ userId: currentUserUuIdentity, seen: false });
      setNotifications(data.itemList || []);
      setSuccess("Notifications loaded successfully.");
    } catch (error) {
      console.error("Failed to load notifications.", error);
      setNotifications([]);
      setError("Nepodařilo se načíst notifikace.");
    }
  };

  // Aktualizace notifikace (např. označení jako přečtené)
  const markNotificationAsSeen = async (notificationId) => {
    setPending("Updating notification...");
    try {
      await NotificationService.updateNotification({ id: notificationId, updates: { seen: true } });
      setNotifications(prev => prev.filter(n => n.id !== notificationId));
      setSuccess("Notification marked as seen.");
    } catch (error) {
      console.error("Failed to update notification.", error);
      setError("Nepodařilo se aktualizovat notifikaci.");
    }
  };

  // Přidání nové lokace
  const addLocation = async (newLocation) => {
    setPending("Adding location...");
    try {
      await LocationService.createLocation(newLocation);
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Location added successfully.");
    } catch (error) {
      console.error("Failed to create location.", error);
      setError("Nepodařilo se vytvořit lokaci.");
    }
  };

  // Aktualizace lokace
  const updateLocation = async (updatedLocation) => {
    setPending("Updating location...");
    try {
      await LocationService.updateLocation(updatedLocation);
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Location updated successfully.");
    } catch (error) {
      console.error("Failed to update location.", error);
      setError("Nepodařilo se aktualizovat lokaci.");
    }
  };

  // Nastavení lokace jako aktivní
  const setActiveLocation = async (locationId) => {
    setPending("Setting location as active...");
    try {
      await LocationService.updateLocation({ id: locationId, active: true });
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Location set as active successfully.");
    } catch (error) {
      console.error("Failed to set location as active.", error);
      setError("Nepodařilo se nastavit lokaci jako aktivní.");
    }
  };

  // Nastavení lokace jako neaktivní
  const setInactiveLocation = async (locationId) => {
    setPending("Setting location as inactive...");
    try {
      await LocationService.updateLocation({ id: locationId, active: false });
      await loadAllData(); // Načte všechna data znovu
      setSuccess("Location set as inactive successfully.");
    } catch (error) {
      console.error("Failed to set location as inactive.", error);
      setError("Nepodařilo se nastavit lokaci jako neaktivní.");
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        rehearsals,
        plays,
        notifications,
        locations,
        membersByRehearsal,
        actors,
        userRoles, // Přidáno
        currentUserUuIdentity,
        addRehearsal,
        updateRehearsal,
        updatePresenceStatus,
        addLocation,
        updateLocation,
        setActiveLocation,
        setInactiveLocation,
        sendNotification, // Přidáno
        markNotificationAsSeen, // Přidáno
        loadNotifications, // Přidáno
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;