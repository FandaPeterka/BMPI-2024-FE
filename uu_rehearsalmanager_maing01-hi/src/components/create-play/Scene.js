import React, { useState, useEffect } from "react";
import { useCreatePlayContext } from "../../context/CreatePlayContext";
import SceneDeleteButton from "./SceneDeleteButton";
import SceneNameForm from "./SceneNameForm";
import SceneNotesForm from "./SceneNotesForm";
import SceneFiguresList from "./SceneFiguresList";
import SceneFinishButton from "./SceneFinishButton";
import SceneEditButton from "./SceneEditButton";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";
import { PersonItem } from "uu_plus4u5g02-elements";

const Scene = ({ scene, onUpdateScene, onDeleteScene }) => {
  const [isValid, setIsValid] = useState(false);
  const { actors, handleAssignActorsToFigure } = useCreatePlayContext();
  const editSceneText = useLsi(lsiCreatePlay.editScene);

  useEffect(() => {
    const figures = scene.figures || [];
    const allFiguresAssigned = figures.every(
      (figure) => Array.isArray(figure.actorList) && figure.actorList.length > 0
    );
    const valid =
      scene.name.trim() !== "" &&
      scene.notes.trim() !== "" &&
      figures.length > 0 &&
      allFiguresAssigned;
    setIsValid(valid);
  }, [scene]);

  const handleNameSubmit = (name) => {
    onUpdateScene(scene.id, { name });
  };

  const handleNotesSubmit = (notes) => {
    onUpdateScene(scene.id, { notes });
  };

  const handleAddFigure = (figureName) => {
    const newFigure = {
      id: Date.now().toString(),
      name: figureName,
      actorList: []
    };
    onUpdateScene(scene.id, { figures: [...scene.figures, newFigure] });
  };

  const handleAssignActors = (figureId, actorList) => {
    handleAssignActorsToFigure(scene.id, figureId, actorList);
  };

  const handleDeleteFigure = (figureId) => {
    onUpdateScene(scene.id, { figures: scene.figures.filter((figure) => figure.id !== figureId) });
  };

  const handleFinishScene = () => {
    if (isValid) {
      onUpdateScene(scene.id, { isFinished: true });
    }
  };

  const handleEditScene = () => {
    onUpdateScene(scene.id, { isFinished: false });
  };

  return (
    <div className={`scene ${scene.isFinished ? "finished" : ""}`}>
      <div className="scene-header">
        {!scene.isFinished && (
          <SceneDeleteButton onDelete={() => onDeleteScene(scene.id)} />
        )}
      </div>
      {!scene.isFinished ? (
        <>
          <SceneNameForm initialName={scene.name} onSubmit={handleNameSubmit} />
          <SceneNotesForm initialNotes={scene.notes} onSubmit={handleNotesSubmit} />
          <SceneFiguresList
            figures={scene.figures}
            onAddFigure={handleAddFigure}
            onAssignActors={handleAssignActors}
            onDeleteFigure={handleDeleteFigure}
          />
          <SceneFinishButton onFinishScene={handleFinishScene} isValid={isValid} />
        </>
      ) : (
        <>
          <div className="scene-summary">
            <p><strong><Lsi lsi={lsiCreatePlay.sceneNameLabel} /></strong> {scene.name}</p>
            <p><strong><Lsi lsi={lsiCreatePlay.sceneNotesLabel} /></strong> {scene.notes}</p>
            <div>
              <strong><Lsi lsi={lsiCreatePlay.figuresAndActorsLabel} /></strong>
              <ul>
                {scene.figures.map((figure) => (
                  <li key={figure.id}>
                    {figure.name} - {figure.actorList.length > 0 ? figure.actorList.map((uuId) => <PersonItem key={uuId} uuIdentity={uuId} />) : <Lsi lsi={lsiCreatePlay.unassigned} />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <SceneEditButton onEdit={handleEditScene} />
        </>
      )}
    </div>
  );
};

export default Scene;