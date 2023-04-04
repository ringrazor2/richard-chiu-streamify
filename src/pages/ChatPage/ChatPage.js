import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import ChatBot from "../../components/ChatBot/ChatBot";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import DummyDetails from "../../components/ShowDetails/DummyDetails";
import "./ChatPage.scss";

// get title from chatGPT and set formData to that title
const ChatPage = ({
  show,
  formData,
  setFormData,
  title,
  handleSubmit,
  showFetch,
}) => {
  const [chatRec, setChatRec] = useState(null);

  const options = {
    method: "GET",
    url: `https://streaming-availability.p.rapidapi.com/v2/search/title`,
    params: {
      title: title,
      country: "us",
      type: "all",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "6f365c6cdcmsh8226eb0b5972b7bp187be7jsnf67e81afcd20",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  useEffect(() => {
    showFetch();
  }, [title]);

  const [messages, setMessages] = useState([
    {
      message: "Tell me what kind of show you are looking for!",
      sender: "ChatGPT",
    },
  ]);

  return (
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
          {/* <img className="chat-page__image" src={phoneDrop}></img> */}
          <ChatBot messages={messages} setMessages={setMessages} />
          <DummyDetails />

          <div className="show-details-container">
            {/* {show && show.title.toLowerCase() === title.toLowerCase() && (
              <ShowDetails show={show} />
            )} */}
            {/* <ShowDetails /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
