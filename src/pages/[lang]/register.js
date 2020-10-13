import { useContext } from "react";
import Form from "../../components/register";
import { useRouter } from "next/router";
import { SellerContext } from "../../contexts/seller";
import Layout from "../../components/layout";

const RegisterPage = () => {
  const { isSeller } = useContext(SellerContext);
  const router = useRouter();

  if (isSeller) {
    router.push("/");
  }

  return (
    <Layout>
      <Form />
    </Layout>
  );
};

export default RegisterPage;
