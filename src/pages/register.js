import { memo, useContext } from "react";
import Form from "../components/register";
import { useRouter } from "next/router";
import { SellerContext } from "../contexts/seller";

const RegisterPage = () => {
  const { isSeller } = useContext(SellerContext);
  const router = useRouter();

  if (isSeller) {
    router.push("/");
  }

  return (
    <>
      <Form />
    </>
  );
};

export default memo(RegisterPage);
