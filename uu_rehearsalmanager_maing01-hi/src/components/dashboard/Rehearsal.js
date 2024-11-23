import React from "react";
import RehearsalTerm from "./RehearsalTerm";
import RehearsalLocation from "./RehearsalLocation";
import RehearsalConfirmation from "./RehearsalConfirmation";

const Rehearsal = ({ rehearsal }) => {
  const { id, date, locationId, valid } = rehearsal;

  return (
    <div className="rehearsal-container">
      <RehearsalLocation locationId={locationId} rehearsalId={id} />
      <RehearsalTerm term={new Date(date).toLocaleString()} rehearsalId={id} />
      <RehearsalConfirmation valid={valid} rehearsalId={id} />
    </div>
  );
};

export default Rehearsal;