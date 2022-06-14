import { useNavigate } from "react-router-dom";
import { useAuth, useQuestion } from "../../context";
import { fetchQuestionsByCategory } from "../../services";
const Card = ({ title, image, difficulty, categoryNumber }) => {
  const { questionDispatch } = useQuestion();
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <section>
      <div className="card">
        <div className="card-inner-container">
          <div className="card-image-overlay btn">
            <img
              src={image}
              alt={`${title} card`}
              className="img"
              onClick={() =>
                fetchQuestionsByCategory(
                  categoryNumber,
                  difficulty,
                  navigate,
                  questionDispatch,
                  authState
                )
              }
            />
          </div>
          <div className="card-body">
            <div className="card-title padding-xs text-left">
              <p>See if you can answer these fun questions?</p>
            </div>
            <div className="card-desc padding-xs text-left">
              <p className="full-width">Take this quiz to test yourself</p>
              <p className="text-xs">10 questions</p>
            </div>
          </div>
        </div>
        <div className="icons">
          <i
            className="fa fa-arrow-right btn btn-icon"
            onClick={() =>
              fetchQuestionsByCategory(
                categoryNumber,
                difficulty,
                navigate,
                questionDispatch,
                authState
              )
            }
          ></i>
          <span className="card-badge-text">
            {title.includes("Entertainment") ? title.substring(15) : title}
          </span>
        </div>
      </div>
    </section>
  );
};
export { Card };
