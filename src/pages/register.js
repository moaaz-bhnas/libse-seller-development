import { memo, useContext } from "react";
import { Container } from "../components/container/style";
import Form from "../components/register";
import { AuthContext } from "../contexts/auth";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const user = useContext(AuthContext);
  const router = useRouter();

  console.log("user: ", user, "user.seller: ", user.seller);

  if (user.seller) {
    router.push("/");
  }

  return (
    <>
      <Form />
    </>
  );
};

export default memo(RegisterPage);
