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

const SavedShow = ({ show, deleteShow }) => {
  return (
    <div className="show-card">
      <Link to={show.youtubeTrailerVideoLink} target="_blank" rel="noreferrer">
        <img
          className="poster-image"
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
              if (service === "netflix") {
                iconSrc = netflix;
                linkSrc = show.streamingInfo.us.netflix[0].link;
              } else if (service === "prime") {
                iconSrc = prime;
                linkSrc = show.streamingInfo.us.prime[0].link;
              } else if (service === "hbo") {
                iconSrc = hbo;
                linkSrc = show.streamingInfo.us.hbo[0].link;
              } else if (service === "crave") {
                iconSrc = crave;
                linkSrc = show.streamingInfo.us.crave[0].link;
              } else if (service === "hulu") {
                iconSrc = hulu;
                linkSrc = show.streamingInfo.us.hulu[0].link;
              } else if (service === "disney") {
                iconSrc = disneyPlus;
                linkSrc = show.streamingInfo.us.disney[0].link;
              } else if (service === "crunchyroll") {
                iconSrc = crunchyroll;
                linkSrc = show.streamingInfo.us.crunchyroll[0].link;
              } else if (service === "peacock") {
                iconSrc = peacock;
                linkSrc = show.streamingInfo.us.peacock[0].link;
              } else if (service === "apple") {
                iconSrc = apple;
                linkSrc = show.streamingInfo.us.apple[0].link;
              }
              return (
                <Link target="_blank" to={linkSrc}>
                  <img
                    key={index}
                    className="show-card__stream-icon"
                    src={iconSrc || notFound}
                    alt={`${service} icon`}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SavedShow;
