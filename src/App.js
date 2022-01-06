import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "./components/Router";
import { persistor, store } from "./store";
import { ProfileContext } from "../src/components/utils/ProfileContext"

export const AUTHORS = {
  HUMAN: "human",
  BOT: "bot",
};


function App() {
  const [name, setName] = useState("default");
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProfileContext.Provider value={{ name, setName }}>
          <Router />
        </ProfileContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;

