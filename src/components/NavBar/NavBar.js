import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/icons/streamify-logo.svg";
import home from "../../assets/images/icons/home-icon.png";
import search from "../../assets/images/icons/search-icon.png";
import chat from "../../assets/images/icons/chat-icon.png";
import grid from "../../assets/images/icons/grids-icon.png";
import userIcon from "../../assets/images/icons/user-icon.png";
import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const [activeNavLink, setActiveNavLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signup");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className="w-full">
      <button
        className="flex-col justify-center items-center lg:hidden py-8 px-4"
        onClick={handleClick}
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-black/60 rounded-lg backdrop-blur-md py-32 lg:hidden"
        >
          <nav>
            <NavLink
              className="flex"
              to="/"
              onClick={() => handleNavLinkClick("home")}
            >
              <img
                className="navBar__icons-mobile mt-1"
                src={home}
                alt="home icon"
              ></img>{" "}
              <span
                className={` ${
                  activeNavLink === "home"
                    ? "active navBar__anchor-mobile"
                    : "navBar__anchor-mobile"
                }`}
              >
                Home
              </span>
            </NavLink>
            <NavLink
              className={` ${
                activeNavLink === "search"
                  ? "active navBar__anchor-mobile"
                  : "navBar__anchor-mobile"
              }`}
              to="/search"
              onClick={() => handleNavLinkClick("search")}
            >
              {" "}
              <img
                className="navBar__icons-mobile mt-1"
                src={search}
                alt="search icon"
              ></img>{" "}
              Search
            </NavLink>
            <NavLink
              className={` ${
                activeNavLink === "chat"
                  ? "active navBar__anchor-mobile mr-4"
                  : "navBar__anchor-mobile mr-4"
              }`}
              to="/chat"
              onClick={() => handleNavLinkClick("chat")}
            >
              {" "}
              <img
                className="navBar__icons-mobile mt-1"
                src={chat}
                alt="chat icon"
              ></img>{" "}
              Chat
            </NavLink>
            {/* <NavLink
              className={` ${
                activeNavLink === "3x3"
                  ? "active block mb-2"
                  : "block text-white mb-2"
              }`}
              to="/3x3"
              onClick={() => handleNavLinkClick("chat")}
            >
              3x3
            </NavLink> */}
          </nav>
          <nav className="mt-8 w-full flex justify-center items-center">
            {user ? (
              <div className="flex justify-between w-[65%]">
                <div>
                  <NavLink
                    className="navBar__anchor-mobile--2"
                    to="/account"
                    onClick={() => setActiveNavLink("")}
                  >
                    <img
                      className="navBar__icons-mobile"
                      src={userIcon}
                      alt="login icon"
                    ></img>
                    Profile
                  </NavLink>
                </div>
                <div>
                  <div
                    className="navBar__anchor-mobile--2"
                    to="/account"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                // className="navBar__anchor"
                className="navBar__anchor-mobile mr-3"
                to="/login"
                onClick={() => setActiveNavLink("")}
              >
                {
                  <img
                    className="navBar__icons"
                    src={userIcon}
                    alt="login icon"
                  ></img>
                }
                Login
              </NavLink>
            )}
          </nav>
        </div>
      ) : null}
      <div className="hidden lg:block">
        <nav className="navBar">
          <ul className="navBar__links">
            <div className="navBar__sep">
              <Link className="logo-link" to="/">
                <img
                  className="lg:h-[2.5rem] lg:mr-4 lg:ml-6 xl:h-[3.5rem]"
                  src={logo}
                  alt="site logo"
                ></img>
                <h1 className="site__title lg:text-[2.5rem] xl:text-[3rem]">
                  STREAMIFY
                </h1>
              </Link>
              <div>
                <li>
                  <NavLink
                    className={`navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px] ${
                      activeNavLink === "home"
                        ? "active lg:p-[10px] xl:p-[18px]"
                        : ""
                    }`}
                    to="/"
                    onClick={() => handleNavLinkClick("home")}
                  >
                    <img
                      className="navBar__icons"
                      src={home}
                      alt="home icon"
                    ></img>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px] ${
                      activeNavLink === "search"
                        ? "active lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                        : ""
                    }`}
                    to="/search"
                    onClick={() => handleNavLinkClick("search")}
                  >
                    <img
                      className="navBar__icons"
                      src={search}
                      alt="search icon"
                    ></img>
                    Search
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px] ${
                      activeNavLink === "chat"
                        ? "active lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                        : ""
                    }`}
                    to="/chat"
                    onClick={() => handleNavLinkClick("chat")}
                  >
                    <img
                      className="navBar__icons"
                      src={chat}
                      alt="chat icon"
                    ></img>
                    Chat
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px]${
                      activeNavLink === "3x3"
                        ? "active lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                        : ""
                    }`}
                    to="/3x3"
                    onClick={() => handleNavLinkClick("3x3")}
                  >
                    <img
                      className="navBar__icons"
                      src={grid}
                      alt="list icon"
                    ></img>
                    3 x 3
                  </NavLink>
                </li>
              </div>
            </div>
            {user ? (
              <div className="account-tab">
                <div>
                  <NavLink
                    className="navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                    to="/account"
                    onClick={() => setActiveNavLink("")}
                  >
                    <img
                      className="navBar__icons"
                      src={userIcon}
                      alt="login icon"
                    ></img>
                    Profile
                  </NavLink>
                </div>
                <div>
                  <div
                    className="navBar__anchor lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                    to="/account"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                className="navBar__anchor login lg:p-[10px] xl:p-[18px] xl:text-[18px]"
                to="/login"
                onClick={() => setActiveNavLink("")}
              >
                <img
                  className="navBar__icons"
                  src={userIcon}
                  alt="login icon"
                ></img>
                Login
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
