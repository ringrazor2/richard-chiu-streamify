import "./SearchPage.scss";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import SearchError from "../../components/SearchError/SearchError";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";

const SearchPage = ({
  show,
  setShow,
  formData,
  setFormData,
  title,
  handleSubmit,
  showFetch,
  country,
  setCountry,
  isLoading,
}) => {
  useEffect(() => {
    showFetch();
  }, [title, country]);

  return (
    <>
      <div className="search-page">
        <NavBar />
        <div className="search-container">
          <SearchBar
            handleSubmit={handleSubmit}
            formData={formData}
            setFormData={setFormData}
            country={country}
            setCountry={setCountry}
            setShow={setShow}
          />

          {isLoading ? (
            <Loading />
          ) : (
            <>
              {show && title ? (
                <ShowDetails show={show} country={country} key={show.id} />
              ) : null}
              {!show && title ? <SearchError title={title} /> : null}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
