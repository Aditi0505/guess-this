import { Link } from "react-router-dom";
const Button = ({ buttonState, route }) => {
  return (
    <li>
      <Link to={`/${route}`} className="btn btn-ghost-primary">
        {buttonState}
      </Link>
    </li>
  );
};

export { Button };
