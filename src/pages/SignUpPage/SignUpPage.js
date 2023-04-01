import "./SignUpPage.scss";
import phoneScreens from "../../assets/images/shows/phone-img.svg";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <form onSubmit={handleSubmit} class="signup-form">
          <h1 className="signup-title">Sign up</h1>

          <input
            className="signup-input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="signup-input"
            type="password"
            name="password2"
            placeholder="Retype password"
          />

          <button className="signup-button">Sign up </button>
        </form>

        <div class="right">
          <div className="social-buttons-container">
            <button class="social-signin facebook">Log in with facebook</button>
            {/* <button class="social-signin twitter">Log in with Twitter</button> */}
            <button class="social-signin google">Log in with Google+</button>
          </div>
        </div>
        <div class="or">OR</div>
      </div>
      <img className="signup-img" src={phoneScreens} />
    </div>
  );
};

export default SignUpPage;
