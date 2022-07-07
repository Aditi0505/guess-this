import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    userName: "",
    encodedToken: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("quiz-token", authState.encodedToken);
  }, [authState.encodedToken]);

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT", payload: "" });
    localStorage.removeItem("quiz-token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
