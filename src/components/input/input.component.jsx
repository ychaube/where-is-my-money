import React from "react";

import './input.styles.scss'

const Input = ({ label, type }) => {
  return (
    <div className="input__container">
      <input className="input__field" type={type} name={label} id={label} placeholder={label} />
    </div>
  );
};

export default Input;
