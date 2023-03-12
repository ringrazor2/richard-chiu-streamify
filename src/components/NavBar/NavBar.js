import "./NavBar.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar__links">
          <li className="navBar__link">
            <a href="#">
              <img src="../../assets/images/icons/home-icon.png"></img>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../assets/images/icons/search-icon.png"></img>Search
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../../assets/images/icons/chat-icon.png"></img>
              Chat
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
