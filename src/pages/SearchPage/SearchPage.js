import "./SearchPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import dummyPicture from "../../assets/images/icons/primevideo-icon.png";
const TMDB_api = "3906e8ee0eaf9839685c16ba1064e0a9";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTA2ZThlZTBlYWY5ODM5Njg1YzE2YmExMDY0ZTBhOSIsInN1YiI6IjY0MTVjNjFlMGQ1ZDg1MDA5YmExOGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y5UhbaMJYToz2j7AW7mgmQBnOG4sl9w55YGZcPQFe9w";

const url = "";
const SearchPage = () => {
  return (
    <div className="search-page">
      <NavBar />
      <div className="search-container">
        <SearchBar />
        <div className="show-details">
          <div className="show-poster-container">
            <img
              className="poster-image"
              src={dummyPicture}
              alt="show poster"
            ></img>
            <p>details dummy data just filler info here</p>
          </div>
          <div className="show-text-container">
            <h2>Show Title</h2>
            <h3>Synopsis</h3>
            <p>
              lsdhjksla kjhkjhdsakjh jkhsadjkhd hkj sakldjh sdhajk hds kjhsda
              khsda kjd jkds lkh adsl
            </p>
            {/* <img src = {}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;
