// SceneNameForm.js
import React, { useState } from "react";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneNameForm = ({ initialName, onSubmit }) => {
  const [name, setName] = useState(initialName);
  const placeholderText = useLsi(lsiCreatePlay.sceneNamePlaceholder);
  const editNameText = useLsi(lsiCreatePlay.editName);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className="scene-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={placeholderText}
        className="scene-name-input"
        required
      />
      <button type="submit" className="scene-name-submit-button">
        {editNameText}
      </button>
    </form>
  );
};

export default SceneNameForm;