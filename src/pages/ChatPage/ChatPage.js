import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import ChatBot from "../../components/ChatBot/ChatBot";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import Footer from "../../components/Footer/Footer";
import { showFetch } from "../../utilities/script";
import Loading from "../../components/Loading/Loading";
import SearchError from "../../components/SearchError/SearchError";
import "./ChatPage.scss";

const ChatPage = () => {
  const [chatInput, setChatInput] = useState(null);
  const [chatShow, setChatShow] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Tell me what kind of show you are looking for!",
      sender: "ChatGPT",
    },
  ]);

  useEffect(() => {
    showFetch(chatInput, "us", setChatShow, setIsLoading);
  }, [chatInput]);

  return (
    <>
      <div className="chat-page">
        <NavBar />
        <div className="chat-page-container">
          <div className="chat-page__message-container">
            <h1 className="chat-page__message">Don't know what to watch?</h1>
            <h1 className="chat-page__message chat-page__message-2">
              We got you! <span className="askChat">Ask Chat </span>and get a
              recommendation
            </h1>
          </div>
          <div className="chat-page-main">
            <ChatBot
              messages={messages}
              setMessages={setMessages}
              setChatInput={setChatInput}
              chatInput={chatInput}
            />

            {isLoading ? (
              <Loading loadingClass="chat-loading" />
            ) : (
              <>
                {chatShow && chatInput ? (
                  <ShowDetails
                    show={chatShow}
                    country={"us"}
                    key={chatShow.id}
                    className="chatRec-show"
                  />
                ) : null}
                {!chatShow && chatInput ? (
                  <SearchError title={chatInput} />
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatPage;
