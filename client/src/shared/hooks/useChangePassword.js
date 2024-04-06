import { changePassword as changePasswordRequest } from "../../api";
import toast from "react-hot-toast";

export const useChangePassword = () => {
  const changePassword = async (password, newPassword) => {
    const responseData = await changePasswordRequest({
      password,
      newPassword,
    });

    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occurred while trying to change password. Please try again"
      );
    }

    toast.success("Password changed successfully");
  };
  return {
    changePassword,
  };
};
