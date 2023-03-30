import "./ThreePage.scss";
import { useState } from "react";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import NavBar from "../../components/NavBar/NavBar";
import "../../components/ExploreButton/ExploreButton";
import search from "../../assets/images/icons/search-icon2.png";
import ExampleModal from "../../components/ExampleModal/ExampleModal";

const ThreePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const sampleIsOpen = () => {
    setSampleOpen(true);
    setModalIsOpen(false);
  };
  const sampleIsClose = () => {
    setSampleOpen(false);
  };
  return (
    <div className="three-page">
      <NavBar />
      <button className="explore-button instruction" onClick={openModal}>
        <p className="explore-button__text infoButton-text"> Info </p>
      </button>
      <main className="three-page__main-container">
        <div>
          <h1 className="three-page__title"> Let's make your 3 x 3 !</h1>
          <div>
            <form className="search-bar-form three-search">
              <div className="search-bar-container">
                <div className="search-bar-Innercontainer">
                  <div className="search-bar-input-container">
                    <input
                      placeholder="Search"
                      className="search-bar-input"
                      name="title"
                    />
                  </div>
                  <button className="search-icon-button" typ="submit">
                    <img
                      className="search-icon"
                      alt="search-icon"
                      src={search}
                    ></img>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="threeBythree">
          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
          <div class="row">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
          </div>
        </div>
      </main>
      <InstructionModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        sampleIsOpen={sampleIsOpen}
      />
      <ExampleModal sampleOpen={sampleOpen} sampleIsClose={sampleIsClose} />
    </div>
  );
};

export default ThreePage;
