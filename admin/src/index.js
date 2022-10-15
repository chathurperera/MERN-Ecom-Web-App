import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
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
