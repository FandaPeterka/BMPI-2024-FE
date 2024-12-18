import React from "react";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";
import { Select } from "uu5g04-forms";
import { PersonItem } from "uu_plus4u5g02-elements";

const SceneFigure = ({ figure, usersList, onAssignActors, onDeleteFigure }) => {
  const assignActorText = useLsi(lsiCreatePlay.assignActor);
  const deleteFigureTitle = useLsi(lsiCreatePlay.deleteFigure);

  const handleChange = (opt) => {
    let actorList = opt.value;
    // Ujistíme se, že actorList je pole
    if (!Array.isArray(actorList)) {
      actorList = actorList ? [actorList] : [];
    }
    onAssignActors(figure.id, actorList);
  };

  return (
    <div className="scene-figure">
      <span className="figure-name">{figure.name}</span>
      <Select
        multiple
        value={Array.isArray(figure.actorList) ? figure.actorList : []}
        onChange={handleChange}
        required
      >
        {usersList.map((actor) => (
          <Select.Option key={actor.uuIdentity} value={actor.uuIdentity}>
            <PersonItem uuIdentity={actor.uuIdentity} />
          </Select.Option>
        ))}
      </Select>
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