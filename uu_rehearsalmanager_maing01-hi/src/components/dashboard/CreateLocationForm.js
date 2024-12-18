// src/components/dashboard/CreateLocationForm.js

import React, { useState, useEffect } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const CreateLocationForm = ({ onClose }) => {
  const { locations, addLocation, updateLocation, setActiveLocation, setInactiveLocation, reloadLocations } = useDataContext();
  const [locationId, setLocationId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (locationId) {
      const selectedLocation = locations.find((loc) => loc.id === locationId);
      if (selectedLocation) {
        setName(selectedLocation.name);
        setAddress(selectedLocation.address);
        setIsActive(selectedLocation.active);
        setIsEditing(true);
      }
    } else {
      setName("");
      setAddress("");
      setIsActive(true);
      setIsEditing(false);
    }
  }, [locationId, locations]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLocation = {
      name,
      address,
      active: isActive,
      // awid bude automaticky nastaveno na backendu, není potřeba jej nastavovat zde
    };
    if (isEditing) {
      try {
        await updateLocation({ id: locationId, name, address, active: isActive });
        await reloadLocations(); // Načte nejnovější data
        onClose();
      } catch (error) {
        console.error("Error updating location:", error);
        // Zde můžete přidat notifikaci pro uživatele
      }
    } else {
      try {
        await addLocation(newLocation);
        await reloadLocations(); // Načte nejnovější data
        onClose();
      } catch (error) {
        console.error("Error adding location:", error);
        // Zde můžete přidat notifikaci pro uživatele
      }
    }
  };

  /*
  // Odstraněno: Funkce handleDelete a tlačítko pro mazání
  const handleDelete = async () => {
    if (window.confirm("Opravdu chcete smazat tuto lokaci?")) {
      try {
        await deleteLocation(locationId);
        onClose();
      } catch (error) {
        console.error("Error deleting location:", error);
        // Zde můžete přidat notifikaci pro uživatele
      }
    }
  };
  */

  const handleSetActive = async () => {
    try {
      await setActiveLocation(locationId);
      await reloadLocations(); // Načte nejnovější data
    } catch (error) {
      console.error("Error setting location as active:", error);
      // Zde můžete přidat notifikaci pro uživatele
    }
  };

  const handleSetInactive = async () => {
    try {
      await setInactiveLocation(locationId);
      await reloadLocations(); // Načte nejnovější data
    } catch (error) {
      console.error("Error setting location as inactive:", error);
      // Zde můžete přidat notifikaci pro uživatele
    }
  };

  const handleSelectLocation = (e) => {
    setLocationId(e.target.value);
  };

  const handleSelectBoxFocus = () => {
    reloadLocations(); // Načte nejnovější lokace
  };

  return (
    <form onSubmit={handleSubmit} className="modal-form">
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.selectLocation} />
        </label>
        <select
          value={locationId}
          onChange={handleSelectLocation}
          onFocus={handleSelectBoxFocus} // Přidáno
          className="modal-select"
        >
          <option value="">
            <Lsi lsi={lsiDashboard.newLocation} />
          </option>
          {locations.map((loc) => (
            <option
              key={loc.id}
              value={loc.id}
              className={loc.active ? "active-location" : "inactive-location"}
            >
              {loc.name} - {loc.address}
            </option>
          ))}
        </select>
      </div>
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.locationName} />
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="modal-input"
          required
        />
      </div>
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.locationAddress} />
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="modal-input"
          required
        />
      </div>
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.locationStatus} />
        </label>
        <p className={isActive ? "active-status" : "inactive-status"}>
          {isActive ? (
            <Lsi lsi={lsiDashboard.active} />
          ) : (
            <Lsi lsi={lsiDashboard.inactive} />
          )}
        </p>
      </div>
      <div className="modal-buttons">
        <button type="submit" className="modal-submit-button">
          <Lsi lsi={lsiDashboard.save} />
        </button>
        {isEditing && (
          <>
            {/* Odstraněno: Tlačítko pro mazání */}
            {/* <button
              type="button"
              onClick={handleDelete}
              className="modal-delete-button"
            >
              <Lsi lsi={lsiDashboard.delete} />
            </button> */}
            <button
              type="button"
              onClick={handleSetActive}
              className="modal-active-button"
            >
              <Lsi lsi={lsiDashboard.setActive} />
            </button>
            <button
              type="button"
              onClick={handleSetInactive}
              className="modal-inactive-button"
            >
              <Lsi lsi={lsiDashboard.setInactive} />
            </button>
          </>
        )}
        <button
          type="button"
          onClick={onClose}
          className="modal-cancel-button"
        >
          <Lsi lsi={lsiDashboard.cancel} />
        </button>
      </div>
    </form>
  );
};

export default CreateLocationForm;