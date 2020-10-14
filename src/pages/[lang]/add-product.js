import { useContext } from "react";
import AddProductForm from "../../components/addProductForm";
import Layout from "../../components/layout";
import { ContentDirectionProvider } from "../../contexts/contentDirection";
import { LocaleContext, LocaleProvider } from "../../contexts/locale";

export const getStaticPaths = async () => {
  const languages = ["ar", "en"];

  const paths = languages.map((lang) => ({
    params: { lang },
  }));

  // fallback: false means pages that don’t have the
  // correct id will 404.
  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  return {
    props: {
      lang: params.lang,
    },
  };
}

const AddProduct = ({ lang }) => {
  return (
    <LocaleProvider lang={lang}>
      <ContentDirectionProvider>
        <Layout>
          <AddProductForm />
        </Layout>
      </ContentDirectionProvider>
    </LocaleProvider>
  );
};

export default AddProduct;
