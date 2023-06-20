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
import showtime from "../../assets/images/icons/showTime-icon.jpg";
import faveIcon from "../../assets/images/icons/favorite-icon.png";
import faveIconActive from "../../assets/images/icons/favourite-icon-active.png";
import watchlistIcon from "../../assets/images/icons/watchlist-icon.png";
import watchlistIconActive from "../../assets/images/icons/watchlist-icon-active.png";
import nordvpnIcon from "../../assets/images/icons/nordvpn-icon.jpg";
import cyberghost from "../../assets/images/icons/cyberghost-icon.jpeg";
import piaIcon from "../../assets/images/icons/pia-icon.png";

const ShowDetails = ({ show, className, country }) => {
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
      console.error("Please log in to save shows");
    }
  };
  const saveShow = async () => {
    if (user?.email) {
      setSavedShow(true);
      await updateDoc(showPath, {
        watchList: arrayUnion({ ...show }),
      });
    } else {
      console.error("Please log in to save shows");
    }
  };

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
    <div
      className={` ${className} flex w-[85%] p-4 lg:p-8 rounded-md bg-zinc-900 max-h-[520px] overflow-auto`}
    >
      <div className="flex flex-col text-xs lg:text-[1rem] mr-4 lg:mr-6 ">
        <Link to={show.youtubeTrailerVideoLink} target="_blank">
          <img
            className=" object-cover w-[140px]  mb-2 lg:h-[300px] lg:mr-12 lg:w-[200px] rounded-sm max-w-auto"
            src={show.posterURLs[342]}
            alt="show poster"
          />
        </Link>
        <p className="show-info w-[140px] lg-w-[200px] lg:text-[16px] flex justify-between ">
          <span className="show-subhead">Imdb Rating </span>
          {show.imdbRating}/100
        </p>
        <p className="show-info w-[140px] lg-w-[200px] lg:text-[16px] flex justify-between">
          <span className="show-subhead">Type </span>
          {show.type}
        </p>
        <p className="show-info w-[140px] lg-w-[200px] lg:text-[16px] flex justify-between">
          <span className="show-subhead">Year </span>
          {show.year || show.firstAirYear}
        </p>
        <p className="show-info genres w-[140px] lg-w-[200px] lg:text-[16px] flex justify-between">
          <span className="show-subhead flex-end">Genres </span>
          {show.genre && show.genre.length > 0 ? show.genre : "General"}
        </p>
        <div className="lg:hidden flex mt-8">
          <Link className="vpn-a" to="https://nordvpn.com/" target="_blank">
            <img src={nordvpnIcon} alt="nordvpn icon" className="vpn-icon" />
          </Link>
          <Link
            className="vpn-a"
            to="https://cyberghostvpn.com"
            target="_blank"
          >
            <img
              src={cyberghost}
              alt="cyberghost vpn icon"
              className="vpn-icon"
            />
          </Link>
          <Link
            className="vpn-a"
            to="https://privateinternetaccess.com/"
            target="_blank"
          >
            <img src={piaIcon} alt="nordvpn icon" className="vpn-icon" />
          </Link>
        </div>
        <div className="lg:hidden flex mt-8 overflow-auto">
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
                <Link target="_blank" to={linkSrc} className="lg:mr-6">
                  <img
                    key={index}
                    className="lg:h-[4.7rem] lg:w-[4.7rem] lg:rounded-xl h-10 rounded mr-6"
                    src={iconSrc || notFound}
                    alt={`${service} icon`}
                  />
                </Link>
              );
            })}
        </div>
        <p className="mt-2.5 lg:hidden text-white">Region: {country || "US"}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row lg:mb-[1.2rem] lg:justify-between">
          <div className="flex">
            <h2 className="show-title text-3xl lg:text-[2.625rem]">
              {show.title}
            </h2>
            <div className=" flex mr-2 lg:mx-8">
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
          <div className="hidden lg:flex">
            <Link className="vpn-a" to="https://nordvpn.com/" target="_blank">
              <img src={nordvpnIcon} alt="nordvpn icon" className="vpn-icon" />
            </Link>
            <Link
              className="vpn-a"
              to="https://cyberghostvpn.com"
              target="_blank"
            >
              <img
                src={cyberghost}
                alt="cyberghost vpn icon"
                className="vpn-icon"
              />
            </Link>
            <Link
              className="vpn-a"
              to="https://privateinternetaccess.com/"
              target="_blank"
            >
              <img src={piaIcon} alt="nordvpn icon" className="vpn-icon" />
            </Link>
          </div>
        </div>
        <h3 className="show-title text-white lg:text-3xl text-2xl my-5">
          Synopsis{" "}
        </h3>
        <p className="text-white text-sm lg:mb-8 lg:text-[21px] overflow-auto mb-4 lg:leading-7">
          {show.overview}
        </p>
        <div className=" hidden lg:flex">
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
                <Link target="_blank" to={linkSrc} className="lg:mr-2">
                  <img
                    key={index}
                    className="lg:h-[4.7rem] lg:w-[4.7rem] lg:rounded-xl h-10 rounded mr-6"
                    src={iconSrc || notFound}
                    alt={`${service} icon`}
                  />
                </Link>
              );
            })}
          <p className="stream-region">Region: {country || "US"}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
