import "./SearchPage.scss";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import SearchError from "../../components/SearchError/SearchError";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

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
  isLoading,
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
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {show ? (
                matchingShow === false ? (
                  <ShowDetails show={show} country={country} />
                ) : (
                  <SearchError title={title} />
                )
              ) : null}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
