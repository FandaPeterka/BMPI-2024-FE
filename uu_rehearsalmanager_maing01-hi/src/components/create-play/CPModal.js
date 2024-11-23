// CPModal.js
import React from "react";
import { FaTimes, FaPlayCircle } from "react-icons/fa";
import { Lsi, useLsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";

const CPModal = ({ isOpen, playsList, onSelectPlay, onClose }) => {
  const closeText = useLsi(lsiCreatePlay.close);
  const selectPlayForConfigText = useLsi(lsiCreatePlay.selectPlayForConfig);
  const selectPlayText = useLsi(lsiCreatePlay.selectPlay);

  const handleSelectPlay = (playId) => {
    onSelectPlay(playId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="cp-modal-overlay">
      <div className="cp-modal">
        <button className="cp-modal-close-button" onClick={onClose} title={closeText}>
          <FaTimes />
        </button>
        <p className="cp-modal-text">{selectPlayForConfigText}</p>
        <div className="cp-modal-list">
          {playsList.map((play) => (
            <button
              key={play.id}
              className="cp-modal-play-button"
              onClick={() => handleSelectPlay(play.id)}
              title={selectPlayText}
            >
              <FaPlayCircle style={{ marginRight: "8px" }} />
              {play.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CPModal;