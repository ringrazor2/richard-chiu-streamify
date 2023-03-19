import "./SearchBar.scss";
import search from "../../assets/images/icons/search-icon2.png";
const SearchBar = ({ handleSubmit, formData, setFormData, title }) => {
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((formData) => ({ ...formData, [name]: value }));
  // };
  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar-form">
        <div className="search-bar-container">
          <label>Search for your show</label>
          <div className="search-bar-Innercontainer">
            <button className="search-icon-button" typ="submit">
              <img className="search-icon" alt="search-icon" src={search}></img>
            </button>
            <div className="search-bar-input-container">
              <input
                placeholder="Search"
                className="search-bar-input"
                name="title"
                value={title}
                // onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
