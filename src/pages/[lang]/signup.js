import { useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../../components/authForm";
import { AuthContext } from "../../contexts/auth";
import { SellerContext } from "../../contexts/seller";
import withLocale from "../../hocs/withLocale";
import Layout from "../../components/layout";

const SignupPage = () => {
  const user = useContext(AuthContext);
  const { isSeller } = useContext(SellerContext);
  const router = useRouter();

  if (user) {
    if (isSeller) router.push("/");
    else router.push("/register");
  }

  return (
    <Layout>
      <AuthForm action="signup" />
    </Layout>
  );
};

export default withLocale(SignupPage);
