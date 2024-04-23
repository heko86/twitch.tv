import { ItemData } from "../../resources/images/items/items";
export const useGetItems = () => {
  const getItems = (itemName) => {
    if (itemName.itemsData && itemName.itemsData.items) {
      return itemName.itemsData.items.map((heldItem) => {
        return ItemData.find((item) => {
          return item.itemName === heldItem;
        });
      });
    }
    return [];
  };
  return { getItems };
};
