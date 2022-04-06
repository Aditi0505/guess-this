import axios from "axios";

export const fetchQuestionsByCategory = async (
  categoryNumber,
  difficulty,
  questionDispatch
) => {
  try {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficulty}&type=multiple`
    );
    questionDispatch({
      type: "ADDED_QUESTIONS",
      payload: data.results,
    });
  } catch (error) {
    console.log("error", error);
  }
};
