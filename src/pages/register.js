import { memo, useContext } from "react";
import { Container } from "../../components/container/style";
import Form from "../../components/register";
import { AuthContext } from "../../contexts/auth";
import Router from "next/router";

const RegisterPage = () => {
  const user = useContext(AuthContext);

  console.log("user: ", user, "user.seller: ", user.seller);

  if (user.seller) {
    Router.push("/");
  }

  return (
    <Container>
      Register Page
      {/* <Form /> */}
    </Container>
  );
};

export default memo(RegisterPage);
