import React from "react";
import Rehearsal from "./Rehearsal";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const RehearsalList = ({ rehearsals, onAddRehearsal }) => {
  return (
    <div>
      <h3 className="users-list-header"><Lsi lsi={lsiDashboard.rehearsalsListHeader} /></h3>
      <button className="modal-submit-button" onClick={onAddRehearsal}>
        <Lsi lsi={lsiDashboard.addRehearsal} />
      </button>
      <div className="rehearsal-list">
        {rehearsals.map((rehearsal) => (
          <Rehearsal key={rehearsal.id} rehearsal={rehearsal} />
        ))}
      </div>
    </div>
  );
};

export default RehearsalList;