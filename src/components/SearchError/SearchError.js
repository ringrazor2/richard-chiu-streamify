import "./SearchError.scss";

const SearchError = ({ title, className }) => {
  return (
    <>
      <div
        className={`search-error lg:w-[65%] mt-8 flex-col justify-center lg:px-[3rem] px-3 ${className}`}
      >
        <h1 className="search-error__title lg:text-[8rem] text-[5rem]">404</h1>
        <h3 className="search-error__message lg:text-[2rem] text-lg">
          Sorry we couldn't find
          <span className="error-title"> "{title || "the show"}"</span> please
          check the spelling and try again.
        </h3>
        <div className="search-error__ghost-container">
          <div className="search-error__ghost">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
          </div>
          <div className="search-error__ghost-face">
            <div className="face">
              <div className="eye"></div>
              <div className="eye-right"></div>
              <div className="mouth"></div>
            </div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    </>
  );
};

export default SearchError;
