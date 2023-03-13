import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/icons/streamify-logo.svg";
import home from "../../assets/images/icons/home-icon.png";
import search from "../../assets/images/icons/search-icon.png";
import chat from "../../assets/images/icons/chat-icon.png";
import list from "../../assets/images/icons/list-icon.png";
import user from "../../assets/images/icons/user-icon.png";
const NavBar = () => {
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
                <NavLink className="navBar__anchor" href="/">
                  <img
                    className="navBar__icons"
                    src={home}
                    alt="home icon"
                  ></img>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="/">
                  <img
                    className="navBar__icons"
                    src={search}
                    alt="search icon"
                  ></img>
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="/">
                  <img
                    className="navBar__icons"
                    src={chat}
                    alt="chat icon"
                  ></img>
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="#">
                  <img
                    className="navBar__icons"
                    src={list}
                    alt="list icon"
                  ></img>
                  Lists
                </NavLink>
              </li>
            </div>
          </div>
          <NavLink className="navBar__anchor login">
            <img className="navBar__icons" src={user} alt="login icon"></img>
            Login
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
