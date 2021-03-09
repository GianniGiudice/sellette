import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Harness } from "./Harness";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Harness />
  </StrictMode>,
  rootElement
);
