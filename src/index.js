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
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
