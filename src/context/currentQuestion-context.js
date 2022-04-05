import { createContext, useContext, useReducer } from "react";
import { currentQuestionReducer } from "../reducer";

const CurrentQuestionContext = createContext(null);

const CurrentQuestionProvider = ({ children }) => {
  const [currentQuestionState, currentQuestionDispatch] = useReducer(
    currentQuestionReducer,
    {
      currentQuestion: 0,
      score: 0,
      selectedOption: "",
      question: "",
      results: [],
    }
  );

  return (
    <CurrentQuestionContext.Provider
      value={{ currentQuestionState, currentQuestionDispatch }}
    >
      {children}
    </CurrentQuestionContext.Provider>
  );
};

const useCurrentQuestion = () => useContext(CurrentQuestionContext);

export { useCurrentQuestion, CurrentQuestionProvider };
