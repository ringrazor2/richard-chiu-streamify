import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import SavedShow from "../../components/SavedShow/SavedShow";
import "./Account.scss";

const Account = () => {
  const [faveList, setFaveList] = useState(null);
  const [watchList, setWatchList] = useState(null);
  const [threeByThree, setThreeByThree] = useState(null);
  const [activeList, setActiveList] = useState(false);

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

  if (!faveList || !watchList || !threeByThree) return <div>Loading...</div>;
  const showPath = doc(db, "users", `${user.email}`);
  const deleteShow = async (id) => {
    try {
      const result = faveList.filter((show) => show.imdbId !== id);
      await updateDoc(showPath, {
        favList: result,
      });
    } catch {
      console.log("Error deleting show");
    }
  };
  console.log(faveList);
  return (
    <div className="account-page">
      <div className="account-page__details">
        <div className="account-page__heading">
          <h1>Account</h1>
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
        <div className="account-page__personal">
          <h2>{`Hi, ${user.displayName}`}</h2>
          <p className="account-page__email">{`email: ${user.email}`}</p>
        </div>

        <div className="account-page__profile-container">
          <button
            className={
              activeList ? " signout-button button-active" : "signout-button"
            }
            onClick={() => setActiveList(true)}
          >
            Favourites
          </button>
          <button
            className={
              !activeList ? " signout-button button-active" : "signout-button"
            }
            onClick={() => setActiveList(false)}
          >
            Watch List
          </button>
          <button className="signout-button grid-button">3x3</button>
        </div>
      </div>
      {activeList && faveList !== null && (
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
      {!activeList && watchList !== null && (
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
