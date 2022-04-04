export const fetchNextQuestion = (
  currentQuestionState,
  currentQuestionDispatch,
  navigate
) => {
  if (currentQuestionState.currentQuestion > 8) {
    navigate("/result");
  } else if (currentQuestionState.selectedOption) {
    currentQuestionDispatch({
      type: "NEXT_QUESTION",
      payload: "",
    });
  } else {
    console.log("PPlease select option first");
  }
};
