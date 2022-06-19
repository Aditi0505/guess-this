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
  } catch (e) {
    toast.error("Cannot login right now");
  }
};

export const signupHandler = async (
  email,
  password,
  authDispatch,
  navigate,
  location
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
      // toastDispatch({
      //   type: "SHOW",
      //   payload: "Signup Successful!",
      // });
      // data.errors &&
      //   toastDispatch({
      //     type: "SHOW",
      //     payload: data.errors[0],
      //   });
    } else {
      // toastDispatch({
      //   type: "SHOW",
      //   payload: "Please enter correct details.",
      // });
    }
  } catch (error) {
    console.log(error);
    // toastDispatch({
    //   type: "SHOW",
    //   payload: error,
    // });
  }
};
