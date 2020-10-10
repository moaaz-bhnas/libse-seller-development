import withLocale from "../../hocs/withLocale";
import AddProductForm from "../../components/addProductForm";
import PrivateRoute from "../../privateRoute";

const AddProduct = () => {
  return (
    <PrivateRoute>
      <AddProductForm />
    </PrivateRoute>
  );
};

export default withLocale(AddProduct);
