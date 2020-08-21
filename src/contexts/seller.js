import { useState, createContext, useEffect } from "react";
import { useSelector } from "react-redux";

export const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const profile = useSelector((state) => state.firebase.profile);

  const [isSeller, setIsSeller] = useState(null);
  useEffect(() => {
    setIsSeller(profile.isSeller);
  }, [profile.isLoaded]);

  return (
    <SellerContext.Provider value={{ isSeller, setIsSeller }}>
      {typeof isSeller === "boolean" ? children : <></>}
    </SellerContext.Provider>
  );
};
