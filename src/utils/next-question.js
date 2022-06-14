import { toast } from "react-toastify";

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
    toast.error("Please select option first");
  }
};
