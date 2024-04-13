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
    label: "AvatarUrl",
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

export const ChannelSettings = ({ settings, saveSettings }) => {
  const [formState, setFormState] = useState({
    title: {
      isValid: validateTitle(settings.title),
      showError: false,
      value: settings.title,
    },
    username: {
      isValid: validateUsername(settings.username),
      showError: false,
      value: settings.username,
    },
    description: {
      isValid: validateDescription(settings.description),
      showError: false,
      value: settings.description,
    },
    avatarUrl: {
      isValid: validateAvatarUrl(settings.avatarUrl),
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

  const handleInputValidation = (value, field) => {
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

    saveSettings({
      username: formState.username.value,
      title: formState.title.value,
      description: formState.description.value,
      avatarUrl: formState.avatarUrl.value,
    });
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
          onInputHandler={handleInputValidation}
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
