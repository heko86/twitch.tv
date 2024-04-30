import toast from "react-hot-toast";
import { postGiftItem as postGiftItemRequest } from "../../api";

export const usePostGiftItem = () => {
  const postGiftItem = async (itemId) => {
    const responseData = await postGiftItemRequest(itemId);
    if (responseData.error) {
      return toast.error("Error occurred while trying to gift item.");
    }

    toast.success("アイテムを贈りました");
  };

  return {
    postGiftItem,
  };
};
