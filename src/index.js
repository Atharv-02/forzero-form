import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Carprovider } from "./context/Carcontext";
import { GetQuestioncontextprovider } from "./context/Questioncontext";
import { Protectionprovider } from "./context/Protectioncontext";
import { BrowserRouter } from "react-router-dom";
import { Multiformprovider } from "./context/Multiformcontext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#13E2A3",
      contrastText: "#fff",
      weird: "#fff",
    },
    spinme: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});
// <ThemeProvider theme={theme}>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Protectionprovider>
          <Multiformprovider>
            <Carprovider>
              <GetQuestioncontextprovider>
                <App />
              </GetQuestioncontextprovider>
            </Carprovider>
          </Multiformprovider>
        </Protectionprovider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
