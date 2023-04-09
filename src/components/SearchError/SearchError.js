import "./SearchError.scss";

const SearchError = ({ title }) => {
  return (
    <>
      <div className="search-error">
        <h1 className="search-error__title">404</h1>
        <h3 className="search-error__message">
          Sorry we couldn't find the show title, please check the spelling and
          try again.
        </h3>
        <div class="search-error__ghost-container">
          <div class="search-error__ghost">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
            <div class="four"></div>
          </div>
          <div class="search-error__ghost-face">
            <div class="face">
              <div class="eye"></div>
              <div class="eye-right"></div>
              <div class="mouth"></div>
            </div>
          </div>
          <div class="shadow"></div>
        </div>
      </div>
    </>
  );
};

export default SearchError;
