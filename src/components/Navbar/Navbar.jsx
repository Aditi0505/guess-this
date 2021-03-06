import { Link, useLocation } from "react-router-dom";
import { useAuth, useFilter, useTheme } from "../../context";
import { Button } from "../Button/Button";

const Navbar = () => {
  const location = useLocation();
  const { themeState, themeDispatch } = useTheme();
  const { filterState, filterDispatch } = useFilter();
  const { authState } = useAuth();
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
        {location.pathname === "/quiz-category" ? (
          <input
            type="text"
            name="search"
            id="search"
            placeholder="🔍 Search"
            className="border-none border-rd2"
            onChange={(e) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
            value={filterState.searchKeyword}
          />
        ) : (
          ""
        )}

        <ul className="nav-icons">
          {authState.encodedToken ? (
            <Button buttonState={"Logout"} route="" />
          ) : location.pathname === "/" ? (
            <Button buttonState={"Login"} route="login" />
          ) : location.pathname === "/login" ? (
            <Button buttonState={"Signup"} route="signup" />
          ) : location.pathname === "/signup" ? (
            <Button buttonState={"Login"} route="login" />
          ) : (
            <Button buttonState={"Login"} route="login" />
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
