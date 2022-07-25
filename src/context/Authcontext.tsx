import { getAuth } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase";

const Authcontext = createContext({});
//acess data from the provider and make it accessible at any hierarchy level of the app
export const useAuth = () => {
  return useContext(Authcontext);
};
interface Props {
  children: JSX.Element;
}
export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState("");
  interface Props {
    currentUser: string;
  }
  const value = {
    currentUser,
  };

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};
