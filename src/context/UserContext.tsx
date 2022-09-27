import { createContext, useEffect } from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../firebaseApp";
import { useState } from "react";
interface UserData {
  email: string;
  password: string;
}
interface Props {
  currentUser: User | null;
  signUp: (auth: Auth, email: string, password: string) => void;
}

interface Iprops {
  children: JSX.Element;
}
export const UserContext = createContext<Props>({
  currentUser: null,
  signUp: () => {},
});
const AuthProvider = ({ children }: Iprops) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const signUp = (auth: Auth, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      return setCurrentUser(user);
    });
    //unsubscribe from the funnction when the component is unmounted
    return unsubscribe;
  }, []);
  const value: Props = {
    currentUser,
    signUp,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default AuthProvider;
