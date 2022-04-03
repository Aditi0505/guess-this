import "./App.css";
import { Home, QuizCategory, RulesPage } from "./pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context";
const App = () => {
  const { themeState } = useTheme();
  return (
    <div className={themeState.theme === "light" ? "light-mode" : "dark-mode"}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quiz-category" element={<QuizCategory />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </div>
  );
};

export default App;
