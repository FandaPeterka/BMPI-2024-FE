// SceneFinishButton.js
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const SceneFinishButton = ({ onFinishScene, isValid }) => {
  const finishSceneTooltip = useLsi(lsiCreatePlay.finishSceneTooltip);
  const fillAllFieldsTooltip = useLsi(lsiCreatePlay.fillAllFieldsTooltip);
  const buttonTitle = isValid ? finishSceneTooltip : fillAllFieldsTooltip;

  return (
    <button
      className="scene-finish-button"
      onClick={onFinishScene}
      disabled={!isValid}
      title={buttonTitle}
    >
      <FaCheck style={{ marginRight: "8px" }} /> <Lsi lsi={lsiCreatePlay.finishScene} />
    </button>
  );
};

export default SceneFinishButton;