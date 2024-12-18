import React from "react";
import AddFigureForm from "./AddFigureForm";
import SceneFigure from "./SceneFigure";
import { useCreatePlayContext } from "../../context/CreatePlayContext";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneFiguresList = ({ figures = [], onAddFigure, onAssignActors, onDeleteFigure }) => {
  const { actors, isActorsLoading, actorsError } = useCreatePlayContext();
  const noFiguresText = useLsi(lsiCreatePlay.noFiguresAssigned);

  if (isActorsLoading) {
    return <p>Načítání herců...</p>;
  }

  if (actorsError) {
    return <p>{actorsError}</p>;
  }

  return (
    <div className="scene-figures-list">
      <h4><Lsi lsi={lsiCreatePlay.charactersLabel} /></h4>
      <AddFigureForm onAddFigure={onAddFigure} />
      {figures.length > 0 ? (
        figures.map((figure) => (
          <SceneFigure
            key={figure.id}
            figure={figure}
            usersList={actors}
            onAssignActors={onAssignActors}
            onDeleteFigure={onDeleteFigure}
          />
        ))
      ) : (
        <p>{noFiguresText}</p>
      )}
    </div>
  );
};

export default SceneFiguresList;