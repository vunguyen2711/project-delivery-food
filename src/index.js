import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
