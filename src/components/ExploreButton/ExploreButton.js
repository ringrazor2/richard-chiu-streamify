import "./ExploreButton.scss";
const ExportButton = ({ buttonText, openModal }) => {
  return (
    <button className="explore-button mb-2" onClick={openModal}>
      <p className="explore-button__text">{buttonText}</p>
    </button>
  );
};

export default ExportButton;
