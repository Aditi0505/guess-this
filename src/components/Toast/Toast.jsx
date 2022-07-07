import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../context";

const Toast = () => {
  const { themeState } = useTheme();
  return (
    <ToastContainer
      theme={themeState.theme === "light" ? "light" : "dark"}
      className="toastify-container"
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};
export { Toast };
