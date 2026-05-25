
import React, { useMemo, useState, createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Authprovider from "./Context/Authprovider";
import reportWebVitals from "./reportWebVitals";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// 🌙 Theme Context
export const ColorModeContext = createContext();

const Root = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        localStorage.setItem("themeMode", newMode);
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
                // 🌞 Light Mode
                background: {
                  default: "#fce4ec",
                  paper: "#ffffff",
                },
                primary: {
                  main: "#e91e63",
                },
              }
            : {
                // 🌙 Dark Mode
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
                primary: {
                  main: "#ff4081",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        {/* ✅ IMPORTANT FIX */}
        <Authprovider>
          <App />
        </Authprovider>

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();