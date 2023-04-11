import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import InstructionModal from "../../components/InstructionModal/InstructionModal";
import NavBar from "../../components/NavBar/NavBar";
import "../../components/ExploreButton/ExploreButton";
import search from "../../assets/images/icons/search-icon2.png";
import ExampleModal from "../../components/ExampleModal/ExampleModal";
import DraggableImage from "../../components/DraggableImage/DraggableImage";
import DroppableBox from "../../components/DroppableBox/DroppableBox";
import Footer from "../../components/Footer/Footer";
import { showFetch } from "../../utilities/script";
import "./ThreePage.scss";

const ThreePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);
  const [grid, setGrid] = useState([]);
  const [threeError, setThreeError] = useState("");
  const [droppedItems, setDroppedItems] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
  });
  const [country, setCountry] = useState("ca");
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { title } = formData;

  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/v2/search/title",
    params: {
      title: title,
      country: country,
      type: "all",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_STREAMING_AVAILABILITY_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_STREAMING_AVAILABILITY_HOST,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ title: e.target.elements.title.value });
    e.target.reset();
  };

  const { user } = UserAuth();

  const threePath = doc(db, "users", `${user?.email}`);

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
    showFetch(title, country, setShow, setIsLoading);
  }, [title]);

  const handleDrop = (index, newImage) => {
    const updatedGrid = [...grid];
    const updatedItems = [...droppedItems];
    updatedGrid[index] = newImage;
    updatedItems[index] = newImage;
    setDroppedItems(updatedItems);
    setGrid(updatedGrid);
  };

  const handleClear = async () => {
    setGrid([]);
    setDroppedItems([null, null, null, null, null, null, null, null, null]);
  };

  const handleSave = async () => {
    if (user?.email && grid.length === 9) {
      setClicked(true);
      setThreeError("");
      await updateDoc(threePath, {
        threeByThree: arrayUnion({ imgArray: [...grid], id: uuidv4() }),
      });
    } else {
      setThreeError("Please fill all boxes with images");
    }
  };

  return (
    <>
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
                    <button className="search-icon-button" type="submit">
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
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={0}
                    droppedItem={droppedItems[0]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={1}
                    droppedItem={droppedItems[1]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={2}
                    droppedItem={droppedItems[2]}
                    setDroppedItems={setDroppedItems}
                  />
                </div>
                <div className="row">
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={3}
                    droppedItem={droppedItems[3]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={4}
                    droppedItem={droppedItems[4]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={5}
                    droppedItem={droppedItems[5]}
                    setDroppedItems={setDroppedItems}
                  />
                </div>
                <div className="row">
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={6}
                    droppedItem={droppedItems[6]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={7}
                    droppedItem={droppedItems[7]}
                    setDroppedItems={setDroppedItems}
                  />
                  <DroppableBox
                    handleDrop={handleDrop}
                    index={8}
                    droppedItem={droppedItems[8]}
                    setDroppedItems={setDroppedItems}
                  />
                </div>
              </div>
              <div className="three-button-error-container">
                <div className="three-button-container">
                  <button
                    className="three-button three-button-clear"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                  {clicked ? (
                    <button className="three-button three-button-save three-button-save-active">
                      Save
                    </button>
                  ) : (
                    <button
                      className="three-button three-button-save"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  )}
                </div>
                <p className="three-error">{threeError}</p>
              </div>
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
      <Footer />
    </>
  );
};

export default ThreePage;
