import React, { useState } from "react";
import "../../App.css";
import "../../styles/login/Login.style.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Missing email address and/or password");
    }
  };

  const switchForm = formType => {
    setFormLoad(formType);
  }

  return (
    <div className="login-page btn-primary">
      <div className="jumbotron">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            switchForm={switchForm}
            email={email}
            password={password}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            switchForm={switchForm}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
