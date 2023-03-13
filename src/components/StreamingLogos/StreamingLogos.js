import "./StreamingLogos.scss";
import netflix from "../../assets/images/icons/netflix-icon.png";
import primeVideo from "../../assets/images/icons/primevideo-icon.png";
import disneyPlus from "../../assets/images/icons/disneyPlus-icon.png";
import crave from "../../assets/images/icons/crave-icon.png";
import hbo from "../../assets/images/icons/hbo-icon.png";
const StreamingLogos = () => {
  return (
    <div className="streaming-logos">
      <img className="streaming-logo" alt="netflix logo" src={netflix}></img>
      <img
        className="streaming-logo"
        alt="prime video logo"
        src={primeVideo}
      ></img>
      <img
        className="streaming-logo"
        alt="disney plus logo"
        src={disneyPlus}
      ></img>
      <img className="streaming-logo" alt="crave logo" src={crave}></img>
      <img className="streaming-logo" alt="hbo logo" src={hbo}></img>
    </div>
  );
};
export default StreamingLogos;
