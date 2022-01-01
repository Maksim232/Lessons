import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Router } from "./components/Router";
import { store } from "./store";
import { ProfileContext } from "../src/components/utils/ProfileContext"

export const AUTHORS = {
  HUMAN: "human",
  BOT: "bot",
};


function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <ProfileContext.Provider value={{ name, setName }}>
        <Router />
      </ProfileContext.Provider>
    </Provider>
  );
}

export default App;

