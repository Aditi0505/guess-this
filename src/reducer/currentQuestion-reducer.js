const currentQuestionReducer = (state, action) => {
  switch (action.type) {
    case "CURRENT":
      return {
        ...state,
        currentQuestion: action.payload.currentQuestion,
        question: action.payload.question,
        selectedOption: action.payload.selectedOption,
        correctAnswer: action.payload.correctAnswer,
        score:
          action.payload.selectedOption === action.payload.correctAnswer
            ? state.score + 10
            : state.score,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        correctAnswer: "",
        score: state.score,
        question: "",
      };
    default:
      return state;
  }
};

export { currentQuestionReducer };
