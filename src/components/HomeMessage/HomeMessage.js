import "./HomeMessage.scss";
import ExploreButton from "../ExploreButton/ExploreButton";
import StreamingLogos from "../StreamingLogos/StreamingLogos";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import screens from "../../assets/images/shows/phone-img.svg";
import threeScreen from "../../assets/images/screens.svg";

const HomeMessage = () => {
  const { user } = UserAuth();
  return (
    <>
      <div className="homeMessage-container pt-4 pl-8 lg:pt-[4rem] lg:pl-[7rem]">
        <div className="homeMessage__title-container mb-10 lg:mb-12 lg:w-[35%]">
          <div className="flex lg:block">
            <div>
              <h1 className="homeMessage__title text-4xl lg:text-[3.25rem] lg:mb-4">
                Making{" "}
              </h1>
              <h1 className="homeMessage__title text-4xl lg:text-[3.25rem] lg:mb-4">
                Streaming
              </h1>
              <h1 className="homeMessage__title text-4xl lg:text-[3.25rem] ">
                Easier!
              </h1>
            </div>
            <img className="z-0 w-[220px] lg:hidden" src={screens}></img>
          </div>
        </div>
        <p className="homeMessage__text text-3xl">
          Trying to figure out where to watch your show? We got you!
        </p>
        <img className="h-[280px] lg:hidden" src={threeScreen}></img>
        <div className="hidden lg:block">
          <p className="homeMessage__text-quality">Streaming Service</p>
          <p className="homeMessage__text-quality">Region</p>
          <p className="homeMessage__text-quality">Ratings</p>
        </div>
        <h1 className="homeMessage__explore text-[2.75rem]">
          Find your show now!
        </h1>
        <div className="homeMessage__button-container lg:flex">
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
