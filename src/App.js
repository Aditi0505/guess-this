import "./App.css";
import { Home } from "./pages/index";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
