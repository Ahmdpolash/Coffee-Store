import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase_config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //!createUser ::
  const createUser = (email, password, name) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };


  //! login 
  const handleSignIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }


  const authInfo = { createUser,user,loading,handleSignIn };
  
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );

};

export default AuthProvider;
