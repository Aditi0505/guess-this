import { Question } from "../../components/Question/Question";
import { useCurrentQuestion, useQuestion } from "../../context";

const Quiz = () => {
  const { questionState } = useQuestion();
  const { currentQuestionState } = useCurrentQuestion();
  const { questions } = questionState;
  const { currentQuestion } = currentQuestionState;
  return questionState.questions ? (
    <Question
      categoryname={questions[currentQuestion].category}
      currentQuestion={currentQuestion}
      incorrectAnswers={questions[currentQuestion].incorrect_answers}
      correctAnswer={questions[currentQuestion].correct_answer}
      questionBank={questions}
      score={currentQuestionState.score}
    />
  ) : (
    <h1 className="flex-center">Loading...</h1>
  );
};
export { Quiz };
