// CreatePlayContent.js
import React from "react";
import { FaPlus, FaList } from "react-icons/fa";
import { useCreatePlayContext } from "../../context/CreatePlayContext";
import CPModal from "./CPModal";
import CPFinishButton from "./CPFinishButton";
import CPScenesList from "./CPScenesList";
import CPTitle from "./CPTitle";
import { Lsi } from "uu5g05";
import lsiCreatePlay from "../../lsi/lsi-createplay";
// Removed StatusIndicator import

const CreatePlayContent = () => {
  const {
    selectedPlay,
    playsList,
    scenes,
    handleSelectPlay,
    handleFinish,
    handleAddScene,
    handleUpdateScene,
    handleDeleteScene,
  } = useCreatePlayContext();

  const [isCPModalOpen, setIsCPModalOpen] = React.useState(false);

  const handleOpenCPModal = () => {
    setIsCPModalOpen(true);
  };

  const handleCloseCPModal = () => {
    setIsCPModalOpen(false);
  };

  // Check if all scenes are finished
  const allScenesFinished = scenes.length > 0 && scenes.every((scene) => scene.isFinished);

  return (
    <div className="create-play-container">
      {/* Removed StatusIndicator component */}
      <div className="create-play-header">
        <button
          className="cp-button"
          onClick={handleOpenCPModal}
          title={<Lsi lsi={lsiCreatePlay.selectPlay} />}
        >
          <FaList size={24} />
        </button>
        {selectedPlay && (
          <>
            <CPTitle title={selectedPlay.name} />
            <button
              className="scene-add-button"
              onClick={handleAddScene}
              title={<Lsi lsi={lsiCreatePlay.addScene} />}
            >
              <FaPlus
                size={20}
                style={{ marginLeft: "10px", marginRight: "5px" }}
              />
              <Lsi lsi={lsiCreatePlay.addScene} />
            </button>
          </>
        )}
      </div>
      <CPModal
        isOpen={isCPModalOpen}
        playsList={playsList}
        onSelectPlay={handleSelectPlay}
        onClose={handleCloseCPModal}
      />
      {selectedPlay && (
        <>
          <CPScenesList
            scenes={scenes}
            onAddScene={handleAddScene}
            onUpdateScene={handleUpdateScene}
            onDeleteScene={handleDeleteScene}
          />
          <CPFinishButton onFinish={handleFinish} disabled={!allScenesFinished} />
        </>
      )}
    </div>
  );
};

export default CreatePlayContent;