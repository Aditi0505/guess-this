import { Link } from "react-router-dom";

const Card = ({ title, image }) => {
  return (
    <section>
      <div class="card">
        <div class="card-inner-container">
          <div class="card-image-overlay">
            <Link to="/play">
              <img src={image} alt={`${title} card`} class="img" />
            </Link>
          </div>
          <div class="card-body">
            <div class="card-title padding-xs text-left">
              <p>See if you can answer these fun questions?</p>
            </div>
            <div class="card-desc padding-xs text-left">
              <p class="full-width">Take this quiz to test yourself</p>
              <p class="text-xs">10 questions</p>
            </div>
          </div>
        </div>
        <div class="icons">
          <Link to="/play">
            <i class="fa fa-arrow-right btn btn-icon"></i>
          </Link>
          <span class="card-badge-text">
            {title.includes("Entertainment") ? title.substring(15) : title}
          </span>
        </div>
      </div>
    </section>
  );
};
export { Card };
