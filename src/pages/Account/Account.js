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
    <>
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div"></div>
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p> Welcome, {user?.email}</p>
          </div>
        </div>
      </div>
      <button
        onClick={handleSignOut}
        className="border px-6 py-2 rounded-2xl shadow-lg hover:shadow-2xl"
      >
        Sign Out
      </button>

      {/* <h1>{`Hi, ${user.email}`}</h1>
      <p>{`email: ${user.email}`}</p>
      <button onClick={handleSignOut}>LogOut</button>
      <SavedShow /> */}
    </>
  );
};

export default Account;
