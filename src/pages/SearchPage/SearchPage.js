import "./SearchPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import dummyPicture from "../../assets/images/icons/primevideo-icon.png";

// const TMDB_api = "3906e8ee0eaf9839685c16ba1064e0a9";
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTA2ZThlZTBlYWY5ODM5Njg1YzE2YmExMDY0ZTBhOSIsInN1YiI6IjY0MTVjNjFlMGQ1ZDg1MDA5YmExOGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y5UhbaMJYToz2j7AW7mgmQBnOG4sl9w55YGZcPQFe9w";

const SearchPage = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [show, setShow] = useState({
    title: "",
    overview: "",
    streamingInfo: "",
  });

  const { title } = formData;

  const options = {
    method: "GET",
    url: `https://streaming-availability.p.rapidapi.com/v2/search/title`,
    params: {
      title: title,
      country: "us",
      type: "all",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "6f365c6cdcmsh8226eb0b5972b7bp187be7jsnf67e81afcd20",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use the form data to search for titles
    axios
      .request(options)
      .then(function (response) {
        // Retrieve the specific data you need based on the form input matching the title
        const matchingData = response.data.results.find(
          (result) => result.title === title
        );
        console.log(matchingData);
      })
      .catch(function (error) {
        console.error(error);
      });
    e.target.reset();
  };

  useEffect(() => {
    // You can add additional logic here to handle the response data
    // For example, update the UI with the title details
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
