import { Quiz } from "../pages";

export const playQuiz = (questions, navigate) => {
  navigate("/play");
  return <Quiz questions />;
};
