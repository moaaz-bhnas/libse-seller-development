import withLocale from "../../hocs/withLocale";
import AddProductForm from "../../components/addProductForm";
import PrivateRoute from "../../privateRoute";
import Layout from "../../components/layout";

const AddProduct = () => {
  return (
    <PrivateRoute>
      <Layout>
        <AddProductForm />
      </Layout>
    </PrivateRoute>
  );
};

export default withLocale(AddProduct);
