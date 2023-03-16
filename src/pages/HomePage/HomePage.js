import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import HomeMessage from "../../components/HomeMessage/HomeMessage";
import Slider from "../../components/Slider/Slider";
const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <NavBar />
        <HomeMessage className="homePage-textContainer" />
        {/* <Slider /> */}
      </div>
    </>
  );
};

export default HomePage;
