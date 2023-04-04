import "./ThreeByThree.scss";
import trash from "../../assets/images/icons/trash-icon.png";

const ThreeByThree = ({ imageArray, id, deleteGrid }) => {
  return (
    <div className="threeBythree">
      <div>
        <img
          src={trash}
          className="trash-icon three-trash-icon"
          id={id}
          onClick={deleteGrid}
        ></img>
        <div className="row">
          {imageArray.slice(0, 3).map((img, index) => (
            <div className="box" key={index}>
              <img src={img} className="three-page__show" />
            </div>
          ))}
        </div>
        <div className="row">
          {imageArray.slice(3, 6).map((img, index) => (
            <div className="box" key={index}>
              <img src={img} className="three-page__show" />
            </div>
          ))}
        </div>
        <div className="row">
          {imageArray.slice(6, 9).map((img, index) => (
            <div className="box" key={index}>
              <img src={img} className="three-page__show" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeByThree;
