import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import ChatBot from "../../components/ChatBot/ChatBot";
import ShowDetails from "../../components/ShowDetails/ShowDetails";
import "./ChatPage.scss";

// get title from chatGPT and set formData to that title
const ChatPage = () => {
  const [formData, setFormData] = useState({
    title: "",
  });

  const [show, setShow] = useState({
    title: "",
    poster: "",
    imdbRating: "",
    genres: "",
    overview: "",
    region: "",
    posterURLs: "",
    streamingInfo: [],
    streamingService: "",
  });

  const { title } = formData;
  console.log(title);

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
    if (title) {
      // Use the form data to search for titles
      axios
        .request(options)
        .then((response) => {
          const dataArr = response.data.result;
          console.log(dataArr);
          // Retrieve the specific data you need based on the form input matching the title

          const matchingData = dataArr.find(
            (result) => result.title.toLowerCase() === title.toLowerCase()
          );
          console.log(matchingData);
          const genre = matchingData.genres
            .map((genre) => genre.name)
            .join(", ");

          const streamingService = matchingData.streamingInfo.us
            ? Object.keys(matchingData.streamingInfo.us)
            : null;
          console.log(streamingService);
          setShow({
            ...matchingData,
            genre: genre,
            streamingService: streamingService,
          });

          console.log(setShow);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setShow(null);
    }
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
        <div className="chat-page-left">
          <div className="chat-page__message-container">
            <h1 className="chat-page__message">Don't know what to watch?</h1>
            <h1 className="chat-page__message">We got you!</h1>
          </div>

          <div className="show-details-container">
            {/* {show && show.title.toLowerCase() === title.toLowerCase() && (
              <ShowDetails show={show} />
            )} */}
          </div>
        </div>
        <ChatBot messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
};

export default ChatPage;
