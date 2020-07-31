import { memo, useContext } from "react";
import { Container } from "../components/container/style";
import { AuthContext } from "../contexts/auth";
import Router from "next/router";

const LoginPage = () => {
  const user = useContext(AuthContext);

  if (user) {
    Router.push("/");
  }

  return (
    <Container>
      Login Page
      {/* <Form /> */}
    </Container>
  );
};

export default memo(LoginPage);
