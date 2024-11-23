import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import LocationModal from "./LocationModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalLocation = ({ locationId, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal, locations } = useDataContext();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (newLocationId) => {
    updateRehearsal({ id: rehearsalId, locationId: newLocationId });
    setIsModalOpen(false);
  };

  const location = locations.find((loc) => loc.id === locationId);

  return (
    <div className="rehearsal-location-container">
      <strong><Lsi lsi={lsiDashboard.locationLabel} /></strong> {location ? location.name : <Lsi lsi={lsiDashboard.locationNotSet} />}
      <FaMapMarkerAlt className="rehearsal-location-icon" onClick={handleOpenModal} title={<Lsi lsi={lsiDashboard.editLocationTooltip} />} />
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