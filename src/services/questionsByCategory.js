import axios from "axios";
import { toast } from "react-toastify";
export const fetchQuestionsByCategory = async (
  categoryNumber,
  difficulty,
  navigate,
  questionDispatch,
  authState
) => {
  try {
    if (authState.encodedToken) {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`
      );
      navigate("/rules");
      questionDispatch({
        type: "ADDED_QUESTIONS",
        payload: data.results,
      });
    } else {
      navigate("/login");
    }
  } catch (error) {
    toast.error("Cannot display question right now. Please try again!");
  }
};
