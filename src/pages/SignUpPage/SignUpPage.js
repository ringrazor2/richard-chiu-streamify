import "./SignUpPage.scss";
import phoneScreens from "../../assets/images/shows/phone-img.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { GoogleButton } from "react-google-button";
import { auth } from "../../firebase";
import { fetchSignInMethodsForEmail } from "firebase/auth";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { user, signUp, googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const methods = await fetchSignInMethodsForEmail(auth, email);

    if (methods.length > 0) {
      setEmailError("An account with this email already exists");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="signup-page">
      <img className="signup-img" src={phoneScreens} />
      <div className="lg:hidden">
        <div className="signup-container flex flex-col lg:w-[37.5rem] lg:h-[25rem]">
          <form
            onSubmit={handleSubmit}
            className="signup-form lg:p-9 p-5 pb-0 lg:h-[25rem]"
          >
            <h1 className="signup-title">Sign up</h1>

            <input
              className={`signup-input ${emailError && "error-input"}`}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={`signup-input ${error && "error-input"}`}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className={`signup-input ${error && "error-input"}`}
              type="password"
              name="password2"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {(error && <p className="error-message">{error}</p>) ||
              (emailError && <p className="error-message">{emailError}</p>)}

            <p className="login-message">
              Already have an account?
              <Link to="/login">
                <span className="login-link"> Log in</span>
              </Link>
            </p>

            <button className="signup-button">Sign up</button>
          </form>

          <div className="right lg:h-[25rem] p-5">
            <div className="social-buttons-container">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
          {/* <div className="or">OR</div> */}
        </div>
        <img className="signup-img2" src={phoneScreens} />
      </div>

      <div className="hidden lg:block">
        <div className="signup-container lg:w-[37.5rem] lg:h-[25rem]">
          <form
            onSubmit={handleSubmit}
            className="signup-form lg:p-9 p-5 pb-0 lg:h-[25rem] lg:absolute"
          >
            <h1 className="signup-title">Sign up</h1>

            <input
              className={`signup-input ${emailError && "error-input"}`}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={`signup-input ${error && "error-input"}`}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className={`signup-input ${error && "error-input"}`}
              type="password"
              name="password2"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {(error && <p className="error-message">{error}</p>) ||
              (emailError && <p className="error-message">{emailError}</p>)}

            <p className="login-message">
              Already have an account?
              <Link to="/login">
                <span className="login-link"> Log in</span>
              </Link>
            </p>

            <button className="signup-button">Sign up</button>
          </form>

          <div className="right lg:h-[25rem] p-5 lg:absolute lg:p-10">
            <div className="social-buttons-container lg:mt-[8.5rem]">
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
          <div className="or">OR</div>
        </div>
      </div>
      <img className="signup-img2" src={phoneScreens} />
    </div>
  );
};

export default SignUpPage;
