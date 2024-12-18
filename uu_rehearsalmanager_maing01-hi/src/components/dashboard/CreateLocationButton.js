// src/components/dashboard/CreateLocationButton.js

import React, { useState } from "react";
import CreateLocationModal from "./CreateLocationModal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import { useDataContext } from "../../context/DashboardContext"; // Přidáno

const CreateLocationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userRoles } = useDataContext(); // Přidáno

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Kontrola, zda uživatel má roli "Organizers"
  if (!userRoles.includes("Organizers")) {
    return null;
  }

  return (
    <>
      <FaMapMarkerAlt
        className="create-location-button"
        onClick={handleOpenModal}
        title={<Lsi lsi={lsiDashboard.createLocation} />}
      />
      <CreateLocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CreateLocationButton;