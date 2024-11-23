// CreateLocationModal.js
import React from "react";
import CreateLocationForm from "./CreateLocationForm";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const CreateLocationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header">
          <Lsi lsi={lsiDashboard.createLocation} />
        </h2>
        <CreateLocationForm onClose={onClose} />
      </div>
    </div>
  );
};

export default CreateLocationModal;