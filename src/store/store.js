import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { getFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";

// // const middleware = [thunk];

// // const store = createStore(rootReducer, applyMiddleware(...middleware));

// // export default store;

// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from "redux-thunk";

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
// );

// export default store;

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
