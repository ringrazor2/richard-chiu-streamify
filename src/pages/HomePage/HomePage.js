import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <NavBar />
      </div>
    </>
  );
};

export default HomePage;
