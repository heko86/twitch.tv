import { ItemData } from "../../resources/images/items/items";
export const useGetItems = () => {
  const getItems = (items) => {
    if (items) {
      return items.items.map((heldItem) => {
        const itemData = ItemData.find(
          (item) => item.itemName === heldItem.itemName
        );
        return {
          itemId: heldItem.itemId,
          itemName: itemData.itemName,
          image: itemData.image,
          point: itemData.point,
        };
      });
    }
    return null;
  };
  return { getItems };
};
