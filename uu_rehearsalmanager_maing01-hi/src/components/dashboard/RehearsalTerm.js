// src/components/dashboard/RehearsalTerm.js

import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import TermModal from "./TermModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalTerm = ({ term, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal, userRoles } = useDataContext(); // Přidáno userRoles

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (newDate) => {
    updateRehearsal({ id: rehearsalId, date: newDate });
    setIsModalOpen(false);
  };

  // Kontrola, zda uživatel má roli "Organizers"
  if (!userRoles.includes("Organizers")) {
    return (
      <div className="rehearsal-term-container">
        <strong><Lsi lsi={lsiDashboard.termLabel} /></strong> {new Date(term).toLocaleString()}
      </div>
    );
  }

  return (
    <div className="rehearsal-term-container">
      <strong><Lsi lsi={lsiDashboard.termLabel} /></strong> {new Date(term).toLocaleString()}
      <FaEdit className="rehearsal-term-icon" onClick={handleOpenModal} title={<Lsi lsi={lsiDashboard.editTermTooltip} />} />
      <TermModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        initialDate={term}
      />
    </div>
  );
};

export default RehearsalTerm;