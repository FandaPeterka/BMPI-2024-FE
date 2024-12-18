// src/components/dashboard/TermModal.js

import React, { useState, useEffect } from "react";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const TermModal = ({ isOpen, onClose, onSubmit, initialDate }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  useEffect(() => {
    if (isOpen && initialDate) {
      const d = new Date(initialDate);
      setYear(d.getFullYear());
      setMonth(d.getMonth() + 1);
      setDay(d.getDate());
      setHour(d.getHours());
      setMinute(d.getMinutes());
    }
  }, [initialDate, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const date = new Date(year, month - 1, day, hour, minute).toISOString();
    onSubmit(date);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-header"><Lsi lsi={lsiDashboard.termModalTitle} /></h2>
        <form onSubmit={handleSubmit}>
          <div className="modal-form-group">
            <label><Lsi lsi={lsiDashboard.year} /></label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="modal-input"
              required
            />
          </div>
          <div className="modal-form-group">
            <label><Lsi lsi={lsiDashboard.month} /></label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="modal-input"
              required
              min="1"
              max="12"
            />
          </div>
          <div className="modal-form-group">
            <label><Lsi lsi={lsiDashboard.day} /></label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="modal-input"
              required
              min="1"
              max="31"
            />
          </div>
          <div className="modal-form-group">
            <label><Lsi lsi={lsiDashboard.hour} /></label>
            <input
              type="number"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="modal-input"
              required
              min="0"
              max="23"
            />
          </div>
          <div className="modal-form-group">
            <label><Lsi lsi={lsiDashboard.minute} /></label>
            <input
              type="number"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              className="modal-input"
              required
              min="0"
              max="59"
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="modal-submit-button">
              <Lsi lsi={lsiDashboard.submit} />
            </button>
            <button type="button" onClick={onClose} className="modal-cancel-button">
              <Lsi lsi={lsiDashboard.cancel} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TermModal;