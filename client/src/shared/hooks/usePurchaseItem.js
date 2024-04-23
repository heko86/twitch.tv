import toast from "react-hot-toast";
import { purchaseItem as purchaseItemRequest } from "../../api";

export const usePurchaseItem = () => {
  const purchaseItem = async (point, itemName) => {
    const responseData = await purchaseItemRequest(point, itemName);
    if (responseData.error) {
      return toast.error("Error occurred while trying to charge point.");
    }

    toast.success("アイテムを購入しました");
  };

  return {
    purchaseItem,
  };
};
