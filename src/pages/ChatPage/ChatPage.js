import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import ChatBot from "../../components/ChatBot/ChatBot";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import DummyDetails from "../../components/ShowDetails/DummyDetails";
import "./ChatPage.scss";

// get title from chatGPT and set formData to that title
const ChatPage = ({ options }) => {
  const [chatInput, setChatInput] = useState(null);
  const [chatShow, setChatShow] = useState(null);
  const [messages, setMessages] = useState([
    {
      message: "Tell me what kind of show you are looking for!",
      sender: "ChatGPT",
    },
  ]);

  const title = chatInput;
  useEffect(() => {
    const fetchData = async () => {
      if (title) {
        try {
          const response = await axios.request(options);
          const dataArr = response.data.result;
          const matchingData = dataArr.find(
            (result) => result.title.toLowerCase() === title.toLowerCase()
          );
          const genre = matchingData.genres
            .map((genre) => genre.name)
            .join(", ");
          const streamingService = matchingData.streamingInfo.us
            ? Object.keys(matchingData.streamingInfo.us)
            : null;

          setChatShow({
            ...matchingData,
            genre: genre,
            streamingService: streamingService,
          });
          console.log(chatShow);
        } catch (error) {
          console.error(error);
        }
      } else {
        setChatShow(null);
      }
    };

    fetchData();
  }, [title]);

  console.log(chatInput);
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
          <ChatBot
            messages={messages}
            setMessages={setMessages}
            setChatInput={setChatInput}
            chatInput={chatInput}
          />
          {/* <DummyDetails /> */}
          <div className="show-details-container">
            {chatShow && <ShowDetails show={chatShow} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
