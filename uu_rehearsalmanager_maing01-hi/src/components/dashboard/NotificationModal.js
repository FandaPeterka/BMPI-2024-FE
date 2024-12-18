// src/components/dashboard/NotificationModal.js

import React, { useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import User from "./User"; // Import User komponenty

const NotificationModal = ({ isOpen, onClose, rehearsalId, participants }) => {
  const [message, setMessage] = useState("");
  const { sendNotification } = useDataContext();

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!message.trim()) {
      alert("Prosím, zadejte text notifikace.");
      return;
    }

    try {
      for (const userId of participants) {
        await sendNotification(message, userId);
      }
      alert("Notifikace byly úspěšně odeslány.");
      setMessage("");
      onClose();
    } catch (error) {
      console.error("Error sending notifications:", error);
      alert("Nepodařilo se odeslat notifikace.");
    }
  };

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
            placeholder="Zadejte text notifikace..."
          />
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.selectRecipients} /></label>
          <div className="recipients-list">
            {participants.length === 0 ? (
              <p><Lsi lsi={lsiDashboard.noParticipants} /></p>
            ) : (
              participants.map(userId => (
                <User key={userId} user={userId} />
              ))
            )}
          </div>
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