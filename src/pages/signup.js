import { memo, useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/authForm";
import { AuthContext } from "../contexts/auth";

const SignupPage = () => {
  const user = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    if (user.seller) router.push("/");
    else router.push("/register");
  }

  return <AuthForm action="signup" />;
};

export default memo(SignupPage);
