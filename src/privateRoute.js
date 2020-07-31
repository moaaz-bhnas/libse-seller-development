import { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "./contexts/auth";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const user = useContext(AuthContext);

  const clientSide = typeof window !== "undefined";
  if (!user && clientSide) {
    router.push("/login");
  }

  return children;
};

export default PrivateRoute;
