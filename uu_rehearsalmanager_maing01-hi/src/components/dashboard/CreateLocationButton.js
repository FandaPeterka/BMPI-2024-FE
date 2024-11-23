// CreateLocationButton.js
import React, { useState } from "react";
import CreateLocationModal from "./CreateLocationModal";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const CreateLocationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <FaMapMarkerAlt className="create-location-button" onClick={handleOpenModal} title={<Lsi lsi={lsiDashboard.createLocation} />} />
      <CreateLocationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CreateLocationButton;