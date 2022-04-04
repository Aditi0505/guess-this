export const colorHandler = (currentQuestionState, option) => {
  return currentQuestionState.selectedOption === option &&
    option === currentQuestionState.correctAnswer
    ? "correct"
    : currentQuestionState.selectedOption === option &&
      option !== currentQuestionState.correctAnswer
    ? "incorrect"
    : option === currentQuestionState.correctAnswer
    ? "correct"
    : "";
};
