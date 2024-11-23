import React, { createContext, useContext, useState } from "react";
import {
  mockActors,
  mockRehearsals,
  mockPlays,
  mockNotifications,
  mockLocations,
} from "../mock/mockData";
import { useRequestStatus } from "./RequestStatusContext";

const DashboardContext = createContext();

export const useDataContext = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const { setPending, setError, setSuccess } = useRequestStatus();
  const [actors, setActors] = useState(mockActors || []);
  const [rehearsals, setRehearsals] = useState(mockRehearsals || []);
  const [plays, setPlays] = useState(mockPlays || []);
  const [notifications, setNotifications] = useState(mockNotifications || []);
  const [locations, setLocations] = useState(mockLocations || []);

  const simulateRequest = (callback) => {
    setPending();
    setTimeout(() => {
      try {
        callback();
        setSuccess();
      } catch (error) {
        setError(error.message);
      }
    }, 500); 
  };

  const addRehearsal = (newRehearsal) => {
    simulateRequest(() => {
      setRehearsals((prev) => [...prev, newRehearsal]);
    });
  };

  const updateRehearsal = (updatedRehearsal) => {
    simulateRequest(() => {
      setRehearsals((prev) =>
        prev.map((rehearsal) =>
          rehearsal.id === updatedRehearsal.id
            ? { ...rehearsal, ...updatedRehearsal }
            : rehearsal
        )
      );
    });
  };

  const updatePresenceStatus = (rehearsalId, userId, status) => {
    simulateRequest(() => {
      setRehearsals((prev) =>
        prev.map((rehearsal) => {
          if (rehearsal.id === rehearsalId) {
            const updatedPresenceList = rehearsal.presenceList.map((presence) =>
              presence.userId === userId ? { ...presence, status } : presence
            );
            return { ...rehearsal, presenceList: updatedPresenceList };
          }
          return rehearsal;
        })
      );
    });
  };

  const addNotification = (newNotification) => {
    simulateRequest(() => {
      setNotifications((prev) => [...prev, newNotification]);
    });
  };

  const addLocation = (newLocation) => {
    simulateRequest(() => {
      setLocations((prev) => [...prev, newLocation]);
    });
  };

  const updateLocation = (updatedLocation) => {
    simulateRequest(() => {
      setLocations((prev) =>
        prev.map((location) =>
          location.id === updatedLocation.id
            ? { ...location, ...updatedLocation }
            : location
        )
      );
    });
  };

  const deleteLocation = (locationId) => {
    simulateRequest(() => {
      setLocations((prev) => prev.filter((location) => location.id !== locationId));
    });
  };

  const setActiveLocation = (locationId) => {
    simulateRequest(() => {
      setLocations((prev) =>
        prev.map((location) =>
          location.id === locationId ? { ...location, active: true } : location
        )
      );
    });
  };

  const setInactiveLocation = (locationId) => {
    simulateRequest(() => {
      setLocations((prev) =>
        prev.map((location) =>
          location.id === locationId ? { ...location, active: false } : location
        )
      );
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        actors,
        rehearsals,
        plays,
        notifications,
        locations,
        addRehearsal,
        updateRehearsal,
        updatePresenceStatus,
        addNotification,
        addLocation,
        updateLocation,
        deleteLocation,
        setActiveLocation,
        setInactiveLocation,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;