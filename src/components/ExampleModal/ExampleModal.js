import "./ExampleModal.scss";
import Modal from "react-modal";
const ExampleModal = ({ sampleOpen, sampleIsClose }) => {
  return (
    <Modal
      className="example-modal"
      isOpen={sampleOpen}
      onRequestClose={sampleIsClose}
      shouldCloseOnOverlayClick={true}
    ></Modal>
  );
};

export default ExampleModal;
