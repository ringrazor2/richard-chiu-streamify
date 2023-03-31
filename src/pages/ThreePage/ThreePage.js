import "./ThreePage.scss";
import { useState, useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import NavBar from "../../components/NavBar/NavBar";
import "../../components/ExploreButton/ExploreButton";
import search from "../../assets/images/icons/search-icon2.png";
import ExampleModal from "../../components/ExampleModal/ExampleModal";
import DraggableImage from "../../components/DraggableImage/DraggableImage";
import DroppableBox from "../../components/DroppableBox/DroppableBox";

const ThreePage = ({ show, title, handleSubmit, showFetch }) => {
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

  useEffect(() => {
    showFetch();
  }, [title]);

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
            <form
              className="search-bar-form three-search"
              onSubmit={handleSubmit}
            >
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
            <h2 className="three-page_subTitle">Search, Drag and Drop!</h2>
          </div>
        </div>
        <DndProvider backend={HTML5Backend}>
          {show && show.title.toLowerCase() === title.toLowerCase() && (
            <DraggableImage src={show.posterURLs[342]} alt={show.title} />
          )}
          <div className="three-left">
            <div className="threeBythree">
              <div className="row">
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
              </div>
              <div className="row">
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
              </div>
              <div className="row">
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
                <DroppableBox></DroppableBox>
              </div>
            </div>
            <button className="three-clearButton">Clear</button>
          </div>
        </DndProvider>
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
