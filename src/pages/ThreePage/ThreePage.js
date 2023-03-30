import "./ThreePage.scss";
import { useState } from "react";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import NavBar from "../../components/NavBar/NavBar";
import "../../components/ExploreButton/ExploreButton";
import ExploreButton from "../../components/ExploreButton/ExploreButton";
const ThreePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="three-page">
      <NavBar />
      {/* <ExploreButton onClick={openModal} buttonText="Info" /> */}
      <button className="explore-button" onClick={openModal}>
        <span className="explore-button__text"> Info </span>
      </button>
      <InstructionModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </div>
  );
};

export default ThreePage;
