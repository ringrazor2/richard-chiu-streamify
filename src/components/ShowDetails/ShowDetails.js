import "./ShowDetails.scss";
import dummyPicture from "../../assets/images/shows//gameofthrones.jpg";

const ShowDetails = ({ show }) => {
  // {show.genres.join(", ")}
  return (
    <>
      <div className="show-details">
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
      </div>
    </>
  );
};

export default ShowDetails;
