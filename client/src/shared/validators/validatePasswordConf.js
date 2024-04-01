export const validatePasswordConf = (pass, ConfPass) => {
  return pass === ConfPass;
};

export const passwordConfValidationMessage = "Password do not match.";
