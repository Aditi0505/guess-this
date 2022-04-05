import { Link } from "react-router-dom";
import { ResultCard } from "../../components/Card/ResultCard";
import { useCurrentQuestion } from "../../context";

const Result = () => {
  const { currentQuestionState } = useCurrentQuestion();
  return (
    <main className="padding-sm full-width flex-center result-container">
      <div className="heading flex-column">
        <h1 className="text-center heading-accent padding-sm">
          Final Result : {currentQuestionState.score} /100
        </h1>
        <Link
          to="/quiz-category"
          className="btn btn-success btn-align btn-next"
        >
          Go back to Category Page
        </Link>
        <section>
          <div>
            {currentQuestionState.results.map((result, index) => (
              <ResultCard key={index} result={result} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export { Result };
