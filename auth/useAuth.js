import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase';

const AuthContext = createContext();
const TWITTER_PROVIDER = new firebase.auth.TwitterAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [additionalUserInfo, setAdditionalUserInfo] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [credential, setCredential] = useState({});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(TWITTER_PROVIDER)
      .then((result) => {
        setCredential(result.credential);
        setUser(result.user);
        setAdditionalUserInfo(result.additionalUserInfo);
      })
      .catch((error) => {
        console.error({ code: error.code, message: error.message });
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  const values = {
    user,
    additionalUserInfo,
    credential,
    isAuthenticating,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
