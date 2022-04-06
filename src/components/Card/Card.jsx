import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuestion } from "../../context";
import { fetchQuestionsByCategory } from "../../services";
const Card = ({ title, image, difficulty, categoryNumber }) => {
  const { questionDispatch } = useQuestion();
  useEffect(() => {
    fetchQuestionsByCategory(categoryNumber, difficulty, questionDispatch);
  }, [categoryNumber, difficulty, questionDispatch]);
  return (
    <section>
      <div className="card">
        <div className="card-inner-container">
          <div className="card-image-overlay">
            <Link to="/rules">
              <img src={image} alt={`${title} card`} className="img" />
            </Link>
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
          <Link to="/rules">
            <i className="fa fa-arrow-right btn btn-icon"></i>
          </Link>

          <span className="card-badge-text">
            {title.includes("Entertainment") ? title.substring(15) : title}
          </span>
        </div>
      </div>
    </section>
  );
};
export { Card };
