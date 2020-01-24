import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FlybusProvider } from "./context/context";

ReactDOM.render(
  <FlybusProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FlybusProvider>,
  document.getElementById("root")
);
