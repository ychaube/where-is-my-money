import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import accountReducer from "./accountReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
});

export default rootReducer;
