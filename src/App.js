import "./App.scss";
import { useState } from "react";
import axios from "axios";
import { AuthContextProvider } from "./removeCapital/AuthContext";
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
  const [country, setCountry] = useState("ca");
  const [show, setShow] = useState(null);
  const [matchingShow, setMatchingShow] = useState(true);
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
    setCountry(e.target.country.value);
    e.target.reset();
  };

  const showFetch = () => {
    if (title) {
      setIsLoading(true);
      axios
        .request(options)
        .then((response) => {
          const dataArr = response.data.result;

          const matchingData = dataArr.find(
            (result) => result.title.toLowerCase() === title.toLowerCase()
          );

          if (matchingData) {
            setIsLoading(false);
            const genre = matchingData.genres
              .map((genre) => genre.name)
              .join(", ");

            const streamingService = matchingData.streamingInfo[country]
              ? Object.keys(matchingData.streamingInfo[country])
              : null;
            setShow({
              ...matchingData,
              genre: genre,
              streamingService: streamingService,
            });
          } else {
            setMatchingShow(true);
            setIsLoading(false);
          }
        })
        .catch(function (error) {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      setShow(null);
      setIsLoading(false);
    }
  };
  {
  }
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
                country={country}
                handleSubmit={handleSubmit}
                showFetch={showFetch}
                matchingShow={matchingShow}
                setMatchingShow={setMatchingShow}
                isLoading={isLoading}
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
                <Account country={country} />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
