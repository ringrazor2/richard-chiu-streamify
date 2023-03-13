import "./HomeMessage.scss";
import ExploreButton from "../ExploreButton/ExploreButton";

const HomeMessage = () => {
  return (
    <>
      <div className="homeMessage-container">
        <h1 className="homeMessage">Find your show now!</h1>
        <ExploreButton />
      </div>
    </>
  );
};

export default HomeMessage;
