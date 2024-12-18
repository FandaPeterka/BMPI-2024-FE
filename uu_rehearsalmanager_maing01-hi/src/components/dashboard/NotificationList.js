// src/components/dashboard/NotificationList.js

import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import NotificationDisplayModal from "./NotificationDisplayModal"; // Import
import "./NotificationList.css"; // Přidání stylů

const NotificationList = () => {
  const { notifications, loadNotifications, markNotificationAsSeen } = useDataContext();
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isDisplayModalOpen, setIsDisplayModalOpen] = useState(false);

  useEffect(() => {
    loadNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Notifications in context:", notifications); // Přidáno logování
  }, [notifications]);

  const handleMarkAsSeen = async (notificationId) => {
    try {
      await markNotificationAsSeen(notificationId);
      // Notifikace je již odstraněna ze stavu po úspěšném označení jako přečtené
    } catch (error) {
      console.error("Error marking notification as seen:", error);
      alert("Nepodařilo se aktualizovat notifikaci.");
    }
  };

  const handleOpenDisplayModal = (notification) => {
    setSelectedNotification(notification);
    setIsDisplayModalOpen(true);
  };

  const handleCloseDisplayModal = () => {
    setSelectedNotification(null);
    setIsDisplayModalOpen(false);
  };

  return (
    <div className="notification-list-container">
      <h2><Lsi lsi={lsiDashboard.yourNotifications} /></h2>
      {notifications.length === 0 ? (
        <p><Lsi lsi={lsiDashboard.noNotifications} /></p>
      ) : (
        <ul className="notification-list">
          {notifications.map(notification => (
            <li key={notification.id} className="notification-item">
              <span onClick={() => handleOpenDisplayModal(notification)} className="notification-text">
                {notification.text}
              </span>
              <button onClick={() => handleMarkAsSeen(notification.id)} className="notification-mark-button">
                <Lsi lsi={lsiDashboard.markAsSeen} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <NotificationDisplayModal
        isOpen={isDisplayModalOpen}
        onClose={handleCloseDisplayModal}
        notification={selectedNotification}
      />
    </div>
  );
};

export default NotificationList;