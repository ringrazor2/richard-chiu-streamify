import "./ExploreButton.scss";
const ExportButton = ({ buttonText, openModal }) => {
  return (
    <button className="explore-button" onClick={openModal}>
      <span className="explore-button__text">{buttonText}</span>
    </button>
  );
};

export default ExportButton;
