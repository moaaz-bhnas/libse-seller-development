import withLocale from "../../hocs/withLocale";
import PrivateRoute from "../../privateRoute";

const SponsoredProductsPage = () => {
  return <PrivateRoute>Sponsored page</PrivateRoute>;
};

export default withLocale(SponsoredProductsPage);
