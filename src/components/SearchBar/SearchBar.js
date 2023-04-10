import { useState } from "react";
import "./SearchBar.scss";
import search from "../../assets/images/icons/search-icon2.png";

const SearchBar = ({ handleSubmit, title, country, setCountry, setShow }) => {
  const [selectedCountry, setSelectedCountry] = useState(country);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCountry(event.target.value);
    setShow(title);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <div className="search-bar-container">
        <div className="search-bar-form__heading">
          <label>Search for your show</label>
          <div className="search-bar__country">
            <label>Select Region:</label>
            <select
              className="search-bar__country-input"
              name="country"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="ca">Canada</option>
              <option value="us">USA</option>
              <option value="jp">Japan</option>
              <option value="kr">Korea</option>
              <option value="gb">Great Britain</option>
              <option value="in">India</option>
              <option value="au">Australia </option>
              <option value="be">Belgium </option>
              <option value="fr">France </option>
              <option value="es">Spain</option>
              <option value="br">Brazil</option>
              <option value="ie">Ireland</option>
            </select>
          </div>
        </div>
        <div className="search-bar-Innercontainer">
          <div className="search-bar-input-container">
            <input
              placeholder="Search"
              className="search-bar-input"
              name="title"
              value={title}
            />
          </div>
          <button className="search-icon-button" type="submit">
            <img className="search-icon" alt="search-icon" src={search}></img>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
