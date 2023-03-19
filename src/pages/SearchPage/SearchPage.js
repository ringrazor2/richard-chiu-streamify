import "./SearchPage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import dummyPicture from "../../assets/images/shows/gameofthrones.jpg";
import dummylogo from "../../assets/images/icons/hbo-icon.png";

const SearchPage = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [show, setShow] = useState({
    title: "",
    poster: "",
    ratings: "",
    genres: "",
    overview: "",
    region: "",
    streamingUrls: [],
  });

  const { title } = formData;
  // const title = true;
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
      "X-RapidAPI-Key": "6f365c6cdcmsh8226eb0b5972b7bp187be7jsnf67e81afcd20",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (title) {
      // Use the form data to search for titles
      axios
        .request(options)
        .then((response) => {
          // Retrieve the specific data you need based on the form input matching the title
          const matchingData = response.data.results.find(
            (result) => result.title === title
          );
          const streamingUrls = matchingData.streamingInfo.map(
            (info) => info.icon_url
          );
          setShow({
            ...matchingData,
            streamingUrls: streamingUrls,
          });
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

{
  /* <div className="show-details">
          <div className="show-poster-container">
            <img
              className="poster-image"
              src={dummyPicture} //{show.poster}
              alt="show poster"
            ></img>
            <p className="show-info">
              <span className="show-subhead">Rating </span>
              9.2 imbd {show.ratings.imdb}/10
            </p>
            <p className="show-info">
              <span className="show-subhead">Genres </span>
              Drama, Action & Adventure, Fantasy {show.genres.join(", ")}
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
//         </div> */
}
//       </div>
//     </div>
//   );
// };

export default SearchPage;
