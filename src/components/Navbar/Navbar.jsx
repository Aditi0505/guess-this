import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context";
import { Button } from "../Button/Button";

const Navbar = () => {
  const location = useLocation();
  const { themeState, themeDispatch } = useTheme();
  return (
    <div>
      <header className="desktop-navigation position-fixed">
        <nav className="logo-wrapper">
          <div className="nav-logo"></div>
          <div>
            <Link to="/" className="site-link">
              <p className="text-lg">Guess This</p>
            </Link>
          </div>
        </nav>
        <ul className="nav-icons">
          {location.pathname === "/" ? (
            <Button buttonState={"Login"} route="login" />
          ) : location.pathname === "/login" ? (
            <Button buttonState={"Signup"} route="signup" />
          ) : location.pathname === "/signup" ? (
            <Button buttonState={"Login"} route="login" />
          ) : (
            <Button buttonState={"Logout"} route="" />
          )}
          {themeState.theme === "light" ? (
            <li>
              <i
                className="fas fa-toggle-off nav-icon"
                id="toggle"
                onClick={() =>
                  themeDispatch({
                    type: "LIGHT",
                  })
                }
              ></i>
            </li>
          ) : (
            <li>
              <i
                className="fas fa-toggle-on nav-icon"
                id="toggle"
                onClick={() =>
                  themeDispatch({
                    type: "DARK",
                  })
                }
              ></i>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export { Navbar };
