import { memo } from "react";
import AddProductForm from "../../components/addProductForm";
import PrivateRoute from "../../privateRoute";

const AddProduct = () => {
  return (
    <PrivateRoute>
      <AddProductForm />
    </PrivateRoute>
  );
};

export default memo(AddProduct);
