import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../../../components";
import { setTitle } from "../../../utils/set-title";
import { useState } from "react";
import { useAuth } from "../../../context";
import { signupHandler } from "../../../services/auth-service";
import { toast } from "react-toastify";
const Signup = () => {
  const title = "Guess This | Signup";
  setTitle(title);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const validateFields = (email, password, confirmPassword) => {
    const validatePassword = password === confirmPassword;
    return validatePassword;
  };

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  const showSetConfirmPasswordHandler = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleInput = (e, value) => {
    if (value === "password") {
      setPassword(e.target.value);
    }
    if (value === "email address") {
      setUserName(e.target.value);
    }
    if (value === "confirm password") {
      setConfirmPassword(e.target.value);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  const validateHandler = () => {
    if (!userName && !password && !confirmPassword) {
    } else if (!confirmPassword && !password) {
    } else if (!confirmPassword && password) {
    } else if (!userName) {
    } else {
      const isValid = validateFields(userName, password, confirmPassword);
      if (isValid) {
        signupHandler(
          userName,
          password,
          authDispatch,
          navigate,
          location,
          toast
        );
      } else {
      }
    }
  };
  return (
    <main className="outer-wrapper flex-spbt">
      <section className="screen flex-spbt sign-up">
        <div className="form-container card-container-shadow">
          <div className="card-title">
            <h3>Signup</h3>
          </div>
          <form className="card-desc form" onSubmit={formSubmitHandler}>
            <div className="text-left padding-xs">
              <Input
                inputType="email"
                label="Email Address"
                placeholder="redcloset@gmail.com"
                inputHandler={handleInput}
                value={userName}
              />
            </div>
            {showPassword ? (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="text"
                  label="Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={password}
                />
                <i
                  className="fa fa-eye showPassword"
                  onClick={showPasswordHandler}
                ></i>
              </div>
            ) : (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="password"
                  label="Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={password}
                />
                <i
                  className="fa fa-eye showPassword"
                  onClick={showPasswordHandler}
                ></i>
              </div>
            )}

            {showConfirmPassword ? (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="text"
                  label="Confirm Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={confirmPassword}
                />
                <i
                  className="fa fa-eye showPassword"
                  onClick={showSetConfirmPasswordHandler}
                ></i>
              </div>
            ) : (
              <div className="text-left padding-xs passwordBox">
                <Input
                  inputType="password"
                  label="Confirm Password"
                  placeholder="*****************"
                  inputHandler={handleInput}
                  value={confirmPassword}
                />
                <i
                  className="fa fa-eye showPassword"
                  onClick={showSetConfirmPasswordHandler}
                ></i>
              </div>
            )}
            <button
              className="btn auth-btn btn-primary margin-tb-sm"
              onClick={validateHandler}
            >
              Create New Account
            </button>
            <div>
              <Link to="/login" className="text text-sm ft-light auth-label underlined">
                Already have an account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};
export { Signup };
