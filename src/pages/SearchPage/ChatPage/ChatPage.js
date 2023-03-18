import "./ChatPage.scss";
import NavBar from "../../../components/NavBar/NavBar";
const ChatPage = () => {
  return (
    <div className="chat-page">
      <NavBar />
      <div className="chat-page-container">
        <div className="chat-page__message-container">
          <h1 className="chat-page__message">Don't know what to watch?</h1>
          <h1 className="chat-page__message">We got you!</h1>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
