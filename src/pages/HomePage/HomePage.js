import "./HomePage.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/icons/streamify-logo.svg";
import HomeMessage from "../../components/HomeMessage/HomeMessage";
import NavBar from "../../components/NavBar/NavBar";
import screens from "../../assets/images/screens.svg";
import Footer from "../../components/Footer/Footer";
// import bg from "../../assets/images/backgrounds/primary-background.svg"

const HomePage = () => {
  return (
    <>
      <div className=" bg-backDrop relative">
        <NavBar />
        <div className="homePage-main lg:flex">
          <div className="lg:hidden absolute top-0 left-20">
            <Link className="logo-link" to="/">
              <img
                className="h-[4rem] mr-4 ml-6"
                src={logo}
                alt="site logo"
              ></img>
              <h1 className="site__title text-[3rem] ">STREAMIFY</h1>
            </Link>
          </div>

          <div className="hidden lg:block mt-10">
            <HomeMessage className="homePage-textContainer" />
          </div>
          <div className="hidden lg:block">
            <img className="home-screen" src={screens}></img>
          </div>
        </div>
        <div className="lg:hidden">
          <HomeMessage />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
