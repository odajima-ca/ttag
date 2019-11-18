import React from "react";
import ReactDOM from "react-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import App from "./App";

const theme = {
  colors: {
    background: "black",
    primary: "tomato"
  },
  space: [0, 6, 12, 24, 48],
  fontSizes: [14, 16, 18, 20, 24],
  radii: {
    default: 12
  }
};

const mountId =
  (document &&
    document.currentScript &&
    document.currentScript.getAttribute("data-mountId")) ||
  "ad-root";
const mediaId =
  (document &&
    document.currentScript &&
    document.currentScript.getAttribute("data-mediaId")) ||
  "";
const placementId =
  (document &&
    document.currentScript &&
    document.currentScript.getAttribute("data-placementId")) ||
  "";

const target =
  document.getElementById(mountId) || document.head || document.body;

ReactDOM.render(
  <StyleSheetManager target={target}>
    <ThemeProvider theme={theme}>
      <App placementId={placementId} mediaId={mediaId} />
    </ThemeProvider>
  </StyleSheetManager>,
  target
);
