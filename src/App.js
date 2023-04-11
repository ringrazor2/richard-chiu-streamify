import "./App.scss";
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
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/3x3" element={<ThreePage />} />
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
