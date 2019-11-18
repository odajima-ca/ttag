import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  h1 {
    font-family: Montserrat, serif;
  }
`;

const theme = {
  colors: {
    background: "black",
    primary: "tomato"
  },
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 6, 12, 24, 48],
  fontSizes: [14, 16, 18, 20, 24],
  radii: {
    default: 12
  }
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
