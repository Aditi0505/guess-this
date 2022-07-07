import { Link } from "react-router-dom";
import { rules } from "../../data/rules";
import { setTitle } from "../../utils";

const RulesPage = () => {
  const title = "Guess This | Rules Page";
  setTitle(title);
  return (
    <div className="home-container flex-center">
      <div className="grid-container-col flex-spbt small-screen">
        <div className="column">
          <div className="grid-container flex-spbt">
            <h1 className="heading-accent rules">Rules To Play:</h1>
            <div className="row desc">
              <ul className="text-sm text-left">
                {rules.map((rule) => (
                  <li className="padding-xs" key={rule.id}>
                    {rule.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="row">
              <p className="text-md">
                <Link
                  to="/play"
                  className="btn btn-primary text-sm text-center"
                >
                  Start
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <img
            src="/assets/images/rules-page.svg"
            alt="landingPage quiz"
            className="landing-img responsive"
          />
        </div>
      </div>
    </div>
  );
};

export { RulesPage };
