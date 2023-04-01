import "./Login.scss";
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
      <img className="signup-img" src={phoneScreens} />
      <div className="signup-container">
        <form onSubmit={handleSubmit} class="signup-form">
          <h1 className="signup-title">Log in</h1>

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
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-button">Login </button>
        </form>
      </div>
      <img className="signup-img2" src={phoneScreens} />
    </div>
  );
};

export default SignUpPage;
