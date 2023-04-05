import "./App.scss";
import { useState } from "react";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ChatPage from "./pages//ChatPage/ChatPage";
import ThreePage from "./pages/ThreePage/ThreePage";
import Login from "./pages/Login/Login";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Account from "./pages/Account/Account";
import Protected from "./components/Protected/Protected";
const App = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [show, setShow] = useState(null);

  const { title } = formData;

  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/v2/search/title",
    params: {
      title: title,
      country: "us",
      type: "all",
      output_language: "en",
    },
    headers: {
      // "X-RapidAPI-Key": "6f365c6cdcmsh8226eb0b5972b7bp187be7jsnf67e81afcd20",
      // "X-RapidAPI-Key": "30a356aae7msh66d33873f28de99p18faa9jsn184f061401da",
      "X-RapidAPI-Key": process.env.REACT_APP_STREAMING_AVAILABILITY_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_STREAMING_AVAILABILITY_HOST,
      // "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
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

  const showFetch = (fx) => {
    if (title) {
      axios
        .request(options)
        .then((response) => {
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
          setShow({
            ...matchingData,
            genre: genre,
            streamingService: streamingService,
          });

          console.log(matchingData);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setShow(null);
    }
  };
  return (
    <AuthContextProvider>
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
          <Route
            path="/chat"
            element={
              <ChatPage
                options={options}
                show={show}
                formData={formData}
                setFormData={setFormData}
                title={title}
                handleSubmit={handleSubmit}
                showFetch={showFetch}
              />
            }
          />
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
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
