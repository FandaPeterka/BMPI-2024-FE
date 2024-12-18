// src/components/dashboard/RehearsalLocation.js

import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import LocationModal from "./LocationModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalLocation = ({ locationId, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal, locations, reloadLocations, userRoles } = useDataContext(); // Přidáno userRoles
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const loc = locations.find((loc) => loc.id === locationId);
    setCurrentLocation(loc);
  }, [locationId, locations]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (newLocationId) => {
    updateRehearsal({ id: rehearsalId, locationId: newLocationId });
    setIsModalOpen(false);
  };

  // Kontrola, zda uživatel má roli "Organizers"
  if (!userRoles.includes("Organizers")) {
    return (
      <div className="rehearsal-location-container">
        <strong><Lsi lsi={lsiDashboard.locationLabel} /></strong> {currentLocation ? currentLocation.name : <Lsi lsi={lsiDashboard.locationNotSet} />}
      </div>
    );
  }

  return (
    <div className="rehearsal-location-container">
      <strong><Lsi lsi={lsiDashboard.locationLabel} /></strong> {currentLocation ? currentLocation.name : <Lsi lsi={lsiDashboard.locationNotSet} />}
      <FaMapMarkerAlt
        className="rehearsal-location-icon"
        onClick={handleOpenModal}
        title={<Lsi lsi={lsiDashboard.editLocationTooltip} />}
      />
      <LocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialLocationId={locationId}
      />
    </div>
  );
};

export default RehearsalLocation;