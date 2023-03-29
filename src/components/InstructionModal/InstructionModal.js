import React from "react";
import "./InstructionModal.scss";
import Modal from "react-modal";
import sampleThree from "../../assets/images/shows/sample3x3.png";

Modal.setAppElement("#root");

const InstructionModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div className="instruction-modalContainer">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="instruction-modal"
        overlayClassName="overlay"
      >
        <button className="instruction-modal__close" onClick={closeModal}>
          &times;
        </button>
        <div className="instruction-modal__text-container">
          <h1 className="instruction-modal__title">Three By Three (3 x 3)</h1>
          <p className="instruction-modal__message">
            Overview: 3x3 is a simple activity that involves placing nine images
            of shows/movies that resonate with you in a 3 by 3 grid format. The
            goal of a 3x3 is to have a discussion piece with friends and family.
          </p>
        </div>
        <div className="instruction-modal__buttons-container">
          <p className="instruction-modal__message">
            {" "}
            This is an example of a 3x3 for movies:
          </p>
          <img src={sampleThree} className="sample-three"></img>
        </div>
      </Modal>
    </div>
  );
};

export default InstructionModal;
