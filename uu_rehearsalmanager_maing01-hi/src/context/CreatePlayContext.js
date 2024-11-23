import React, { createContext, useContext, useState } from "react";
import { mockPlays, mockActors, mockScenes } from "../mock/mockData";
import { useRequestStatus } from "./RequestStatusContext";

const CreatePlayContext = createContext();

export const useCreatePlayContext = () => {
  return useContext(CreatePlayContext);
};

const CreatePlayProvider = ({ children }) => {
  const { setPending, setError, setSuccess } = useRequestStatus();
  const [selectedPlay, setSelectedPlay] = useState(null);
  const [playsList, setPlaysList] = useState(mockPlays);
  const [scenes, setScenes] = useState([]);

  const simulateRequest = (callback) => {
    setPending();
    setTimeout(() => {
      try {
        callback();
        setSuccess();
      } catch (error) {
        setError(error.message);
      }
    }, 500); 
  };

  const handleSelectPlay = (playId) => {
    simulateRequest(() => {
      const play = playsList.find((p) => p.id === playId);
      setSelectedPlay(play);
      const playScenes = mockScenes.filter((scene) => scene.playId === playId);
      setScenes(playScenes);
    });
  };

  const handleFinish = () => {
    simulateRequest(() => {
      // Logic to finish play configuration
      console.log("Play completed:", selectedPlay);
      // Reset state
      setSelectedPlay(null);
      setScenes([]);
    });
  };

  const handleAddScene = () => {
    simulateRequest(() => {
      const newScene = {
        id: Date.now().toString(),
        name: "",
        notes: "",
        figures: [],
        isFinished: false,
      };
      setScenes([...scenes, newScene]);
    });
  };

  const handleUpdateScene = (id, updatedData) => {
    simulateRequest(() => {
      setScenes(
        scenes.map((scene) =>
          scene.id === id ? { ...scene, ...updatedData } : scene
        )
      );
    });
  };

  const handleDeleteScene = (id) => {
    simulateRequest(() => {
      setScenes(scenes.filter((scene) => scene.id !== id));
    });
  };

  return (
    <CreatePlayContext.Provider
      value={{
        selectedPlay,
        playsList,
        scenes,
        actors: mockActors,
        handleSelectPlay,
        handleFinish,
        handleAddScene,
        handleUpdateScene,
        handleDeleteScene,
      }}
    >
      {children}
    </CreatePlayContext.Provider>
  );
};

export default CreatePlayProvider;