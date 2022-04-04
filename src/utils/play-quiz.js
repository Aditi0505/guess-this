import { Quiz } from "../pages";

export const playQuiz = (questions, navigate) => {
  console.log("play", questions, navigate);
  navigate("/play");
  return <Quiz questions />;
};
