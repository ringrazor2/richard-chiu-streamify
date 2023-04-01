import "./App.scss";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatPage from "./pages//ChatPage/ChatPage";
import ThreePage from "./pages/ThreePage/ThreePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Login from "./pages/Login/Login";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import GoogleLoginPage from "./pages/GoogleLogin/GoogleLogin";
const App = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [show, setShow] = useState(null);

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
      // "X-RapidAPI-Key": "6f365c6cdcmsh8226eb0b5972b7bp187be7jsnf67e81afcd20",
      "X-RapidAPI-Key": "30a356aae7msh66d33873f28de99p18faa9jsn184f061401da",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ title: e.target.elements.title.value });
    e.target.reset();
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    setFormData({ title: e.target.elements.title.value });
    e.target.reset();
  };

  const showFetch = () => {
    if (title) {
      axios
        .request(options)
        .then((response) => {
          const dataArr = response.data.result;
          console.log(dataArr);

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
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search"
          element={
            <SearchPage
              show={show}
              formData={formData}
              setFormData={setFormData}
              title={title}
              handleSubmit={handleSubmit}
              showFetch={showFetch}
            />
          }
        />
        <Route path="/chat" element={<ChatPage />} />
        <Route
          path="/3x3"
          element={
            <ThreePage
              show={show}
              formData={formData}
              setFormData={setFormData}
              title={title}
              handleSubmit={handleSubmit}
              showFetch={showFetch}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logintest" element={<LoginPage />} />
        <Route path="/googlelogin" element={<GoogleLoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
