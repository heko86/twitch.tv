import React, { useState } from "react";
import { usePurchaseItem } from "../../../shared/hooks/usePurchaseItem";
import { ItemData } from "../../../resources/images/items/items";
import { CheckDialog } from "./CheckDialog";

const ConfirmDialog = ({
  itemName,
  img,
  point,
  openDialog = false,
  switchDialog,
}) => {
  const { purchaseItem } = usePurchaseItem();
  const handleClose = () => switchDialog(false);
  const handlePurchaseItem = (point, itemName) => {
    purchaseItem(point, itemName);
    switchDialog(false);
  };
  return (
    <>
      <CheckDialog
        dialogTitle="購入確認"
        openDialog={openDialog}
        handleClose={handleClose}
        confirmText="購入"
        handleOnClick={() => {
          handlePurchaseItem(point, itemName);
        }}
      >
        <img src={img} alt="アイテム画像" className="item-size" />
        {`【${itemName}(${point}pt)】を購入します。よろしいですか？`}
      </CheckDialog>
    </>
  );
};

const Item = ({ itemName, img, point }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="item-container" onClick={handleOpen}>
        <img src={img} alt="アイテム画像" className="item-size" />
        <div>{itemName}</div>
        <div>{point}&nbsp;pt</div>
      </div>
      <ConfirmDialog
        openDialog={modalOpen}
        itemName={itemName}
        point={point}
        img={img}
        switchDialog={setModalOpen}
      />
    </>
  );
};

export const Items = () => {
  return (
    <div className="items-container">
      {ItemData.map((item) => (
        <div key={item.itemName}>
          <Item itemName={item.itemName} img={item.image} point={item.point} />
        </div>
      ))}
    </div>
  );
};
