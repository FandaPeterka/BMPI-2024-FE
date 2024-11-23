// LocationModal.js
import React, { useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const LocationModal = ({ isOpen, onClose, onSubmit, initialLocationId }) => {
  const { locations } = useDataContext();
  const [locationId, setLocationId] = useState(initialLocationId || "");

  const handleSubmit = () => {
    onSubmit(locationId);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.locationModalTitle} /></h2>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.locationLabel} /></label>
          <select
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            className="modal-select"
          >
            <option value="">{<Lsi lsi={lsiDashboard.selectLocation} />}</option>
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

export default LocationModal;