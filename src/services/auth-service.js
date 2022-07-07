import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase-config";
export const loginHandler = async (
  email,
  password,
  authDispatch,
  navigate,
  location,
  toast
) => {
  try {
    if (email !== "" && password !== "") {
      const authentication = getAuth(app);
      const data = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      );

      authDispatch({
        type: "LOGIN",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/", {
        replace: true,
      });
      toast.success("User logged in successfully!");
    } else {
      toast.warn("Please enter correct details");
    }
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      toast.error("Please check the Password");
    }
    if (error.code === "auth/user-not-found") {
      toast.error("Please check the Email");
    }
  }
};

export const signupHandler = async (
  email,
  password,
  authDispatch,
  navigate,
  location,
  toast
) => {
  try {
    const authentication = getAuth(app);
    if (email !== "" && password !== "") {
      const data = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );
      authDispatch({
        type: "SIGNUP",
        payload: { email: email, pasword: password, data },
      });
      navigate(location.state?.from?.pathname || "/login", {
        replace: true,
      });
      toast.success("User Signup Successful!");
    } else {
      toast.error("Please enter correct details.");
    }
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      toast.error("Email Already in Use");
    }
  }
};
