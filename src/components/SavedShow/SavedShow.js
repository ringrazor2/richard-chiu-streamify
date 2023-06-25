import "./SavedShow.scss";
import { Link } from "react-router-dom";
import trash from "../../assets/images/icons/trash-icon.png";
import notFound from "../../assets/images/icons/notfound-icon.png";
import netflix from "../../assets/images/icons/netflix-icon.png";
import prime from "../../assets/images/icons/primevideo-icon.png";
import disneyPlus from "../../assets/images/icons/disneyPlus-icon.png";
import crave from "../../assets/images/icons/crave-icon.png";
import hbo from "../../assets/images/icons/hbo-icon.png";
import hulu from "../../assets/images/icons/hulu-icon.png";
import crunchyroll from "../../assets/images/icons/crunchyroll-icon.png";
import peacock from "../../assets/images/icons/peakcock-icon.png";
import apple from "../../assets/images/icons/apple-icon.webp";
import showtime from "../../assets/images/icons/showTime-icon.jpg";

const SavedShow = ({ show, deleteShow }) => {
  function getIconSrc(service) {
    switch (service) {
      case "netflix":
        return netflix;
      case "prime":
        return prime;
      case "hbo":
        return hbo;
      case "crave":
        return crave;
      case "hulu":
        return hulu;
      case "disney":
        return disneyPlus;
      case "crunchyroll":
        return crunchyroll;
      case "peacock":
        return peacock;
      case "apple":
        return apple;
      case "showtime":
        return showtime;
      default:
        return notFound;
    }
  }

  return (
    <div className="show-card lg:w-[32%] lg:h-[18.75rem] w-[100%] h-[300px] ">
      <Link to={show.youtubeTrailerVideoLink} target="_blank" rel="noreferrer">
        <img
          className="poster-image lg:max-h-[300px] lg:max-w-[200px]"
          src={show.posterURLs[342]}
          alt="show poster"
        />
      </Link>
      <div className="show-card__right">
        <div className="show-card__description-container">
          <div className="show-card__heading-container">
            <h4 className="show-card__title">{show.title}</h4>
            <img
              src={trash}
              className="trash-icon"
              id={show.imdbId}
              onClick={deleteShow}
            ></img>
          </div>
          <p className="show-card__overview">{show.overview}</p>
        </div>
        <div className="show-card__streamLogos">
          {show.streamingService &&
            show.streamingService.map((service, index) => {
              let iconSrc = "";
              let linkSrc = "";
              for (const country in show.streamingInfo) {
                if (show.streamingInfo[country][service]) {
                  iconSrc = getIconSrc(service);
                  linkSrc = show.streamingInfo[country][service][0].link;
                  break;
                }
              }
              return (
                <Link target="_blank" to={linkSrc} className="stream-anchor">
                  <img
                    key={index}
                    className="show-card__stream-icon"
                    src={iconSrc || notFound}
                    alt={`${service} icon`}
                  />
                </Link>
              );
            })}
          <p className="show-card__country">{show.countries[0] || "us"}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedShow;
