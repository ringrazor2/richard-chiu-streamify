import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import NavBar from "../../components/NavBar/NavBar";
import SavedShow from "../../components/SavedShow/SavedShow";
import ThreeByThree from "../../components/ThreeByThree/ThreeByThree";
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
      navigate("/");
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
      console.error("Error deleting show");
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
      console.error("Error deleting show");
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
      console.error("Error deleting 3x3");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <div className="account-page__details p-8 lg:mt-[3rem] rounded-lg lg:rounded-xl flex flex-col items-center mx-4 lg:w-[650px]">
        <h1 className="font-bold lg:text-5xl text-3xl">Account</h1>

        <div className="lg:mt-4 mt-3">
          <div className="">
            <h2 className="lg:text-2xl text-lg">{`Hi, ${
              user.displayName || user.email
            }`}</h2>
            <p className="lg:text-2xl text-lg mt-2">{`email: ${user.email}`}</p>
          </div>
        </div>

        <div className="flex justify-between lg:mt-12 mt-6 lg:text-xl text-xs">
          <button
            className={
              activeList === "favourites"
                ? "signout-button button-active mr-8 px-3 py-2"
                : "signout-button px-3 py-2 mr-8"
            }
            onClick={faveList ? () => setActiveList("favourites") : null}
          >
            Favourites
          </button>
          <button
            className={
              activeList === "watchlist"
                ? "signout-button button-active mr-8 px-3 py-2"
                : "signout-button  px-3 py-2 mr-8"
            }
            onClick={watchList ? () => setActiveList("watchlist") : null}
          >
            Watch List
          </button>
          <button
            className={
              activeList === "threeByThree"
                ? "signout-button button-active px-7 py-2"
                : "signout-button px-7 py-2 lg:px-10"
            }
            onClick={threeByThree ? () => setActiveList("threeByThree") : null}
          >
            3x3
          </button>
        </div>
      </div>
      {activeList === "favourites" && faveList && faveList.length > 0 && (
        <div className="profile-lists  lg:p-8 p-4 lg:w-[90%]">
          {faveList.map((show) => {
            return (
              <SavedShow
                show={show}
                key={show.imdbId}
                deleteShow={deleteFaveShow}
              />
            );
          })}
        </div>
      )}
      {activeList === "watchlist" && watchList && watchList.length > 0 && (
        <div className="profile-lists lg:p-8 p-4 lg:w-[90%]">
          {watchList.map((show) => {
            return (
              <SavedShow
                show={show}
                key={show.imdbId}
                deleteShow={deleteWatchShow}
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
                  key={Obj.id}
                />
              );
            })}
          </div>
        )}
    </div>
  );
};

export default Account;
