// require("dotenv").config();
import "./SearchPage.scss";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";

// get type of subscription or paid

const SearchPage = ({
  show,
  formData,
  setFormData,
  title,
  handleSubmit,
  showFetch,
}) => {
  useEffect(() => {
    showFetch();
  }, [title]);

  return (
    <div className="search-page">
      <NavBar />
      <div className="search-container">
        <SearchBar
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
        {show && show.title.toLowerCase() === title.toLowerCase() && (
          <ShowDetails show={show} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
