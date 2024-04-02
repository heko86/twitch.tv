import { useState } from "react";
import { login as loginRequest } from "../../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await loginRequest({
      email,
      password,
    });
    setIsLoading(false);
    if (response.error) {
      console.log("🚀 ~ login ~ response.error:", response);

      return toast.error(
        response?.exception?.response.data ||
          "error occured while loggin in. Please try again"
      );
    }

    const { userDetails } = response.data;

    localStorage.setItem("user", userDetails);

    navigate("/");
  };

  return {
    login,
    isLoading,
  };
};
