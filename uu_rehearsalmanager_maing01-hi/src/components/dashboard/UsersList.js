// src/components/dashboard/UsersList.js

import React from "react";
import User from "./User";
import { Lsi } from "uu5g05";
import lsiDashboard from "../../lsi/lsi-dashboard";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useDataContext } from "../../context/DashboardContext";

const UsersList = ({ users, displayedRehearsals, handleAccept, handleRefuse }) => {
  const { membersByRehearsal, currentUserUuIdentity } = useDataContext();

  return (
    <>
      {users.map((userUuIdentity) => (
        <tr key={userUuIdentity}>
          <td className="dashboard-table-cell">
            <User user={userUuIdentity} />
          </td>
          {displayedRehearsals.map((rehearsal) => {
            const members = membersByRehearsal[rehearsal.id] || [];
            const isMember = members.includes(userUuIdentity);
            const isAccepted = rehearsal.presenceList && rehearsal.presenceList.includes(userUuIdentity);

            let statusText = "N/A";
            if (isMember) {
              statusText = isAccepted ? "Accepted" : "Not Accepted";
            }

            // Kontrola, zda zobrazovaný uživatel je ten samý jako aktuálně přihlášený
            const isCurrentUser = userUuIdentity === currentUserUuIdentity;

            return (
              <td key={rehearsal.id} className="dashboard-table-cell">
                <div>
                  {rehearsal.playName} - {statusText}
                </div>
                {isMember && isCurrentUser && (
                  <div className="action-icons">
                    {!isAccepted ? (
                      <FaCheckCircle
                        className="action-icon accept-icon"
                        onClick={() => {
                          console.log(`Accepting rehearsal ${rehearsal.id} for user ${userUuIdentity}`);
                          handleAccept(rehearsal.id, userUuIdentity);
                        }}
                        title={<Lsi lsi={lsiDashboard.acceptRehearsal} />}
                      />
                    ) : (
                      <FaTimesCircle
                        className="action-icon refuse-icon"
                        onClick={() => {
                          console.log(`Refusing rehearsal ${rehearsal.id} for user ${userUuIdentity}`);
                          handleRefuse(rehearsal.id, userUuIdentity);
                        }}
                        title={<Lsi lsi={lsiDashboard.refuseRehearsal} />}
                      />
                    )}
                  </div>
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