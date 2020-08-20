import { useState, createContext, useEffect } from "react";
import { useSelector } from "react-redux";

export const SellerContext = createContext();

export const SellerProvider = ({ children }) => {
  const profile = useSelector((state) => state.firebase.profile);

  const [isSeller, setIsSeller] = useState(null);
  useEffect(() => {
    setIsSeller(profile.isSeller);
  }, [profile.isLoaded]);
  console.log("is seller: ", isSeller);

  return (
    <SellerContext.Provider value={{ isSeller, setIsSeller }}>
      {profile.isLoaded ? children : <></>}
    </SellerContext.Provider>
  );
};
