import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CurrentQuestionProvider,
  QuestionProvider,
  ThemeProvider,
} from "./context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <CurrentQuestionProvider>
        <QuestionProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </QuestionProvider>
      </CurrentQuestionProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
