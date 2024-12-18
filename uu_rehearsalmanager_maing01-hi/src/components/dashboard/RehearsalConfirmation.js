// src/components/dashboard/RehearsalConfirmation.js

import React, { useState } from "react";
import { FaCheck, FaTimes, FaBell } from "react-icons/fa";
import NotificationModal from "./NotificationModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalConfirmation = ({ valid, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal, membersByRehearsal, userRoles } = useDataContext(); // Přidáno userRoles

  const toggleValidation = () => {
    // Kontrola, zda uživatel má roli "Organizers" před provedením akce
    if (userRoles.includes("Organizers")) {
      updateRehearsal({ id: rehearsalId, valid: !valid });
    } else {
      alert("Nemáte oprávnění měnit status zkoušky.");
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Získání seznamu účastníků pro tuto zkoušku
  const participants = membersByRehearsal[rehearsalId] || [];

  return (
    <div className="rehearsal-confirmation-container">
      <strong><Lsi lsi={lsiDashboard.statusLabel} /></strong> <Lsi lsi={valid ? lsiDashboard.valid : lsiDashboard.invalid} />
      
      {/* Kontrola, zda uživatel má roli "Organizers" pro zobrazení ikon FaCheck a FaTimes */}
      {userRoles.includes("Organizers") ? (
        valid ? (
          <FaTimes
            className="rehearsal-confirmation-icon"
            onClick={toggleValidation}
            title={<Lsi lsi={lsiDashboard.invalidate} />}
          />
        ) : (
          <FaCheck
            className="rehearsal-confirmation-icon"
            onClick={toggleValidation}
            title={<Lsi lsi={lsiDashboard.validate} />}
          />
        )
      ) : null}

      {/* Kontrola pro zobrazení ikony FaBell pouze pro Organizers */}
      {userRoles.includes("Organizers") && (
        <>
          <FaBell
            className="notification-icon"
            onClick={handleOpenModal}
            title={<Lsi lsi={lsiDashboard.sendNotification} />}
          />
          <NotificationModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            rehearsalId={rehearsalId}
            participants={participants}
          />
        </>
      )}
    </div>
  );
};

export default RehearsalConfirmation;