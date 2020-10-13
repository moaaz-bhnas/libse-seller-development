import { useEffect, useState, createContext, useContext } from "react";
import { setCookie, destroyCookie } from "nookies";
import firebase from "../lib/firebase/client";
import { LocaleContext } from "./locale";
// import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const router = useRouter();
  const { locale } = useContext(LocaleContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        destroyCookie({}, "token", { path: "/" });
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      setCookie({}, "token", token, { path: "/" });
    });
  }, []);

  console.log("(auth) user: ", user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
