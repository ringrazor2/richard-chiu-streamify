import "./ShowDetails.scss";
import dummyPicture from "../../assets/images/shows//gameofthrones.jpg";

const ShowDetails = ({ show }) => {
  // {show.genres.join(", ")}
  console.log(show.imbdRating);
  console.log(show.title);
  return (
    <>
      <div className="show-details">
        <div className="show-poster-container">
          <img
            className="poster-image"
            src= {show.posterURLs[342]} //{dummyPicture} 
            alt="show poster"
          ></img>
          <p className="show-info">
            <span className="show-subhead">Imbd Rating </span>
           {(show.imbdRating)}/100
          </p>
          <p className="show-info">
            <span className="show-subhead">Type </span>
            {show.type}
          </p>
          <p className="show-info">
            <span className="show-subhead">Year </span>
            {show.year || show.firstAirYear}
          </p>
          <p className="show-info genres">
            <span className="show-subhead">Genres </span>
            {show.genre}
          </p>
        </div>
        <div className="show-text-container">
          <h2 className="show-title">{show.title}</h2>
          <h3 className="show-synopsis-title">Synopsis </h3>
          <p className="show-synopsis">
            {show.overview}
          </p>
          {/* <div className="stream-info">
            {show.streamingUrls.map((url, index) => (
              <img
                key={index}
                className="stream-icon"
                src={url.icon_url}
                alt={`${url.name} icon`}
              />
            ))}
            <p className="stream-region">Region: USA {show.region}</p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
