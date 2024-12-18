// src/components/dashboard/PlaySelectionModal.js

import React, { useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const PlaySelectionModal = ({ isOpen, onClose, onSelectPlay }) => {
  const { plays, locations } = useDataContext();
  const [selectedPlayId, setSelectedPlayId] = useState("");
  const [selectedLocationId, setSelectedLocationId] = useState("");

  const handleSubmit = () => {
    if (selectedPlayId && selectedLocationId) {
      onSelectPlay(selectedPlayId, selectedLocationId);
    } else {
      // Přidání notifikace nebo upozornění pro uživatele
      alert("Prosím, vyberte hru a lokaci.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.selectPlay} /></h2>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.playLabel} /></label>
          <select
            onChange={(e) => setSelectedPlayId(e.target.value)}
            value={selectedPlayId}
            className="modal-select"
            required
          >
            <option value="" disabled>
              <Lsi lsi={lsiDashboard.selectPlay} />
            </option>
            {plays.map((play) => (
              <option key={play.id} value={play.id}>
                {play.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.selectLocation} /></label>
          <select
            onChange={(e) => setSelectedLocationId(e.target.value)}
            value={selectedLocationId}
            className="modal-select"
            required
          >
            <option value="" disabled>
              <Lsi lsi={lsiDashboard.selectLocation} />
            </option>
            {locations.filter(loc => loc.active).map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name} - {loc.address}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-buttons">
          <button onClick={handleSubmit} className="modal-submit-button">
            <Lsi lsi={lsiDashboard.submit} />
          </button>
          <button onClick={onClose} className="modal-cancel-button">
            <Lsi lsi={lsiDashboard.cancel} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaySelectionModal;