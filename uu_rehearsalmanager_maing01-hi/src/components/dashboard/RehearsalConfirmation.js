import React, { useState } from "react";
import { FaCheck, FaTimes, FaBell } from "react-icons/fa";
import NotificationModal from "./NotificationModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalConfirmation = ({ valid, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal, addNotification, actors } = useDataContext();

  const toggleValidation = () => {
    updateRehearsal({ id: rehearsalId, valid: !valid });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSendNotification = (message) => {
    actors.forEach((actor) => {
      const newNotification = {
        id: Date.now().toString(),
        text: message,
        userId: actor.id,
        seen: false,
        awid: "583ebf71c50ed33d7c03dda9",
        sys: { cts: new Date().toISOString(), mts: new Date().toISOString(), rev: 1 },
      };
      addNotification(newNotification);
    });
    setIsModalOpen(false);
  };

  return (
    <div className="rehearsal-confirmation-container">
      <strong><Lsi lsi={lsiDashboard.statusLabel} /></strong> <Lsi lsi={valid ? lsiDashboard.valid : lsiDashboard.invalid} />
      {valid ? (
        <FaTimes className="rehearsal-confirmation-icon" onClick={toggleValidation} title={<Lsi lsi={lsiDashboard.invalidate} />} />
      ) : (
        <FaCheck className="rehearsal-confirmation-icon" onClick={toggleValidation} title={<Lsi lsi={lsiDashboard.validate} />} />
      )}
      <FaBell className="rehearsal-confirmation-icon" onClick={handleOpenModal} title={<Lsi lsi={lsiDashboard.sendNotification} />} />
      <NotificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSend={handleSendNotification}
        initialMessage=""
      />
    </div>
  );
};

export default RehearsalConfirmation;