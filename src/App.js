import "./App.css";
import { Home, QuizCategory } from "./pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context";
const App = () => {
  const { themeState } = useTheme();
  return (
    <div className={themeState.theme === "light" ? "light-mode" : "dark-mode"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-category" element={<QuizCategory />} />
      </Routes>
    </div>
  );
};

export default App;
