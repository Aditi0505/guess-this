import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container flex-center">
      <div className="grid-container-col flex-spbt">
        <div className="column">
          <div class="grid-container flex-spbt">
            <div class="row">
              <h1> Welcome to Guess This!</h1>
            </div>
            <div class="row desc">
              <p className="text-md text-center">
                This is an engaging quiz game where you answer fun questions in
                different categories. It offers mutiple choices for you to pick
                the correct one!
              </p>
            </div>
            <div class="row">
              <p className="text-md text-center">
                Click Here to
                <Link to="/quiz-category">
                  <button class="btn btn-link text-md text-center">Play</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <img src="/assets/images/landing-page.svg" alt="landingPage quiz" />
        </div>
      </div>
    </div>
  );
};

export { Home };
