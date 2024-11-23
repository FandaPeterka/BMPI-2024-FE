// CreateLocationForm.js
import React, { useState, useEffect } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const CreateLocationForm = ({ onClose }) => {
  const { locations, addLocation, updateLocation, deleteLocation, setActiveLocation, setInactiveLocation } = useDataContext();
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

  const handleSubmit = () => {
    const newLocation = {
      id: isEditing ? locationId : Date.now().toString(),
      name,
      address,
      active: isActive,
      awid: "583ebf71c50ed33d7c03dda9",
      sys: {
        cts: new Date().toISOString(),
        mts: new Date().toISOString(),
        rev: 1,
      },
    };
    if (isEditing) {
      updateLocation(newLocation);
    } else {
      addLocation(newLocation);
    }
    onClose();
  };

  const handleDelete = () => {
    deleteLocation(locationId);
    onClose();
  };

  const handleSetActive = () => {
    setActiveLocation(locationId);
    setIsActive(true);
  };

  const handleSetInactive = () => {
    setInactiveLocation(locationId);
    setIsActive(false);
  };

  const handleSelectLocation = (e) => {
    setLocationId(e.target.value);
  };

  return (
    <>
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.selectLocation} />
        </label>
        <select
          value={locationId}
          onChange={handleSelectLocation}
          className="modal-select"
        >
          <option value="">
            {<Lsi lsi={lsiDashboard.newLocation} />}
          </option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id} className={loc.active ? "active-location" : "inactive-location"}>
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
        />
      </div>
      <div className="modal-form-group">
        <label>
          <Lsi lsi={lsiDashboard.locationStatus} />
        </label>
        <p className={isActive ? "active-status" : "inactive-status"}>
          {isActive ? <Lsi lsi={lsiDashboard.active} /> : <Lsi lsi={lsiDashboard.inactive} />}
        </p>
      </div>
      <div className="modal-buttons">
        <button onClick={handleSubmit} className="modal-submit-button">
          <Lsi lsi={lsiDashboard.save} />
        </button>
        {isEditing && (
          <>
            <button onClick={handleDelete} className="modal-delete-button">
              <Lsi lsi={lsiDashboard.delete} />
            </button>
            <button onClick={handleSetActive} className="modal-active-button">
              <Lsi lsi={lsiDashboard.setActive} />
            </button>
            <button onClick={handleSetInactive} className="modal-inactive-button">
              <Lsi lsi={lsiDashboard.setInactive} />
            </button>
          </>
        )}
        <button onClick={onClose} className="modal-cancel-button">
          <Lsi lsi={lsiDashboard.cancel} />
        </button>
      </div>
    </>
  );
};

export default CreateLocationForm;