import React from "react";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";

const User = ({ userName, userId }) => {
  return (
    <div className="user">
      <p className="user-name" title={<Lsi lsi={lsiDashboard.userTooltip} />}>{userName}</p>
      <p className="user-id"><Lsi lsi={lsiDashboard.userIdLabel} /> {userId}</p>
    </div>
  );
};

export default User;