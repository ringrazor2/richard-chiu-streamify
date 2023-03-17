import "./SearchPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "./SearchPage";
const SearchPage = () => {
  return (
    <div className="search-page">
      <NavBar />
      <SearchBar />
    </div>
  );
};
export default SearchPage;
