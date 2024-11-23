// SceneDeleteButton.js
import React from "react";
import { FaTrash } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneDeleteButton = ({ onDelete }) => {
  const titleText = useLsi(lsiCreatePlay.deleteScene);

  return (
    <button
      className="scene-delete-button"
      onClick={onDelete}
      title={titleText}
    >
      <FaTrash />
    </button>
  );
};

export default SceneDeleteButton;