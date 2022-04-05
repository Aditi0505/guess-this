export const fetchNextQuestion = (
  currentQuestionState,
  currentQuestionDispatch,
  navigate
) => {
  if (currentQuestionState.currentQuestion === 9) {
    navigate("/result");
  } else if (currentQuestionState.selectedOption) {
    currentQuestionDispatch({
      type: "NEXT_QUESTION",
      payload: "",
    });
  } else {
    console.log("Please select option first");
  }
};
