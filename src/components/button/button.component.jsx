import React from "react";

import './button.styles.scss'

const Button = ({ label, type = "primary", disabled = false }) => {
  let baseClasses = "button__container";

  const getButtonVariantClass = () => {
    switch (type) {
      case "primary":
        return "button--primary";
      
        case "secondary":
          return "button--secondary";
        
          case "link":
            return "button--link";
    
      default:
        return "";
    }
  }

  const getButtonStateClass = () => {
    return disabled ? "button--disabled" : "";
  }

  return (
    <div className="button__container">
      <button className={`button ${getButtonVariantClass()} ${getButtonStateClass()}`}>{label}</button>
    </div>
  );
};

export default Button;
