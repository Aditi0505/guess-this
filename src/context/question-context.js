import { createContext, useContext, useReducer } from "react";
import { questionReducer } from "../reducer";

const QuestionContext = createContext(null);

const QuestionProvider = ({ children }) => {
  const [questionState, questionDispatch] = useReducer(questionReducer, {
    questions: [],
  });

  return (
    <QuestionContext.Provider value={{ questionState, questionDispatch }}>
      {children}
    </QuestionContext.Provider>
  );
};

const useQuestion = () => useContext(QuestionContext);

export { useQuestion, QuestionProvider };
