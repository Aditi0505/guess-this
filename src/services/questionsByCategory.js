import axios from "axios";

export const fetchQuestionsByCategory = async (
  categoryNumber,
  difficulty,
  navigate,
  questionDispatch
) => {
  try {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`
    );
    navigate("/rules");
    questionDispatch({
      type: "ADDED_QUESTIONS",
      payload: response.data.results,
    });
  } catch (error) {
    console.log("error", error);
  }
};
