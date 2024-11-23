// SceneFigure.js
import React from "react";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneFigure = ({ figure, usersList, onAssignUser, onDeleteFigure }) => {
  const assignActorText = useLsi(lsiCreatePlay.assignActor);
  const deleteFigureTitle = useLsi(lsiCreatePlay.deleteFigure);

  return (
    <div className="scene-figure">
      <span className="figure-name">{figure.name}</span>
      <select
        value={figure.assignedUser || ""}
        onChange={(e) => onAssignUser(figure.id, e.target.value)}
        className="scene-user-list"
        required
      >
        <option value="" disabled>
          {assignActorText}
        </option>
        {usersList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        className="figure-delete-button"
        onClick={() => onDeleteFigure(figure.id)}
        title={deleteFigureTitle}
      >
        &#10005;
      </button>
    </div>
  );
};

export default SceneFigure;