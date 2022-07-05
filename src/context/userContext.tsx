// import { createContext } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import {auth} from "../../"

// interface IContextProps {
//   state: object;
//   dispatch: ({ type }: { type: string }) => void;
// }
// const UserContext = createContext({} as IContextProps);
// interface Props {
//   children: React.ReactNode;
// }
// export const AuthcontextProvider = ({ children }: Props) => {
//   const createUser = (email: string, password: string) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   return (
//     <UserContext.Provider value={createUser}>{children}</UserContext.Provider>
//   );
// };
