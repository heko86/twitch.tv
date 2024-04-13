import React from "react";

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onInputHandler,
  textArea,
}) => {
  const handleValueChange = (e) => {
    onChangeHandler(e.target.value, field);
  };

  const handleInput = (e) => {
    onInputHandler(e.target.value, field);
  };

  return (
    <>
      <div className="auth-form-label">
        <span>{label}</span>
      </div>
      {textArea ? (
        <textarea
          type={type}
          value={value}
          onChange={handleValueChange}
          onInput={handleInput}
          rows={5}
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleValueChange}
          onInput={handleInput}
        />
      )}

      <span className="auth-form-validation-message">
        {showErrorMessage && validationMessage}
      </span>
    </>
  );
};
