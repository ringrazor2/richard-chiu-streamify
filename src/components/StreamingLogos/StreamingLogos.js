import "./StreamingLogos.scss";
import { Link } from "react-router-dom";
import netflix from "../../assets/images/icons/netflix-icon.png";
import primeVideo from "../../assets/images/icons/primevideo-icon.png";
import disneyPlus from "../../assets/images/icons/disneyPlus-icon.png";
import crave from "../../assets/images/icons/crave-icon.png";
import hbo from "../../assets/images/icons/hbo-icon.png";
const StreamingLogos = () => {
  return (
    <div className="streaming-logos">
      <Link to="www.netflix.com">
        <img className="streaming-logo" alt="netflix logo" src={netflix}></img>
      </Link>
      <Link to="www.primevideo.com">
        <img
          className="streaming-logo"
          alt="prime video logo"
          src={primeVideo}
        ></img>
      </Link>
      <Link to="www.disneyplus.com">
        <img
          className="streaming-logo"
          alt="disney plus logo"
          src={disneyPlus}
        ></img>
      </Link>
      <Link to="www.crave.com">
        <img className="streaming-logo" alt="crave logo" src={crave}></img>
      </Link>
      <Link to="www.hbomax.com">
        <img className="streaming-logo" alt="hbo logo" src={hbo}></img>
      </Link>
    </div>
  );
};
export default StreamingLogos;
