import "./SearchPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const TMDB_api = "3906e8ee0eaf9839685c16ba1064e0a9";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTA2ZThlZTBlYWY5ODM5Njg1YzE2YmExMDY0ZTBhOSIsInN1YiI6IjY0MTVjNjFlMGQ1ZDg1MDA5YmExOGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y5UhbaMJYToz2j7AW7mgmQBnOG4sl9w55YGZcPQFe9w";
const SearchPage = () => {
  return (
    <div className="search-page">
      <NavBar />
      <div className="search-container">
        <SearchBar />
      </div>
    </div>
  );
};
export default SearchPage;
