require("dotenv").config();
import "./SearchPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";

// get type of subscription or paid
// fix the /search from breaking when leaving page

REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
const SearchPage = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [show, setShow] = useState({
    title: "",
    poster: "",
    imdbRating: "",
    genres: "",
    overview: "",
    region: "",
    posterURLs: "",
    streamingInfo: [],
    streamingService: "",
  });

  const { title } = formData;
  console.log(title);

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
      "X-RapidAPI-Key": REACT_APP_OPENAI_API_KEY,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (title) {
      // Use the form data to search for titles
      axios
        .request(options)
        .then((response) => {
          const dataArr = response.data.result;
          console.log(dataArr);
          // Retrieve the specific data you need based on the form input matching the title

          const matchingData = dataArr.find(
            (result) => result.title.toLowerCase() === title.toLowerCase()
          );
          console.log(matchingData);
          const genre = matchingData.genres
            .map((genre) => genre.name)
            .join(", ");

          const streamingService = matchingData.streamingInfo.us
            ? Object.keys(matchingData.streamingInfo.us)
            : null;
          console.log(streamingService);
          setShow({
            ...matchingData,
            genre: genre,
            streamingService: streamingService,
          });

          console.log(setShow);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setShow(null);
    }
  }, [title]);

  return (
    <div className="search-page">
      <NavBar />
      <div className="search-container">
        <SearchBar
          handleSubmit={(e) => {
            e.preventDefault();
            setFormData({ title: e.target.elements.title.value });
            e.target.reset();
          }}
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
