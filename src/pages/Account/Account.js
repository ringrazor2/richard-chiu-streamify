import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import SavedShow from "../../components/SavedShow/SavedShow";
import logo from "../../assets/images/icons/streamify-logo.svg";
import "./Account.scss";

const Account = () => {
  const [faveList, setFaveList] = useState(null);
  const [watchList, setWatchList] = useState(null);
  const [threeByThree, setThreeByThree] = useState(null);
  const [activeList, setActiveList] = useState(null);

  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signup");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
      setFaveList(doc.data()?.faveList);
      setWatchList(doc.data()?.watchList);
      setThreeByThree(doc.data()?.threeByThree);
    });
  }, []);

  // if (!faveList || !watchList || !threeByThree) return <div>Loading...</div>;
  const showPath = doc(db, "users", `${user.email}`);
  const deleteShow = async (e) => {
    let id = e.target.id;
    try {
      const filteredList = faveList.filter((show) => show.imdbId !== id);
      await updateDoc(showPath, {
        faveList: filteredList,
      });
    } catch {
      console.log("Error deleting show");
    }
  };

  return (
    <div className="account-page">
      <Link className="logo-link account-logo" to="/">
        <img className="logo" src={logo} alt="site logo"></img>
        <h1 className="site__title">STREAMIFY</h1>
      </Link>
      <div className="account-page__details">
        <div className="account-page__heading">
          <h1>Account</h1>
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
        <div className="account-page__personal">
          <h2>{`Hi, ${user.displayName || "User"}`}</h2>
          <p className="account-page__email">{`email: ${user.email}`}</p>
        </div>

        <div className="account-page__profile-container">
          <button
            className={
              activeList === true
                ? " signout-button button-active"
                : "signout-button"
            }
            onClick={faveList ? () => setActiveList(true) : null}
          >
            Favourites
          </button>
          <button
            className={
              activeList === false
                ? " signout-button button-active"
                : "signout-button"
            }
            onClick={watchList ? () => setActiveList(false) : null}
          >
            Watch List
          </button>
          <button className="signout-button grid-button">3x3</button>
        </div>
      </div>
      {activeList !== null && activeList && faveList && faveList.length > 0 && (
        <div className="profile-lists">
          {faveList.map((show) => {
            return (
              <SavedShow
                show={show}
                key={show.imdbId}
                deleteShow={deleteShow}
              />
            );
          })}
        </div>
      )}
      {activeList !== null &&
        !activeList &&
        watchList &&
        watchList.length > 0 && (
          <div className="profile-lists">
            {watchList.map((show) => {
              return (
                <SavedShow
                  show={show}
                  key={show.imdbId}
                  deleteShow={deleteShow}
                />
              );
            })}
          </div>
        )}
    </div>
  );
};

export default Account;
