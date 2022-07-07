import axios from "axios";
import { toast } from "react-toastify";
export const fetchQuestionsByCategory = async (
  categoryNumber,
  difficulty,
  navigate,
  questionDispatch,
  authState,
  currentQuestionDispatch,
  currentQuestionState,
  location
) => {
  try {
    if (authState.encodedToken) {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`
      );
      navigate("/rules");
      if (currentQuestionState.currentCategory !== categoryNumber) {
        currentQuestionDispatch({
          type: "INITIALIZE_QUESTION",
        });
      }
      currentQuestionDispatch({
        type: "CURRENT_CATEGORY",
        payload: categoryNumber,
      });
      questionDispatch({
        type: "ADDED_QUESTIONS",
        payload: data.results,
      });
    } else {
      navigate("/login", { state: { from: location } });
    }
  } catch (error) {
    toast.error("Cannot display question right now. Please try again!");
  }
};
