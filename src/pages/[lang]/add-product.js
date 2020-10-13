import AddProductForm from "../../components/addProductForm";
import Layout from "../../components/layout";

export async function getStaticProps(context) {
  const locale = getLocaleInServer(context);
  await checkAuthInServer(locale, context);
}

const AddProduct = () => {
  return (
    <Layout>
      <AddProductForm />
    </Layout>
  );
};

export default AddProduct;
