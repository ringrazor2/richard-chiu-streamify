import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import HomeMessage from "../../components/HomeMessage/HomeMessage";
const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <NavBar />
        <HomeMessage className="homePage-textContainer" />
      </div>
    </>
  );
};

export default HomePage;
