import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import home from "../../assets/images/icons/home-icon.png";
import search from "../../assets/images/icons/search-icon.png";
import chat from "../../assets/images/icons/chat-icon.png";
import list from "../../assets/images/icons/list-icon.png";
const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar__links">
          <div className="navBar__sep">
            <h1 className="site__title">STREAMIFY</h1>

            <div>
              <li>
                <NavLink className="navBar__anchor" href="/">
                  <img src={home}></img>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="/">
                  <img src={search}></img>
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="/">
                  <img src={chat}></img>
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink className="navBar__anchor" href="#">
                  <img src={list}></img>Lists
                </NavLink>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
