// CPFinishButton.js
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const CPFinishButton = ({ onFinish, disabled }) => {
  const completeAllScenesText = useLsi(lsiCreatePlay.completeAllScenes);
  const finishPlayText = useLsi(lsiCreatePlay.finishPlay);
  const buttonTitle = disabled ? completeAllScenesText : finishPlayText;

  return (
    <button
      className="cp-finish-button"
      onClick={onFinish}
      disabled={disabled}
      title={buttonTitle}
    >
      <FaCheck style={{ marginRight: "8px" }} /> {finishPlayText}
    </button>
  );
};

export default CPFinishButton;