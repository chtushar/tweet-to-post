import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../firebase/clientApp';

const AuthContext = createContext();
const TWITTER_PROVIDER = new firebase.auth.TwitterAuthProvider();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

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
        setUser(result.user);
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
