import "./HomePage.scss";
import HomeMessage from "../../components/HomeMessage/HomeMessage";
import NavBar from "../../components/NavBar/NavBar";
import screens from "../../assets/images/screens.svg";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <NavBar />
        <div className="homePage-main">
          <HomeMessage className="homePage-textContainer" />
          <img className="home-screen" src={screens}></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
