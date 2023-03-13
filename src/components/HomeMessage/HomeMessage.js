import "./HomeMessage.scss";
import ExploreButton from "../ExploreButton/ExploreButton";
import StreamingLogos from "../StreamingLogos/StreamingLogos";
const HomeMessage = () => {
  return (
    <>
      <div className="homeMessage-container">
        <h1 className="homeMessage">Find your show now!</h1>
        <ExploreButton />
        <StreamingLogos />
      </div>
    </>
  );
};

export default HomeMessage;
