import React, { useState } from "react";

import "./authentication.styles.scss";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnChange = (e) => {
    const {
      target: { id, value },
    } = e;

    switch (id) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "firstName":
        setFirstName(value);
        break;

      case "lastName":
        setLastName(value);
        break;

      default:
        break;
    }
    console.log("handleOnChange", e.target.id, e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, firstName, lastName });
  };

  return (
    <div className="auth__container container">
      <form onSubmit={handleOnSubmit} className="auth__section--form">
        <h2>Sign in</h2>
        <div className="input__field">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={handleOnChange} />
        </div>
        <div className="input__field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleOnChange} />
        </div>
        <div className="input__field">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" onChange={handleOnChange} />
        </div>
        <div className="input__field">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" onChange={handleOnChange} />
        </div>
        <div className="input__field">
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
