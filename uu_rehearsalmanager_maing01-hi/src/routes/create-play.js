import { createVisualComponent } from "uu5g05";
import CreatePlayContent from "../components/create-play/CreatePlayContent";
import CreatePlayProvider from "../context/CreatePlayContext";
import RequestStatusProvider from "../context/RequestStatusContext";
import StatusIndicator from "../components/StatusIndicator"; 
import { withRoute } from "uu_plus4u5g02-app";
import "../styles/globalCreatePlay.css";
import "../styles/themes.css";

const CreatePlayComponent = createVisualComponent({
  uu5Tag: "MyApp.CreatePlay",

  render() {
    return (
      <RequestStatusProvider>
        <StatusIndicator />
        <CreatePlayProvider>
          <CreatePlayContent />
        </CreatePlayProvider>
      </RequestStatusProvider>
    );
  },
});

const CreatePlay = withRoute(CreatePlayComponent, { authenticated: true });

export { CreatePlay };
export default CreatePlay;