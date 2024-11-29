// src/core/spa.js

import { createVisualComponent, Utils } from "uu5g05";
import React, { Suspense } from 'react';
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Home from "../routes/home.js";
import Dashboard from "../routes/dashboard.js";
import CreatePlay from "../routes/create-play.js";
import ControlPanel from "../routes/control-panel.js";

import Layout from "../routes/Layout"; // Import Layout komponenty

const About = Utils.Component.lazy(() => import("../routes/about.js"));
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));

// Vytvoření Higher-Order Component (HOC) pro obalení s Layout
const withLayout = (Component) => (props) => (
  <Layout>
    <Component {...props} />
  </Layout>
);

const ROUTE_MAP = {
  "": (props) => <Home {...props} />,
  home: (props) => <Home {...props} />,
  about: (props) => <About {...props} />,
  dashboard: (props) => <Dashboard {...props} />,
  "create-play": (props) => <CreatePlay {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
};

// Obalení všech route komponent s Layout pomocí HOC
const wrappedROUTE_MAP = Object.fromEntries(
  Object.entries(ROUTE_MAP).map(([path, componentFn]) => [
    path,
    (props) => (path === "*" ? componentFn(props) : withLayout(componentFn)(props)),
  ])
);

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <Plus4U5App.Spa routeMap={wrappedROUTE_MAP} />
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

export { Spa };
export default Spa;