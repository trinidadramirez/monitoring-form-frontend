import React from "react";
import "../../App.css";
import "../../styles/Login.style.css"
import { LoginForm } from "../../components/login/Login.comp"

export const Login = () => {
  return (
    <div className="login-page btn-primary">
      <div className="jumbotron">
        <LoginForm />
      </div>
    </div>
  );
};
