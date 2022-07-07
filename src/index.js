import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  CurrentQuestionProvider,
  FilterProvider,
  QuestionProvider,
  ThemeProvider,
} from "./context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <FilterProvider>
          <CurrentQuestionProvider>
            <QuestionProvider>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </QuestionProvider>
          </CurrentQuestionProvider>
        </FilterProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
