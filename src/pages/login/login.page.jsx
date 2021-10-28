import React from "react";

import Card from "../../components/card/card.component";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import "./login.styles.scss";

const LoginPage = () => {
  return (
    <div className="login__container">
      <div className="content">
        <div className="details__container">
          <div className="details__title">Where's My M&#129297;ney?</div>
          <div className="details__subtitle">
            We help you to manage your money. Effectively!
          </div>
        </div>
        <Card>
          <div className="form__container">
            <Input label="Email" type="text" />
            <Input label="Password" type="password" />
            <Button label="Log In"/>
            <Button label="Forgotten password?" type="link"/>
            <div className="divider"></div>
            <Button label="Create New Account" type="secondary"/>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
