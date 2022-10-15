import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./routing";
import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Routing />}></Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
