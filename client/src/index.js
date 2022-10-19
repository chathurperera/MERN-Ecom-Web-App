import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing";
import "../src/index.scss";
import '../src/styles/main.scss'
import { Provider } from "react-redux";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routing />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
