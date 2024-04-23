import { itemsData } from "../../resources/images/items/items";
export const useImageMapping = ({ itemName }) => {
  return itemsData.filter((item) => item.itemName === itemName);
};
