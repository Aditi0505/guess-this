import { colorHandler } from "../../utils";

const ResultCard = ({ result }) => {
  const options = result.questions["incorrect_answers"].concat(
    result.correctAnswer
  );

  return (
    <div className="question padding-sm">
      <div className="flex-spbt padding-sm">
        <p className="text-left text-sm ft-bold">
          {result.questions["question"]}
        </p>
      </div>
      <div className="flex-column padding-sm">
        {options &&
          options.map((option) => (
            <button
              key={option}
              className={`buttonOption ${
                result.selectedOption && colorHandler(result, option)
              }`}
              disabled={result.selectedOption}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};
export { ResultCard };
