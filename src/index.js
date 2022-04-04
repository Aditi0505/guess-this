import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QuestionProvider, ThemeProvider } from "./context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <QuestionProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QuestionProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
