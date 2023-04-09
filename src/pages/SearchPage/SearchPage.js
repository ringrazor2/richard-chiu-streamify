import "./SearchPage.scss";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import SearchError from "../../components/SearchError/SearchError";
import Footer from "../../components/Footer/Footer";

const SearchPage = ({
  show,
  formData,
  setFormData,
  title,
  handleSubmit,
  showFetch,
  country,
  matchingShow,
  setMatchingShow,
}) => {
  useEffect(() => {
    showFetch();
    if (show && show.title.toLowerCase() === title.toLowerCase()) {
      setMatchingShow(true);
    } else {
      setMatchingShow(false);
    }
  }, [title]);

  return (
    <>
      <div className="search-page">
        <NavBar />
        <div className="search-container">
          <SearchBar
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
          />
          {!matchingShow ? (
            <ShowDetails show={show} country={country} />
          ) : (
            <SearchError title={title} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
