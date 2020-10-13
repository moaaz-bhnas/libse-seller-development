import { memo } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  reduxFirestore,
  createFirestoreInstance,
  getFirestore,
} from "redux-firestore";
import firebase from "../lib/firebase/client";
import { createWrapper } from "next-redux-wrapper";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);

const rrfConfig = {
  useFirestoreForProfile: true,
  userProfile: "users",
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const ReactReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {children}
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

// makeStore function that returns a new store for every request
const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });

export default memo(ReactReduxProvider);
