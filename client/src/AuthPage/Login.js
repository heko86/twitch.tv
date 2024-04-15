import React, { useState } from "react";
import { Logo } from "./Logo";
import { useLogin } from "../shared/hooks";
import { Input } from "../shared/component/Input";
import {
  emailValidationMessage,
  passwordValidationMessage,
  validateEmail,
  validatePassword,
} from "../shared/validators";
import { useNavigate } from "react-router-dom";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidation = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(formState.email.value, formState.password.value);
  };

  const handleGuestLogin = () => {
    localStorage.removeItem("user");
    navigate("/channels");
  };

  const isSubmitButtonDisabled =
    (isLoading && !formState.email.isValid) || !formState.password.isValid;

  return (
    <div className="login-container">
      <Logo text={"Log in to Clone"} />
      <form className="auth-form">
        <Input
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onInputHandler={handleInputValidation}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <Input
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onInputHandler={handleInputValidation}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
          ログイン
        </button>
      </form>
      <span onClick={handleGuestLogin} className="auth-form-switch-label">
        ゲストユーザーログイン
      </span>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        新規登録
      </span>
    </div>
  );
};
