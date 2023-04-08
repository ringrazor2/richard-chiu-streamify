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

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
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
    <>
      <nav className="navBar">
        <ul className="navBar__links">
          <div className="navBar__sep">
            <Link className="logo-link" to="/">
              <img className="logo" src={logo} alt="site logo"></img>
              <h1 className="site__title">STREAMIFY</h1>
            </Link>
            <div>
              <li>
                <NavLink
                  className={`navBar__anchor ${
                    activeNavLink === "home" ? "active" : ""
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
                  className={`navBar__anchor ${
                    activeNavLink === "search" ? "active" : ""
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
                  className={`navBar__anchor ${
                    activeNavLink === "chat" ? "active" : ""
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
                  className={`navBar__anchor ${
                    activeNavLink === "3x3" ? "active" : ""
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
              {/* <li>
                <NavLink
                  className={`navBar__anchor ${
                    activeNavLink === "contact" ? "active" : ""
                  }`}
                  to="/3x3"
                  onClick={() => handleNavLinkClick("contact")}
                >
                  Contact
                </NavLink>
              </li> */}
            </div>
          </div>
          {user ? (
            <div className="account-tab">
              <div>
                <NavLink
                  className="navBar__anchor"
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
                  className="navBar__anchor"
                  to="/account"
                  onClick={handleSignOut}
                >
                  Sign Out
                </div>
              </div>
            </div>
          ) : (
            <NavLink
              className="navBar__anchor login"
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
    </>
  );
};

export default NavBar;
