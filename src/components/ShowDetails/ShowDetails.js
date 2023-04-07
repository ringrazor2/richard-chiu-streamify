import "./ShowDetails.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
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
import faveIcon from "../../assets/images/icons/favorite-icon.png";
import faveIconActive from "../../assets/images/icons/favourite-icon-active.png";
import watchlistIcon from "../../assets/images/icons/watchlist-icon.png";
import watchlistIconActive from "../../assets/images/icons/watchlist-icon-active.png";
const ShowDetails = ({ show, className }) => {
  const [favedShow, setFavedShow] = useState(false);
  const [savedShow, setSavedShow] = useState(false);
  const { user } = UserAuth();

  const showPath = doc(db, "users", `${user?.email}`);
  const faveShow = async () => {
    if (user?.email) {
      setFavedShow(true);
      await updateDoc(showPath, {
        faveList: arrayUnion({ ...show }),
      });
    } else {
      console.log("Please log in to save shows");
    }
  };
  const saveShow = async () => {
    if (user?.email) {
      setSavedShow(true);
      await updateDoc(showPath, {
        watchList: arrayUnion({ ...show }),
      });
    } else {
      console.log("Please log in to save shows");
    }
  };
  return (
    <>
      <div className={`show-details ${className}`}>
        <div className="show-poster-container">
          <Link
            to={show.youtubeTrailerVideoLink}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="poster-image"
              src={show.posterURLs[342]}
              alt="show poster"
            />
          </Link>
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
            {show.genre && show.genre.length > 0 ? show.genre : "General"}
          </p>
        </div>
        <div className="show-text-container">
          <div className="show-heading-container">
            <h2 className="show-title">{show.title}</h2>
            <div className="show-icons">
              {favedShow ? (
                <img
                  src={faveIconActive}
                  alt="fave icon"
                  className="show-icon-active"
                />
              ) : (
                <img
                  src={faveIcon}
                  alt="fave icon"
                  className="show-icon"
                  onClick={faveShow}
                />
              )}
              {savedShow ? (
                <img
                  src={watchlistIconActive}
                  alt="watchlist icon"
                  className="show-icon-active watchlist"
                />
              ) : (
                <img
                  src={watchlistIcon}
                  alt="watchlist icon"
                  className="show-icon watchlist"
                  onClick={saveShow}
                />
              )}
            </div>
          </div>
          <h3 className="show-synopsis-title">Synopsis </h3>
          <p className="show-synopsis">{show.overview}</p>
          <div className="stream-info">
            {show.streamingService &&
              show.streamingService.map((service, index) => {
                let iconSrc = "";
                let linkSrc = "";
                if (service === "netflix") {
                  iconSrc = netflix;
                  linkSrc = show.streamingInfo.ca.netflix[0].link;
                } else if (service === "prime") {
                  iconSrc = prime;
                  linkSrc = show.streamingInfo.ca.prime[0].link;
                } else if (service === "hbo") {
                  iconSrc = hbo;
                  linkSrc = show.streamingInfo.ca.hbo[0].link;
                } else if (service === "crave") {
                  iconSrc = crave;
                  linkSrc = show.streamingInfo.ca.crave[0].link;
                } else if (service === "hulu") {
                  iconSrc = hulu;
                  linkSrc = show.streamingInfo.ca.hulu[0].link;
                } else if (service === "disney") {
                  iconSrc = disneyPlus;
                  linkSrc = show.streamingInfo.ca.disney[0].link;
                } else if (service === "crunchyroll") {
                  iconSrc = crunchyroll;
                  linkSrc = show.streamingInfo.ca.crunchyroll[0].link;
                } else if (service === "peacock") {
                  iconSrc = peacock;
                  linkSrc = show.streamingInfo.ca.peacock[0].link;
                } else if (service === "apple") {
                  iconSrc = apple;
                  linkSrc = show.streamingInfo.ca.apple[0].link;
                }
                return (
                  <Link target="_blank" to={linkSrc} className="streamLink">
                    <img
                      key={index}
                      className="stream-icon"
                      src={iconSrc || notFound}
                      alt={`${service} icon`}
                    />
                  </Link>
                );
              })}
            <p className="stream-region">
              Region: {(show.countries && show.countries[0]) || "US"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
