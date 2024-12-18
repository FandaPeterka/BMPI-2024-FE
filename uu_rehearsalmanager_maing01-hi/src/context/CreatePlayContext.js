// src/context/CreatePlayContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRequestStatus } from "./RequestStatusContext";
import { PLAY_CONSTANTS } from "../constants/PlayConstants";
import SceneService from "../api/SceneService";
import ActorService from "../api/ActorService";
import PermissionService from "../api/PermissionService"; // Přidáno
import { useSession } from "uu5g05"; // Přidáno

const CreatePlayContext = createContext();

export const useCreatePlayContext = () => {
  return useContext(CreatePlayContext);
};

// Pomocné funkce pro mapování dat
const mapBackendSceneToFrontend = (backendScene) => ({
  id: backendScene.id,
  name: backendScene.name,
  notes: backendScene.description || backendScene.publicDescription || "",
  figures: (backendScene.characterList || []).map((char, index) => ({
    id: char.id || `figure-${index}`,
    name: char.name,
    actorList: char.actorList || [] // zde je pole herců
  })),
  isFinished: backendScene.isFinished || false,
});

const mapFrontendFiguresToCharacterList = (figures) =>
  figures.map((figure) => ({
    name: figure.name,
    actorList: figure.actorList || [] // pole herců
  }));

const CreatePlayProvider = ({ children }) => {
  const { setPending, setError, setSuccess } = useRequestStatus();

  // Destrukturalizace state a identity z useSession
  const { state, identity } = useSession(); // Přidáno
  const currentUserUuIdentity = identity?.uuIdentity; // Přidáno

  // Přidání console.log pro ověření identity a rolí
  useEffect(() => {
    console.log("CreatePlayContext - Session state:", state);
    console.log("CreatePlayContext - Identity object:", identity);
    console.log("CreatePlayContext - Current user UuIdentity:", currentUserUuIdentity);
  }, [state, identity, currentUserUuIdentity]);

  const [selectedPlay, setSelectedPlay] = useState(null);
  const [playsList, setPlaysList] = useState([]);
  const [scenes, setScenes] = useState([]);
  const [actors, setActors] = useState([]);
  const [isActorsLoading, setIsActorsLoading] = useState(false);
  const [actorsError, setActorsError] = useState(null);
  const [userRoles, setUserRoles] = useState([]); // Přidáno

  // Načtení her
  useEffect(() => {
    setPlaysList(PLAY_CONSTANTS);
  }, []);

  // Načtení herců
  useEffect(() => {
    const fetchActors = async () => {
      setIsActorsLoading(true);
      try {
        const actorsData = await ActorService.listActors({ pageInfo: { pageIndex: 0, pageSize: 1000 } });
        setActors(actorsData);
        setIsActorsLoading(false);
      } catch (error) {
        console.error("CreatePlayContext - Error fetching actors:", error);
        setActorsError("Nepodařilo se načíst herce.");
        setIsActorsLoading(false);
      }
    };

    fetchActors();
  }, []);

  // Funkce pro načtení rolí uživatele
  const loadUserRoles = async () => {
    if (!currentUserUuIdentity) return;
    setPending("Loading user roles...");
    try {
      const response = await PermissionService.listUserRoles({
        profileList: ["Actors", "Directors", "Organizers"],
        uuIdentityList: [currentUserUuIdentity],
      });
      const roles = response.itemList.map(item => item.profile);
      setUserRoles(roles);
      console.log("CreatePlayContext - User roles:", roles); // Logování rolí
      setSuccess("User roles loaded successfully.");
    } catch (error) {
      console.error("CreatePlayContext - Failed to load user roles.", error);
      setUserRoles([]);
      setError("Nepodařilo se načíst role uživatele.");
    }
  };

  // Načtení rolí uživatele spolu s ostatními daty
  const loadAllData = async () => {
    setPlaysList(PLAY_CONSTANTS);
    await loadUserRoles(); // Přidáno
    // Další načítání dat podle potřeby (např. scény)
  };

  useEffect(() => {
    if (currentUserUuIdentity) {
      loadAllData();
      // Pokud potřebuješ načíst další data, přidej zde volání funkcí pro načtení
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserUuIdentity]);

  // Inicializace předdefinovaných scén
  const initializePredefinedScenes = async (play) => {
    setPending("Initializing predefined scenes...");
    try {
      const sceneDtos = play.predefinedScenes.map((predefinedScene) => ({
        actId: play.id,
        name: predefinedScene.name,
        description: predefinedScene.notes,
        publicDescription: predefinedScene.notes,
        directorId: "0-0",
        directorName: "Unknown",
        characterList: predefinedScene.figures.map((figure) => ({
          name: figure.name,
          actorList: figure.assignedUser ? [figure.assignedUser] : []
        })),
      }));

      await Promise.all(sceneDtos.map((sceneDto) => SceneService.createScene(sceneDto)));

      const loaded = await SceneService.listScenes(play.id);
      const frontendScenes = (loaded.itemList || []).map(mapBackendSceneToFrontend);
      setScenes(frontendScenes);
      setSuccess("Předdefinované scény byly úspěšně inicializovány.");
    } catch (error) {
      console.error("CreatePlayContext - Error initializing predefined scenes:", error);
      setError("Nepodařilo se inicializovat předdefinované scény. Kontaktujte podporu.");
    }
  };

  // Výběr hry
  const handleSelectPlay = async (playId) => {
    setPending("Selecting play...");
    try {
      const play = playsList.find((p) => p.id === playId);
      if (!play) {
        throw new Error("Hra nebyla nalezena.");
      }
      setSelectedPlay(play);

      const loadedScenes = await SceneService.listScenes(play.id);
      let frontendScenes = (loadedScenes.itemList || []).map(mapBackendSceneToFrontend);

      if (frontendScenes.length === 0) {
        await initializePredefinedScenes(play);
        const loadedAfterInit = await SceneService.listScenes(play.id);
        frontendScenes = (loadedAfterInit.itemList || []).map(mapBackendSceneToFrontend);
      }

      setScenes(frontendScenes);
      setSuccess("Scény načteny.");
    } catch (error) {
      console.warn("CreatePlayContext - Backend scén není dostupný nebo došlo k chybě.", error);
      setError("Nepodařilo se načíst scény. Kontaktujte podporu.");
    }
  };

  // Dokončení hry
  const handleFinish = () => {
    setPending("Finishing play...");
    setTimeout(() => {
      try {
        console.log("CreatePlayContext - Play completed:", selectedPlay);
        setSelectedPlay(null);
        setScenes([]);
        setSuccess("Hra byla úspěšně dokončena.");
      } catch (error) {
        console.error("CreatePlayContext - Error finishing play:", error);
        setError("Nepodařilo se dokončit hru.");
      }
    }, 500);
  };

  // Přidání scény
  const handleAddScene = async () => {
    if (!selectedPlay) {
      setError("Není vybrána žádná hra.");
      return;
    }
    setPending("Adding scene...");
    const newSceneDtoIn = {
      actId: selectedPlay.id,
      name: "New Scene",
      description: "",
      publicDescription: "",
      directorId: "0-0",
      directorName: "Unknown",
      characterList: [],
    };

    try {
      const created = await SceneService.createScene(newSceneDtoIn);
      const frontendScene = mapBackendSceneToFrontend(created);
      setScenes((prev) => [...prev, frontendScene]);
      setSuccess("Scéna byla úspěšně přidána na backendu.");
    } catch (error) {
      console.warn("CreatePlayContext - Chyba při vytváření scény na backendu.", error);
      setError("Nepodařilo se přidat scénu. Kontaktujte podporu.");
    }
  };

  // Aktualizace scény
  const handleUpdateScene = async (id, updatedData) => {
    setPending("Updating scene...");
    try {
      const dtoIn = { id };

      if (updatedData.name !== undefined) {
        dtoIn.name = updatedData.name;
      }

      if (updatedData.notes !== undefined) {
        dtoIn.description = updatedData.notes;
        dtoIn.publicDescription = updatedData.notes;
      }

      if (updatedData.figures !== undefined) {
        dtoIn.characterList = mapFrontendFiguresToCharacterList(updatedData.figures);
      }

      await SceneService.updateScene(dtoIn);

      setScenes((prev) =>
        prev.map((scene) => (scene.id === id ? { ...scene, ...updatedData } : scene))
      );

      setSuccess("Scéna aktualizována na backendu.");
    } catch (error) {
      console.warn("CreatePlayContext - Chyba při aktualizaci scény na backendu.", error);
      setError("Nepodařilo se aktualizovat scénu.");
    }
  };

  // Smazání scény
  const handleDeleteScene = async (id) => {
    setPending("Deleting scene...");
    try {
      await SceneService.deleteScene(id);
      setScenes((prev) => prev.filter((scene) => scene.id !== id));
      setSuccess("Scéna smazána z backendu.");
    } catch (error) {
      console.warn("CreatePlayContext - Chyba při mazání scény na backendu.", error);
      setError("Nepodařilo se smazat scénu.");
    }
  };

  // Přiřazení herců k figuře
  const handleAssignActorsToFigure = (sceneId, figureId, actorList) => {
    // Lokální update
    const updatedScenes = scenes.map((scene) => {
      if (scene.id === sceneId) {
        const updatedFigures = scene.figures.map((figure) =>
          figure.id === figureId ? { ...figure, actorList } : figure
        );
        return { ...scene, figures: updatedFigures };
      }
      return scene;
    });
    setScenes(updatedScenes);

    // Update na backendu
    const updatedScene = updatedScenes.find((s) => s.id === sceneId);
    handleUpdateScene(sceneId, { figures: updatedScene.figures });
  };

  return (
    <CreatePlayContext.Provider
      value={{
        selectedPlay,
        playsList,
        scenes,
        actors,
        isActorsLoading,
        actorsError,
        handleSelectPlay,
        handleFinish,
        handleAddScene,
        handleUpdateScene,
        handleDeleteScene,
        handleAssignActorsToFigure,
        userRoles, // Přidáno
        currentUserUuIdentity, // Přidáno
      }}
    >
      {children}
    </CreatePlayContext.Provider>
  );
};

export default CreatePlayProvider;