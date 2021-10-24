import {
  GET_ACCOUNTS_DATA,
  GET_ACCOUNTS_ERROR,
  GET_ACCOUNTS_IS_LOADING,
} from "../constants/account.constants";

import db from "../../config/firebase.config";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const ACCOUNTS_DUMMY = [
  { name: "HDFC", type: "credit", balance: "20010" },
  { name: "UNI", type: "credit", balance: "1010" },
  { name: "SLICE", type: "credit", balance: "10" },
  { name: "HDFC", type: "debit", balance: "91110" },
  { name: "BOB", type: "debit", balance: "322010" },
  { name: "Cash", type: "cash", balance: "2000" },
];

// // import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// // async function getCities(db) {
// //   const citiesCol = collection(db, 'cities');
// //   const citySnapshot = await getDocs(citiesCol);
// //   const cityList = citySnapshot.docs.map(doc => doc.data());
// //   return cityList;
// // }

// export const createAccount = (account) => (dispatch, getState) => {
//   // setDoc(doc(db, "data", "one"), docData);

//   db.collection("test")
//     .add(account)
//     .then((res) => console.log({ res }))
//     .catch((err) => console.log({ err }));

//   // setDoc(doc(db, "accounts", "new"), account)
//   //   .then((res) => console.log({ res }))
//   //   .catch((err) => console.log({ err }));

//   // firestore
//   //   .collection("accounts")
//   //   .add({
//   //     ...account,
//   //     authorId: "test",
//   //     createdAt: new Date(),
//   //   })
//   //   .then((res) => {
//   //     console.log("ADD_ACCOUNT ", { res, account });
//   //     dispatch({ type: "ADD_ACCOUNT", payload: { account } });
//   //   })
//   //   .catch((error) => {
//   //     console.log("ADD_ACCOUNT ", { error, account });
//   //     dispatch({ type: "ADD_ACCOUNT_ERROR", payload: { error } });
//   //   });
// };

export const createAccount = (account) => (dispatch, getState) => {
  console.log("create account");
  // return getFirestore().

  // return getFirebase()
  //   .ref("accounts")
  //   .push(account)
  //   .then((res) => console.log({ res }))
  //   .catch((err) => console.log({ err }));
};

export const getAccounts = () => async (dispatch) => {
  dispatch({ type: GET_ACCOUNTS_IS_LOADING });

  dispatch({
    type: GET_ACCOUNTS_DATA,
    payload: { accounts: ACCOUNTS_DUMMY },
  });

  // getDocs(collection(db, "accounts"))
  //   .then((res) => res.docs.map((doc) => doc.data()))
  //   .then((accounts) => {
  //     dispatch({
  //       type: GET_ACCOUNTS_DATA,
  //       payload: { accounts },
  //     });
  //   })
  //   .catch((error) => {
  //     dispatch({ type: GET_ACCOUNTS_ERROR, payload: { error } });
  //   });
};

// async function getAccountsData(db) {
//   const accountsCol = collection(db, "accounts");
//   const accountsSnapshot = await getDocs(accountsCol);
//   const accounts = accountsSnapshot.docs.map((doc) => doc.data());
//   return accounts;
// }

// try {
//   dispatch({ type: GET_ACCOUNTS_IS_LOADING });

//   const accounts = await getAccountsData(db);
//   console.log({ accounts });

//   dispatch({
//     type: GET_ACCOUNTS_DATA,
//     payload: { accounts: [] },
//   });

//   // dispatch({
//   //   type: GET_ACCOUNTS_DATA,
//   //   payload: { accounts },
//   // });
// } catch (error) {
//   dispatch({ type: GET_ACCOUNTS_ERROR, payload: { error } });
// }
