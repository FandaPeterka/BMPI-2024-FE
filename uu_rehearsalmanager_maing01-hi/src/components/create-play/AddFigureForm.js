// AddFigureForm.js
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const AddFigureForm = ({ onAddFigure }) => {
  const [figureName, setFigureName] = useState("");
  const placeholderText = useLsi(lsiCreatePlay.figureNamePlaceholder);
  const addFigureText = useLsi(lsiCreatePlay.addFigure);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (figureName.trim() === "") return;
    onAddFigure(figureName);
    setFigureName("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-figure-form">
      <input
        type="text"
        value={figureName}
        onChange={(e) => setFigureName(e.target.value)}
        placeholder={placeholderText}
        className="figure-form-input"
        required
      />
      <button type="submit" className="figure-form-button" title={addFigureText}>
        <FaPlus /> {addFigureText}
      </button>
    </form>
  );
};

export default AddFigureForm;