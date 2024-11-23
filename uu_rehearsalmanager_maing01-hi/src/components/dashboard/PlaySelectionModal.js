// PlaySelectionModal.js
import React from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const PlaySelectionModal = ({ isOpen, onClose, onSelectPlay }) => {
  const { plays } = useDataContext();

  const handleSelect = (e) => {
    onSelectPlay(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.selectPlay} /></h2>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.playLabel} /></label>
          <select onChange={handleSelect} className="modal-select" defaultValue="">
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
        <div className="modal-buttons">
          <button onClick={onClose} className="modal-cancel-button">
            <Lsi lsi={lsiDashboard.cancel} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaySelectionModal;