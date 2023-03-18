import "./SearchBar.scss";
import search from "../../assets/images/icons/search-icon2.png";
const SearchBar = () => {
  return (
    <>
      <form className="search-bar-form">
        <div className="search-bar-container">
          <label>Search for your show</label>
          <div className="search-bar-Innercontainer">
            <div className="search-icon-container">
              <img className="search-icon" alt="search-icon" src={search}></img>
            </div>
            <div className="search-bar-input-container">
              <input
                placeholder="Search"
                className="search-bar-input"
                name="name"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
