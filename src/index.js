import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import { FlybusProvider } from "./context/context";

ReactDOM.render(
  <Suspense fallback={null}>
    <FlybusProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FlybusProvider>
  </Suspense>,
  document.getElementById("root")
);
