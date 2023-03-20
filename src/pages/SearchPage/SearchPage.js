import "./SearchPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";

// get type of subscription or paid
// fix the /search from breaking when leaving page
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
      "X-RapidAPI-Key": "30a356aae7msh66d33873f28de99p18faa9jsn184f061401da",
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

          const streamingService = Object.keys(matchingData.streamingInfo.us);
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
        {show && show.title === title && <ShowDetails show={show} />}

        {/* <div className="show-details">
          <div className="show-poster-container">
            <img
              className="poster-image"
              src={dummyPicture} //{show.poster}
              alt="show poster"
            ></img>
            <p className="show-info">
              <span className="show-subhead">Rating </span>
              9.2 imbd /10
            </p>
            <p className="show-info">
              <span className="show-subhead">Genres </span>
              Drama, Action & Adventure, Fantasy
            </p>
          </div>
          <div className="show-text-container">
            <h2 className="show-title">Game of Thrones {show.title}</h2>
            <h3 className="show-synopsis-title">Synopsis </h3>
            <p className="show-synopsis">
              Nine noble families fight for control over the lands of Westeros,
              while an ancient enemy returns after being dormant for millennia.
              {show.overview}
            </p>
            <div className="stream-info">
              {show.streamingUrls.map((url, index) => (
                <img
                  key={index}
                  className="stream-icon"
                  src={url.icon_url}
                  alt={`${url.name} icon`}
                />
              ))}
              <p className="stream-region">Region: USA {show.region}</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SearchPage;
