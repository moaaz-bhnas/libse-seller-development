import { useContext } from "react";
import { useRouter } from "next/router";
import AuthForm from "../../components/authForm";
import { AuthContext } from "../../contexts/auth";
// import { SellerContext } from "../../contexts/seller";
// import withLocale from "../../hocs/withLocale";
import Layout from "../../components/layout";
import getLocaleInServer from "../../utils/getLocaleInServer";
// import { LocaleProvider } from "../../contexts/locale";
// import { ContentDirectionProvider } from "../../contexts/contentDirection";

export async function getServerSideProps(context) {
  const locale = getLocaleInServer(context);

  return {
    props: { locale }, // will be passed to the page component as props
  };
}

const LoginPage = ({ locale }) => {
  console.log("login page");
  const user = useContext(AuthContext);
  // const { isSeller } = useContext(SellerContext);
  const router = useRouter();

  if (user) {
    router.push(`/${locale}`);
    //   if (isSeller) router.push(`/${locale}`);
    //   else router.push(`/${locale}/register`);
  }

  return (
    <Layout>
      <AuthForm action="login" />
    </Layout>
  );
};

// export default withLocale(LoginPage);
export default LoginPage;
