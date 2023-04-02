import React, { useState, useEffect, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
// import { doc, setDoc, db } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const signUp = (email, password, displayName) => {
  //   createUserWithEmailAndPassword(auth, email, password);
  //   return setDoc(doc(db, "users", email), {
  //     watchList: [],
  //   });
  // };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      console.log("sign out successful");
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      console.log("User", currUser);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn,
        logOut,
        user,
        createUser,
        facebookSignIn,
        signInWithEmailAndPassword,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
