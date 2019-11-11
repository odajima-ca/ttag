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

const target =
  document.getElementById("ad-root") || document.head || document.body;

ReactDOM.render(
  <StyleSheetManager target={target}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StyleSheetManager>,
  target
);
