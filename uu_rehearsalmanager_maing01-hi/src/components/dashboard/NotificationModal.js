// NotificationModal.js
import React, { useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const NotificationModal = ({ isOpen, onClose, onSend, initialMessage }) => {
  const [message, setMessage] = useState(initialMessage || "");

  const handleSend = () => {
    onSend(message);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.notificationModalTitle} /></h2>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.notificationText} /></label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="modal-textarea"
            rows="4"
          />
        </div>
        <div className="modal-buttons">
          <button onClick={handleSend} className="modal-send-button">
            <Lsi lsi={lsiDashboard.send} />
          </button>
          <button onClick={onClose} className="modal-cancel-button">
            <Lsi lsi={lsiDashboard.cancel} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;