import "./ExploreButton.scss";
import { Link } from "react-router-dom";
const ExportButton = () => {
  return (
    <Link to="/search">
      <button className="explore-button">
        <span className="explore-button__text">Explore</span>
      </button>
    </Link>
  );
};

export default ExportButton;
