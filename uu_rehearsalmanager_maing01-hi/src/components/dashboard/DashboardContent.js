import React, { useState } from "react";
import { useDataContext } from "../../context/DashboardContext";
import UsersList from "./UsersList";
import RehearsalLocation from "./RehearsalLocation";
import RehearsalTerm from "./RehearsalTerm";
import RehearsalConfirmation from "./RehearsalConfirmation";
import PlaySelectionModal from "./PlaySelectionModal";
import CreateLocationButton from "./CreateLocationButton";
import { FaPlusCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const DashboardContent = () => {
  const { actors, rehearsals, plays, addRehearsal, updatePresenceStatus } = useDataContext();
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxDisplayed = 4;

  const handleAddRehearsal = () => {
    setIsPlayModalOpen(true);
  };

  const handleSelectPlay = (playId) => {
    const selectedPlay = plays.find((play) => play.id === playId);
    if (selectedPlay) {
      const newRehearsal = {
        id: (rehearsals.length + 1).toString(),
        playName: selectedPlay.name,
        locationId: "",
        date: "",
        valid: false,
        sceneList: [],
        presenceList: [],
      };
      addRehearsal(newRehearsal);
    }
    setIsPlayModalOpen(false);
  };

  const handleAccept = (rehearsalId, userId) => {
    updatePresenceStatus(rehearsalId, userId, "Accepted");
  };

  const handleRefuse = (rehearsalId, userId) => {
    updatePresenceStatus(rehearsalId, userId, "Refused");
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + maxDisplayed < rehearsals.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayedRehearsals = rehearsals.slice(currentIndex, currentIndex + maxDisplayed);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header-container">
        <FaArrowLeft
          className={`header-nav-icon ${currentIndex === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          title={<Lsi lsi={lsiDashboard.previous} />}
        />
        <h1 className="dashboard-header"><Lsi lsi={lsiDashboard.dashboard} /></h1>
        <FaArrowRight
          className={`header-nav-icon ${currentIndex + maxDisplayed >= rehearsals.length ? "disabled" : ""}`}
          onClick={handleNext}
          title={<Lsi lsi={lsiDashboard.next} />}
        />
      </div>
      <CreateLocationButton />
      <div className="dashboard-table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th className="dashboard-table-header"><Lsi lsi={lsiDashboard.usersListHeader} /></th>
              {displayedRehearsals.map((rehearsal) => (
                <th key={rehearsal.id} className="dashboard-table-header">
                  <div className="rehearsal-header">
                    <strong>{rehearsal.playName}</strong>
                    <RehearsalLocation locationId={rehearsal.locationId} rehearsalId={rehearsal.id} />
                    <RehearsalTerm term={new Date(rehearsal.date).toLocaleString()} rehearsalId={rehearsal.id} />
                    <RehearsalConfirmation valid={rehearsal.valid} rehearsalId={rehearsal.id} />
                  </div>
                </th>
              ))}
              <th className="dashboard-table-header">
                <FaPlusCircle className="add-icon" onClick={handleAddRehearsal} title={<Lsi lsi={lsiDashboard.addRehearsal} />} />
              </th>
            </tr>
          </thead>
          <tbody>
            <UsersList
              users={actors}
              displayedRehearsals={displayedRehearsals}
              handleAccept={handleAccept}
              handleRefuse={handleRefuse}
            />
          </tbody>
        </table>
      </div>
      <PlaySelectionModal
        isOpen={isPlayModalOpen}
        onClose={() => setIsPlayModalOpen(false)}
        onSelectPlay={handleSelectPlay}
      />
    </div>
  );
};

export default DashboardContent;