import "./Account.scss";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

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
  return (
    <>
      <h1>{`Hi, ${user.displayName}`}</h1>
      <p>{`email: ${user.email}`}</p>
      <button onClick={handleSignOut}>LogOut</button>
    </>
  );
};

export default Account;
