import PrivateRoute from "../privateRoute";
import { signOut } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const IndexPage = () => {
  const dispatch = useDispatch();

  return (
    <PrivateRoute>
      <button onClick={() => dispatch(signOut())}>sign out</button>
    </PrivateRoute>
  );
};

export default IndexPage;
