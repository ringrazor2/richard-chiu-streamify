import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/streamify-logo.svg";
import HomeMessage from "../../components/HomeMessage/HomeMessage";
import NavBar from "../../components/NavBar/NavBar";
import screens from "../../assets/images/screens.svg";
import Footer from "../../components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <div className="homePage relative">
        <NavBar />
        <div className="homePage-main">
          {/* <Link className="logo-link absolute" to="/">
            <img
              className="xs:h-[1.5rem] lg:h-[2.5rem] lg:mr-4 lg:ml-6 xl:h-[3.5rem]"
              src={logo}
              alt="site logo"
            ></img>
            <h1 className="site__title sm:text-[2.5rem] xl:text-[3rem]">
              STREAMIFY
            </h1>
          </Link> */}
          <HomeMessage className="homePage-textContainer" />
          <img className="home-screen" src={screens}></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
