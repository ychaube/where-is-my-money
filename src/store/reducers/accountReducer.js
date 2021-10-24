import {
  GET_ACCOUNTS_DATA,
  GET_ACCOUNTS_IS_LOADING,
  GET_ACCOUNTS_ERROR,
} from "../constants/account.constants";

const initState = {
  accounts: [],
  accounts_isLoading: false,
  accounts_error: null,
};

const accountReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "ADD_ACCOUNT":
      const { account } = payload;
      return {
        ...state,
        accounts: [account, ...state.accounts],
      };

    case "ADD_ACCOUNT_ERROR":
      const { error } = payload;
      return state;

    case GET_ACCOUNTS_DATA:
      const { accounts } = payload;
      return {
        ...state,
        accounts,
        accounts_isLoading: false,
        accounts_error: null,
      };
    case GET_ACCOUNTS_IS_LOADING:
      return {
        ...state,
        accounts_isLoading: true,
        accounts_error: null,
      };

    case GET_ACCOUNTS_ERROR:
      const { error: accounts_error } = payload;
      return {
        ...state,
        accounts_isLoading: false,
        accounts_error,
      };

    default:
      return state;
  }
};

export default accountReducer;

// dispatch({ type: GET_ACCOUNTS_IS_LOADING });
// dispatch({ type: GET_ACCOUNTS_DATA, payload: ACCOUNTS_DUMMY });
// dispatch({ type: GET_ACCOUNTS_ERROR, payload: error });
// dispatch({
//   type: GET_ACCOUNTS_DATA,
//   payload: { accounts: ACCOUNTS_DUMMY },
// });
// } catch (error) {
// dispatch({ type: GET_ACCOUNTS_ERROR, payload: { error } });
