// SceneFiguresList.js
import React from "react";
import AddFigureForm from "./AddFigureForm";
import SceneFigure from "./SceneFigure";
import { useCreatePlayContext } from "../../context/CreatePlayContext";

const SceneFiguresList = ({ figures, onAddFigure, onAssignUser, onDeleteFigure }) => {
  const { actors } = useCreatePlayContext();

  return (
    <div className="scene-figures-list">
      <h4>Postavy</h4>
      <AddFigureForm onAddFigure={onAddFigure} />
      {figures.map((figure) => (
        <SceneFigure
          key={figure.id}
          figure={figure}
          usersList={actors}
          onAssignUser={onAssignUser}
          onDeleteFigure={onDeleteFigure}
        />
      ))}
    </div>
  );
};

export default SceneFiguresList;