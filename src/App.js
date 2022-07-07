import "./App.css";
import {
  Home,
  Login,
  Quiz,
  QuizCategory,
  Result,
  RulesPage,
  Signup,
} from "./pages";
import { Footer, Navbar, Toast } from "./components";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./context";
const App = () => {
  const { themeState } = useTheme();
  return (
    <div className={themeState.theme === "light" ? "light-mode" : "dark-mode"}>
      <Toast />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/quiz-category" element={<QuizCategory />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/play" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
