import "./ShowDetails.scss";
import { Link } from "react-router-dom";
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
import dummyPicture from "../../assets/images/shows/gameofthrones.jpg";
const DummyDetails = () => {
  return (
    <>
      <div className="show-details">
        <div className="show-poster-container">
          <a
          // href={show.youtubeTrailerVideoLink}
          // target="_blank"
          // rel="noreferrer"
          >
            <img
              className="poster-image"
              src={dummyPicture}
              alt="show poster"
            />
          </a>
          <p className="show-info">
            <span className="show-subhead">Imdb Rating </span>
            50/100
          </p>
          <p className="show-info">
            <span className="show-subhead">Type </span>
            Movie
          </p>
          <p className="show-info">
            <span className="show-subhead">Year </span>
            2023
          </p>
          <p className="show-info genres">
            <span className="show-subhead">Genres </span>
            Fantasy, Drama, Dark
          </p>
        </div>
        <div className="show-text-container">
          <h2 className="show-title">Game of Thrones</h2>
          <h3 className="show-synopsis-title">Synopsis </h3>
          <p className="show-synopsis">
            Nine noble families fight for control over the lands of Westeros,
            while an ancient enemy returns after being dormant for millennia.
          </p>
          <div className="stream-info">
            <img className="stream-icon" src={netflix} alt={`dummy icon`} />
            <img className="stream-icon" src={prime} alt={`dummy icon`} />
            <img className="stream-icon" src={hbo} alt={`dummy icon`} />

            <p className="stream-region">Region: "CAD"</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyDetails;
