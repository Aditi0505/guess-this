import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";

const Navbar = () => {
  const location = useLocation();
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
          <li>
            <i class="fas fa-toggle-off nav-icon" id="toggle"></i>
          </li>
        </ul>
      </header>
    </div>
  );
};

export { Navbar };
