import "./NavBar.scss";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        <ul className="navBar__links">
          <li className="navBar__link">
            <NavLink className="navBar__anchor" href="/">
              <img src="../../assets/images/icons/home-icon.png"></img>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navBar__anchor" href="/">
              <img src="../../assets/images/icons/search-icon.png"></img>Search
            </NavLink>
          </li>
          <li>
            <NavLink className="navBar__anchor" href="/">
              <img src="../../assets/images/icons/chat-icon.png"></img>
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink className="navBar__anchor" href="#">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
