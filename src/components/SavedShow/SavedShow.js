import { useState } from "react";
import "./SavedShow.scss";

const SavedShow = ({ show }) => {
  const [savedShows, setSavedShows] = useState([]);
  //   return (
  //     {savedShows.length === 0? (<p>You don't have any shows saved. Please add a show to your watch list</p>):(  <div className="saved-show">
  //     <div className="saved-show__image-container">
  //       <img
  //         className="saved-show__image"
  //         src={show.image.original}
  //         alt="show poster"
  //       />
  //     </div>
  //     <div className="saved-show__info">
  //       <h3 className="saved-show__title">{show.name}</h3>
  //       <p className="saved-show__summary">{show.summary}</p>
  //     </div>
  //   </div>) }

  //   );
};

export default SavedShow;
