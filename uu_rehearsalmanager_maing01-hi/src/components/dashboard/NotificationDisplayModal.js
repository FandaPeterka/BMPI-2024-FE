// src/components/dashboard/NotificationDisplayModal.js

import React from "react";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import "./NotificationDisplayModal.css"; // Přidání stylů

const NotificationDisplayModal = ({ isOpen, onClose, notification }) => {
  if (!isOpen || !notification) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.notificationDetails} /></h2>
        <div className="modal-content">
          <p>{notification.text}</p>
          <p><strong><Lsi lsi={lsiDashboard.receivedAt} /></strong> {new Date(notification.sys.cts).toLocaleString()}</p>
          {/* Přidejte další detaily notifikace, pokud jsou k dispozici */}
        </div>
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-close-button">
            <Lsi lsi={lsiDashboard.close} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDisplayModal;