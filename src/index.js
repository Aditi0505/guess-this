import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  CurrentQuestionProvider,
  FilterProvider,
  QuestionProvider,
  ThemeProvider,
} from "./context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <FilterProvider>
        <CurrentQuestionProvider>
          <QuestionProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </QuestionProvider>
        </CurrentQuestionProvider>
      </FilterProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
