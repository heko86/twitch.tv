import { ItemData } from "../../resources/images/items/items";
export const useGetItems = () => {
  const getItems = (itemName) => {
    if (itemName && itemName.items) {
      return itemName.items.map((heldItem) => {
        return ItemData.find((item) => {
          return item.itemName === heldItem;
        });
      });
    }
    return [];
  };
  return { getItems };
};
