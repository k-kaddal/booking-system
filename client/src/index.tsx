import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoresProvider } from "./store/StoresProvider";

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
