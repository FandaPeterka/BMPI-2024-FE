import React, { useState } from "react";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const TermModal = ({ isOpen, onClose, onSubmit, initialDate }) => {
  const [year, setYear] = useState(initialDate ? new Date(initialDate).getFullYear() : "");
  const [month, setMonth] = useState(initialDate ? new Date(initialDate).getMonth() + 1 : "");
  const [day, setDay] = useState(initialDate ? new Date(initialDate).getDate() : "");
  const [hour, setHour] = useState(initialDate ? new Date(initialDate).getHours() : "");
  const [minute, setMinute] = useState(initialDate ? new Date(initialDate).getMinutes() : "");

  const handleSubmit = () => {
    const date = new Date(year, month - 1, day, hour, minute).toISOString();
    onSubmit(date);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.termModalTitle} /></h2>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.year} /></label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.month} /></label>
          <input
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.day} /></label>
          <input
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.hour} /></label>
          <input
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="modal-input"
          />
        </div>
        <div className="modal-form-group">
          <label><Lsi lsi={lsiDashboard.minute} /></label>
          <input
            type="number"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            className="modal-input"
          />
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

export default TermModal;