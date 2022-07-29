import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const Authcontext = createContext(null);
//acess data from the provider and make it accessible at any hierarchy level of the app
export const useAuthConsumer = () => {
  return useContext(Authcontext);
};
interface IProps {
  children: JSX.Element;
}
export const AuthProvider = ({ children }: IProps) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged((user: string) => {
      setCurrentUser(user);
      setLoading(false);
    });

    //unsubscribe from onAuth when the component is unmounted
    return unsubscriber;
  }, []);
  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  interface Props {
    currentUser: string;
    signUp: (x: string, y: string) => void;
  }
  const value: Props = {
    currentUser,
    signUp,
  };

  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};
