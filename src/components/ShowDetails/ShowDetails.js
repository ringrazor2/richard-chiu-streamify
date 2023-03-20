import "./ShowDetails.scss";
import notFound from "../../assets/images/icons/notfound-icon.png";
import netflix from "../../assets/images/icons/netflix-icon.png";
import prime from "../../assets/images/icons/primevideo-icon.png";
import disneyPlus from "../../assets/images/icons/disneyPlus-icon.png";
import crave from "../../assets/images/icons/crave-icon.png";
import hbo from "../../assets/images/icons/hbo-icon.png";
import hulu from "../../assets/images/icons/hulu-icon.png";

const ShowDetails = ({ show }) => {
  return (
    <div className="show-details">
      <div className="show-poster-container">
        <img
          className="poster-image"
          src={show.posterURLs[342]}
          alt="show poster"
        ></img>
        <p className="show-info">
          <span className="show-subhead">Imdb Rating </span>
          {show.imdbRating}/100
        </p>
        <p className="show-info">
          <span className="show-subhead">Type </span>
          {show.type}
        </p>
        <p className="show-info">
          <span className="show-subhead">Year </span>
          {show.year || show.firstAirYear}
        </p>
        <p className="show-info genres">
          <span className="show-subhead">Genres </span>
          {show.genre || "General"}
        </p>
      </div>

      <div className="show-text-container">
        <h2 className="show-title">{show.title}</h2>
        <h3 className="show-synopsis-title">Synopsis </h3>
        <p className="show-synopsis">{show.overview}</p>

        {show.streamingService && (
          <div className="stream-info">
            {show.streamingService.map((service, index) => {
              let iconSrc = "";
              if (service === "netflix") {
                iconSrc = netflix;
              } else if (service === "prime") {
                iconSrc = prime;
              } else if (service === "hbo") {
                iconSrc = hbo;
              } else if (service === "crave") {
                iconSrc = crave;
              } else if (service === "hulu") {
                iconSrc = hulu;
              } else if (service === "disney plus") {
                iconSrc = disneyPlus;
              }
              return (
                <img
                  key={index}
                  className="stream-icon"
                  src={iconSrc || notFound}
                  alt={`${service} icon`}
                />
              );
            })}
            <p className="stream-region">Region: USA {show.region}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
