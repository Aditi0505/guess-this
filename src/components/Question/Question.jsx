import { Link, useNavigate } from "react-router-dom";
import { useCurrentQuestion } from "../../context";
import { colorHandler, fetchNextQuestion } from "../../utils";

const Question = ({
  categoryname,
  currentQuestion,
  incorrectAnswers,
  correctAnswer,
  questionBank,
  score,
}) => {
  const options = [...incorrectAnswers, correctAnswer];
  const { currentQuestionState, currentQuestionDispatch } =
    useCurrentQuestion();
  const navigate = useNavigate();
  return (
    <main className="padding-sm grid-container flex-center question-wrapper">
      <section className="question-container">
        <h1 className="text-center padding-sm">
          {`Welcome to
          ${
            categoryname.includes("Entertainment")
              ? categoryname.substring(15)
              : categoryname
          }
          Quiz!`}
        </h1>
        <div className="flex-spbt padding-sm">
          <div className="text-left">
            Question: {currentQuestion + 1} /
            {questionBank && questionBank.length}
          </div>
          <div className="text-right">Score: {score}</div>
        </div>
        <div className="flex-spbt padding-sm">
          <div className="text-left">
            {questionBank[currentQuestion].question}
          </div>
        </div>
        <div className="flex-column padding-sm">
          {options &&
            options.map((option) => (
              <button
                key={option}
                className={`buttonOption ${
                  currentQuestionState.selectedOption &&
                  colorHandler(currentQuestionState, option)
                }`}
                onClick={() =>
                  currentQuestionDispatch({
                    type: "CURRENT",
                    payload: {
                      currentQuestion: currentQuestion,
                      selectedOption: option,
                      correctAnswer: correctAnswer,
                      question: questionBank[currentQuestion],
                    },
                  })
                }
                disabled={currentQuestionState.selectedOption}
              >
                {option}
              </button>
            ))}
        </div>

        <div className="flex-spbt padding-sm">
          <Link to="/quiz-category" className="btn btn-error btn-quit">
            Quit
          </Link>
          <button
            className="btn btn-success btn-next"
            onClick={() =>
              fetchNextQuestion(
                currentQuestionState,
                currentQuestionDispatch,
                navigate
              )
            }
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export { Question };
