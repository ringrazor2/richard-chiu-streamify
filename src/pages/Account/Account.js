import { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import SavedShow from "../../components/SavedShow/SavedShow";

import "./Account.scss";
// import { db } from "../../firebase";
// import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Account = () => {
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

  const [users, setUsers] = useState([]);
  const usersRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getUsers();
  }, []);
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
    </div>
  );
};

export default Account;
