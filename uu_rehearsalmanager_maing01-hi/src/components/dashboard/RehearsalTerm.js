import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import TermModal from "./TermModal";
import { useDataContext } from "../../context/DashboardContext";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalTerm = ({ term, rehearsalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { updateRehearsal } = useDataContext();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (newDate) => {
    updateRehearsal({ id: rehearsalId, date: newDate });
    setIsModalOpen(false);
  };

  return (
    <div className="rehearsal-term-container">
      <strong><Lsi lsi={lsiDashboard.termLabel} /></strong> {term}
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