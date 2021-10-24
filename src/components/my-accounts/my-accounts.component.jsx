import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createAccount, getAccounts } from "../../store/actions/accountActions";

import "./my-accounts.styles.scss";

const MyAccounts = () => {
  const dispatch = useDispatch();

  const accountsData = useSelector((state) => state.account);
  const { accounts, accounts_isLoading, accounts_error } = accountsData;

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const handleAddAccount = () => {
    let data = { name: "TEST HDFC", type: "credit", balance: "20010" };
    dispatch(createAccount(data));
  };

  if(accounts_isLoading) {
    return (
      <div>Loading</div>
    )
  }

  if(accounts_error) {
    console.log({accounts_error});
    return (
      <div>Error</div>
    )
  }

  return (
    <div className="my__accounts__container">
      <button onClick={handleAddAccount}>Add Account</button>
      {accounts.map(({ name, type, balance }, i) => (
          <div key={i} className={`account__container account__type--${type}`}>
            <div className="account__info">
              <div className="account__name">{name}</div>
              <div className="account__type">{type.toLocaleLowerCase()}</div>
            </div>
            <div className="account__details">
              <div className="account__currency">₹</div>
              <div className="account__amount">{balance}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyAccounts;
