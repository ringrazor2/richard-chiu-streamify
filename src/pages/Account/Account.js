import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import SavedShow from "../../components/SavedShow/SavedShow";
import "./Account.scss";
// import { db } from "../../firebase";

const Account = () => {
  const [users, setUsers] = useState([]);
  const [faveList, setFaveList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [threeByThree, setThreeByThree] = useState([]);

  // const userPath = doc(db, "users", `${user.email}`);

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

  const docRef = doc(db, "users", `${user?.email}`);
  console.log(docRef);
  const docSnap = getDoc(docRef).then((doc) => {
    console.log(doc);
  });

  // const usersRef = collection(db, "users");
  // const getUserData = async () => {
  //   const faveData = await getDocs(usersRef);
  //   console.log(faveData);
  // };
  // getUserData();

  // useEffect(() => {
  //   const docRef = doc(db, "users", `${user?.email}`);
  //   console.log(docRef);
  //   const docSnap = await getDoc(docRef);
  //   console.log(docSnap);
  // }, [user.email]);
  // useEffect(() => {
  //   onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
  //     console.log(doc.data.faveList);
  //     setFaveList(doc.data().faveList);
  //   });
  // }, [user.email]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersRef);
  //     console.log(data);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data() })));
  //   };
  //   getUsers();
  // }, []);
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
          <button className="signout-button">Favourites</button>
          <button className="signout-button">Watch List</button>
          <button className="signout-button">3x3</button>
        </div>
      </div>
      <div className="profile-lists">
        <div className="show-card"></div>
      </div>
    </div>
  );
};

export default Account;
