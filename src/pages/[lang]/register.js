import { useContext } from "react";
import Form from "../../components/register";
import { useRouter } from "next/router";
import { SellerContext } from "../../contexts/seller";
import withLocale from "../../hocs/withLocale";

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

export default withLocale(RegisterPage);
