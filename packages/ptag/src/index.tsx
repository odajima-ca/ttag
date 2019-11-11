import { ThemeProvider } from "emotion-theming";
import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
