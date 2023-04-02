import "./Login.scss";
import phoneScreens from "../../assets/images/shows/phone-img.svg";
import React, { useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import GoogleButton from "react-google-button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { signIn, googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setErrorMessage("Error: Incorrect email or password.");
    }
  };

  return (
    <div className="signup-page">
      <img className="signup-img" src={phoneScreens} />
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form login-form">
          <h1 className="signup-title login-title">Log in</h1>

          <input
            className={`signup-input ${errorMessage && "error-input"}`}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={`signup-input ${errorMessage && "error-input"}`}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <p className="login-message">
            Don't have an account yet?
            <Link to="/signup">
              <span className="login-link"> Sign up</span>
            </Link>
          </p>
          <button className="signup-button">Login </button>
        </form>
        <div className="right">
          <div className="social-buttons-container">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
        <div className="or">OR</div>
      </div>

      <img className="signup-img2" src={phoneScreens} />
    </div>
  );
};

export default LoginPage;
