import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { fontColor, PersonalColor } from "./util/style/colors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{ font: { ...fontColor }, personal: { ...PersonalColor } }}
    >
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
