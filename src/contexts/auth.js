import { useEffect, useState, createContext } from "react";
import firebase from "../lib/firebase";
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState("not set");
  console.log("(auth) user: ", user);
  // Add auth listener
  useEffect(function addAuthStateListener() {
    firebase.auth().onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    if (user === "not set") return;

    if (!user) router.push("/login");
  }, [user]);

  return (
    <AuthContext.Provider value={user}>
      {user !== "not set" ? children : <></>}
    </AuthContext.Provider>
  );
};
