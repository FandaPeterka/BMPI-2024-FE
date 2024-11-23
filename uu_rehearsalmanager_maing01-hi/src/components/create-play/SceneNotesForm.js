// SceneNotesForm.js
import React, { useState } from "react";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneNotesForm = ({ initialNotes, onSubmit }) => {
  const [notes, setNotes] = useState(initialNotes);
  const placeholderText = useLsi(lsiCreatePlay.sceneNotesPlaceholder);
  const editNotesText = useLsi(lsiCreatePlay.editNotes);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(notes);
  };

  return (
    <form onSubmit={handleSubmit} className="scene-form">
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={placeholderText}
        className="scene-notes-input"
        rows="3"
        required
      />
      <button type="submit" className="scene-notes-submit-button">
        {editNotesText}
      </button>
    </form>
  );
};

export default SceneNotesForm;