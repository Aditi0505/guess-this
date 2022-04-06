import { Link } from "react-router-dom";
import { Question } from "../../components/Question/Question";
import { useCurrentQuestion, useQuestion } from "../../context";
import { setTitle } from "../../utils";

const Quiz = () => {
  const { questionState } = useQuestion();
  const { currentQuestionState } = useCurrentQuestion();
  const { questions } = questionState;
  const { currentQuestion } = currentQuestionState;
  setTitle("Guess This | Play Quiz");
  return questionState.questions.length > 0 ? (
    <Question
      categoryname={
        questions[currentQuestion].category
          ? questions[currentQuestion].category
          : "Sports"
      }
      currentQuestion={currentQuestion}
      incorrectAnswers={questions[currentQuestion].incorrect_answers}
      correctAnswer={questions[currentQuestion].correct_answer}
      questionBank={questions}
      score={currentQuestionState.score}
    />
  ) : (
    <>
      <Link
        to="/quiz-category"
        className="btn btn-success btn-align btn-next home-container flex-center"
      >
        Go back to Category Page
      </Link>
    </>
  );
};
export { Quiz };
