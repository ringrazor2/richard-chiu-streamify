import "./SignUpPage.scss";
import phoneScreens from "../../assets/images/shows/phone-img.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import { GoogleButton } from "react-google-button";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { user, createUser, googleSignIn, facebookSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUser(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError("Failed to sign up. Please try again later.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  };
  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  //   const validateEmail = (email) => {
  //     const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  //     return regex.test(email);
  //   };

  //   const handleEmailChange = (e) => {
  //     const email = e.target.value;
  //     setEmailError(email);
  //     if (!validateEmail(email)) {
  //       setError("Please enter a valid email address");
  //     } else {
  //       setEmailError("");
  //     }
  //   };
  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="signup-page">
      <img className="signup-img" src={phoneScreens} />
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h1 className="signup-title">Sign up</h1>

          <input
            className={`signup-input ${emailError && "error-input"}`}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            // onChange={handleEmailChange}
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

          {error && <p className="error-message">{error}</p>}

          <p className="login-message">
            Already have an account?
            <Link to="/login">
              <span className="login-link"> Sign in</span>
            </Link>
          </p>

          <button className="signup-button">Sign up</button>
        </form>

        <div class="right">
          <div className="social-buttons-container">
            {/* <button
              class="social-signin facebook"
              onClick={handleFacebookSignIn}
            >
              Log in with facebook
            </button> */}
            {/* <button class="social-signin twitter">Log in with Twitter</button> */}
            {/* <button class="social-signin google">Log in with Google+</button> */}
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
        <div class="or">OR</div>
      </div>
      <img className="signup-img2" src={phoneScreens} />
    </div>
  );
};

export default SignUpPage;
