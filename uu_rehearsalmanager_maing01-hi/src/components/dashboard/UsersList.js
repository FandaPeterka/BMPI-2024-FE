import React from "react";
import User from "./User";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import { FaPlusCircle, FaCheckCircle, FaTimesCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UsersList = ({ users, displayedRehearsals, handleAccept, handleRefuse }) => {
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="dashboard-table-cell">
            <User userName={user.name} userId={user.id} />
          </td>
          {displayedRehearsals.map((rehearsal) => {
            const presence = rehearsal.presenceList.find((p) => p.userId === user.id);
            return (
              <td key={rehearsal.id} className="dashboard-table-cell">
                {presence ? (
                  presence.status ? (
                    <span>
                      {rehearsal.playName} - {presence.status}
                    </span>
                  ) : (
                    <div className="action-icons">
                      <FaCheckCircle
                        className="action-icon accept-icon"
                        onClick={() => handleAccept(rehearsal.id, user.id)}
                        title={<Lsi lsi={lsiDashboard.acceptRehearsal} />}
                      />
                      <FaTimesCircle
                        className="action-icon refuse-icon"
                        onClick={() => handleRefuse(rehearsal.id, user.id)}
                        title={<Lsi lsi={lsiDashboard.refuseRehearsal} />}
                      />
                    </div>
                  )
                ) : (
                  <span>N/A</span>
                )}
              </td>
            );
          })}
          <td className="dashboard-table-cell"></td>
        </tr>
      ))}
    </>
  );
};

export default UsersList;