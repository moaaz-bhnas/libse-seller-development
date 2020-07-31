import { memo, useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/authForm";
import { Container } from "../components/container/style";
import { AuthContext } from "../contexts/auth";

const SignupPage = () => {
  const user = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  return (
    <Container>
      <AuthForm action="signup" />
    </Container>
  );
};

export default memo(SignupPage);
