import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import SavedShow from "../../components/SavedShow/SavedShow";
import ThreeByThree from "../../components/ThreeByThree/ThreeByThree";
import logo from "../../assets/images/icons/streamify-logo.svg";
import "./Account.scss";

const Account = ({ country }) => {
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

  const deleteFaveShow = async (e) => {
    let id = e.target.id;
    try {
      const filteredList = faveList.filter((show) => show.imdbId !== id);
      await updateDoc(doc(db, "users", `${user.email}`), {
        faveList: filteredList,
      });
    } catch {
      console.log("Error deleting show");
    }
  };
  const deleteWatchShow = async (e) => {
    let id = e.target.id;
    try {
      const filteredList = watchList.filter((show) => show.imdbId !== id);
      await updateDoc(doc(db, "users", `${user.email}`), {
        watchList: filteredList,
      });
    } catch {
      console.log("Error deleting show");
    }
  };

  const deleteGrid = async (e) => {
    let id = e.target.id;
    try {
      const filteredList = threeByThree.filter((grid) => grid.id !== id);
      await updateDoc(doc(db, "users", `${user.email}`), {
        threeByThree: filteredList,
      });
    } catch {
      console.log("Error deleting 3x3");
    }
  };

  console.log(user);
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
          <div className="account-page__personal-container">
            <h2>{`Hi, ${user.displayName || user.email}`}</h2>
            <p className="account-page__email">{`email: ${user.email}`}</p>
          </div>
          <image src={user.photoURL}></image>
        </div>

        <div className="account-page__profile-container">
          <button
            className={
              activeList === "favourites"
                ? "signout-button button-active"
                : "signout-button"
            }
            onClick={faveList ? () => setActiveList("favourites") : null}
          >
            Favourites
          </button>
          <button
            className={
              activeList === "watchlist"
                ? "signout-button button-active"
                : "signout-button"
            }
            onClick={watchList ? () => setActiveList("watchlist") : null}
          >
            Watch List
          </button>
          <button
            className={
              activeList === "threeByThree"
                ? "signout-button threeButton button-active"
                : "signout-button threeButton"
            }
            onClick={threeByThree ? () => setActiveList("threeByThree") : null}
          >
            3x3
          </button>
        </div>
      </div>
      {activeList === "favourites" && faveList && faveList.length > 0 && (
        <div className="profile-lists">
          {faveList.map((show) => {
            return (
              <SavedShow
                show={show}
                key={show.imdbId}
                deleteShow={deleteFaveShow}
                country={country}
              />
            );
          })}
        </div>
      )}
      {activeList === "watchlist" && watchList && watchList.length > 0 && (
        <div className="profile-lists">
          {watchList.map((show) => {
            return (
              <SavedShow
                show={show}
                key={show.imdbId}
                deleteShow={deleteWatchShow}
                country={country}
              />
            );
          })}
        </div>
      )}

      {activeList === "threeByThree" &&
        threeByThree &&
        threeByThree.length > 0 && (
          <div className="three-list">
            {threeByThree.map((Obj) => {
              return (
                <ThreeByThree
                  className="profileThree"
                  imageArray={Obj.imgArray}
                  id={Obj.id}
                  deleteGrid={deleteGrid}
                />
              );
            })}
          </div>
        )}
    </div>
  );
};

export default Account;
