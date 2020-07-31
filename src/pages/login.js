import { memo, useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/authForm";
import { Container } from "../components/container/style";
import { AuthContext } from "../contexts/auth";

const LoginPage = () => {
  const user = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  return (
    <Container>
      <AuthForm action="login" />
    </Container>
  );
};

export default memo(LoginPage);
