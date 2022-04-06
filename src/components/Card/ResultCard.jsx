import { colorHandler } from "../../utils";
import { decode } from "html-entities";
const ResultCard = ({ result }) => {
  const options = result.questions["incorrect_answers"].concat(
    result.correctAnswer
  );

  return (
    <div className="question padding-sm">
      <div className="flex-spbt padding-sm">
        <p className="text-left text-sm ft-bold">
          {decode(result.questions["question"])}
        </p>
      </div>
      <div className="flex-column padding-sm">
        {options?.map((option) => (
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
