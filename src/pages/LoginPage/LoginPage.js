import SignIn from "../../components/Auth/SignIn";
import SignUp from "../../components/Auth/SignUp";
import AuthDetails from "../../components/Auth/AuthDetails";

const LoginPage = () => {
  return (
    <main className="LoginPage">
      <SignIn />
      <SignUp />
      <AuthDetails />
    </main>
  );
};

export default LoginPage;
