import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sellerRegistrationReducer from "./sellerRegistrationReducer";
import productReducer from "./productReducer";
import profileReducer from "./profileReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { HYDRATE } from "next-redux-wrapper";

const combinedReducers = combineReducers({
  // auth: authReducer,
  // sellerRegistration: sellerRegistrationReducer,
  profile: profileReducer,
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
});

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.count) nextState.count = state.count // preserve count value on client side navigation
    return nextState;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
