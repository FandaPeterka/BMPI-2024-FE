import { createVisualComponent } from "uu5g05";
import HomeContent from "../components/home/HomeContent";
import HomeProvider from "../context/HomeContext"; 
import { withRoute } from "uu_plus4u5g02-app";
import "../styles/globalHome.css";
import "../styles/themes.css";


const HomeComponent = createVisualComponent({
  uu5Tag: "MyApp.Home",

  render() {
    return (
      <>
      <HomeProvider>
        <HomeContent />
      </HomeProvider>
      </>
    );
  },
});

const Home = withRoute(HomeComponent, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports