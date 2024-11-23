// SceneEditButton.js
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneEditButton = ({ onEdit }) => {
  const titleText = useLsi(lsiCreatePlay.editScene);

  return (
    <button
      className="scene-edit-button"
      onClick={onEdit}
      title={titleText}
    >
      <FaEdit style={{ marginRight: "8px" }} /> <Lsi lsi={lsiCreatePlay.editScene} />
    </button>
  );
};

export default SceneEditButton;