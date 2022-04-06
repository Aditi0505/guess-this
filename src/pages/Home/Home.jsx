import { Link } from "react-router-dom";
import { setTitle } from "../../utils";

const Home = () => {
  setTitle("Guess This | Home");
  return (
    <div className="home-container flex-center">
      <div className="grid-container-col flex-spbt small-screen">
        <div className="column">
          <div className="grid-container flex-spbt">
            <div className="row">
              <h1 className="heading-accent"> Welcome to Guess This!</h1>
            </div>
            <div className="row desc">
              <p className="text-md text-center">
                This is an engaging quiz game where you answer fun questions in
                different categories. It offers mutiple choices for you to pick
                the correct one!
              </p>
            </div>
            <div className="row">
              <p className="text-md text-center">
                Click Here to
                <Link
                  to="/quiz-category"
                  className="btn btn-link text-md text-center"
                >
                  Play
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <img
            src="/assets/images/landing-page.svg"
            alt="landingPage quiz"
            className="landing-img responsive"
          />
        </div>
      </div>
    </div>
  );
};

export { Home };
