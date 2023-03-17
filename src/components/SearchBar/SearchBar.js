import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <form className="header__form">
      <div className="header__form-container">
        <input
          className="header__form-search"
          type="search"
          name="search"
          placeholder="Search"
        ></input>
      </div>
    </form>
  );
};

export default SearchBar;
