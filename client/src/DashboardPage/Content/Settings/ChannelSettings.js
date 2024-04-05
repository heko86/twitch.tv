import React, { useState } from "react";
import {
  avatarUrlValidationMessage,
  descriptionValidationMessage,
  titleValidationMessage,
  usernameValidationMessage,
  validateAvatarUrl,
  validateDescription,
  validateTitle,
  validateUsername,
} from "../../../shared/validators";
import { Input } from "../../../shared/component/Input";

const inputs = [
  {
    field: "username",
    label: "Username",
    validationMessage: usernameValidationMessage,
    type: "text",
  },
  {
    field: "title",
    label: "Title",
    validationMessage: titleValidationMessage,
    type: "text",
  },
  {
    field: "avatarUrl",
    label: "avatarUrl",
    validationMessage: avatarUrlValidationMessage,
    type: "text",
  },
  {
    field: "description",
    label: "Description",
    validationMessage: descriptionValidationMessage,
    type: "text",
    textArea: true,
  },
];

export const ChannelSettings = ({ settings }) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: false,
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: false,
      showError: false,
      value: settings.username,
    },
    description: {
      isValid: false,
      showError: false,
      value: settings.description,
    },
    avatarUrl: {
      isValid: false,
      showError: false,
      value: settings.avatarUrl,
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

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "username":
        isValid = validateUsername(value);
        break;
      case "title":
        isValid = validateTitle(value);
        break;
      case "avatarUrl":
        isValid = validateAvatarUrl(value);
        break;
      case "description":
        isValid = validateDescription(value);
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //save setting using http request
  };

  const isSubmitButtonDisabled =
    !formState.username.isValid ||
    !formState.title.isValid ||
    !formState.description.isValid ||
    !formState.avatarUrl.isValid;

  return (
    <form className="settings-form">
      {inputs.map((input) => (
        <Input
          key={input.field}
          field={input.field}
          label={input.label}
          value={formState[input.field].value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState[input.field].showError}
          validationMessage={input.validationMessage}
          type={input.type}
          textArea={input.textArea}
        />
      ))}
      <button onClick={handleSubmitForm} disabled={isSubmitButtonDisabled}>
        Save Change
      </button>
    </form>
  );
};
