import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import SearchError from "../../components/SearchError/SearchError";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import { showFetch } from "../../utilities/script";
import "./SearchPage.scss";

const SearchPage = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [country, setCountry] = useState("ca");
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { title } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ title: e.target.elements.title.value });
    setCountry(e.target.country.value);
    e.target.reset();
  };

  useEffect(() => {
    showFetch(title, country, setShow, setIsLoading);
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
