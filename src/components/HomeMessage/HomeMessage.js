import "./HomeMessage.scss";
import ExploreButton from "../ExploreButton/ExploreButton";
import StreamingLogos from "../StreamingLogos/StreamingLogos";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
const HomeMessage = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="homeMessage-container">
        <div className="homeMessage__title-container">
          <h1 className="homeMessage__title">Making</h1>
          <h1 className="homeMessage__title">Streaming Easier!</h1>
        </div>
        <p className="homeMessage__text">
          Trying to figure out where to watch your show? We got you!
        </p>
        <p className="homeMessage__text-quality">Streaming Service</p>
        <p className="homeMessage__text-quality">Region</p>
        <p className="homeMessage__text-quality">Ratings</p>
        <h1 className="homeMessage__explore">Find your show now!</h1>
        <div className="homeMessage__button-container">
          <Link to={user ? "/search" : "/signup"}>
            <ExploreButton buttonText="Explore" />
          </Link>
          <StreamingLogos />
        </div>
      </div>
    </>
  );
};

export default HomeMessage;
