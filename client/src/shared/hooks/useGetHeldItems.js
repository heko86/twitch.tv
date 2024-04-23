import toast from "react-hot-toast";
import { getHeldItems as getHeldItemsRequest } from "../../api";

export const useGetHeldItems = () => {
  const getHeldItems = async () => {
    const responseData = await getHeldItemsRequest();
    if (responseData.error) {
      return toast.error("Error occurred while trying to get items.");
    }
    return responseData.data.userHeldItems;
  };

  return {
    getHeldItems,
  };
};
