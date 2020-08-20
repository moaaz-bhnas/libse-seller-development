import { useContext } from "react";
import { useRouter } from "next/router";
import { SellerContext } from "./contexts/seller";
import { AuthContext } from "./contexts/auth";

const PrivateRoute = ({ children }) => {
  console.log("PrivateRoute");
  const router = useRouter();
  const user = useContext(AuthContext);
  const { isSeller } = useContext(SellerContext);

  const clientSide = typeof window !== "undefined";
  if (clientSide) {
    if (!user) router.push("/login");
    else if (!isSeller) router.push("/register");
  }

  return user && isSeller ? children : <></>;
};

export default PrivateRoute;
