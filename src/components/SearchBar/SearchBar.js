import "./SearchBar.scss";
import search from "../../assets/images/icons/search-icon2.png";
const SearchBar = ({ handleSubmit, title, country }) => {
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((formData) => ({ ...formData, [name]: value }));
  // };
  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar-form">
        <div className="search-bar-container">
          <div className="search-bar-form__heading">
            <label>Search for your show</label>
            <select className="country-input" name="country">
              <option value="ca">Canada</option>
              <option value="us">United States of America</option>
              <option value="jp">Japan</option>
              <option value="kr">Korea</option>
              <option value="gb">Great Britain</option>
            </select>
          </div>
          <div className="search-bar-Innercontainer">
            <div className="search-bar-input-container">
              <input
                placeholder="Search"
                className="search-bar-input"
                name="title"
                value={title}
                // onChange={handleInputChange}
              />
            </div>
            <button className="search-icon-button" typ="submit">
              <img className="search-icon" alt="search-icon" src={search}></img>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
