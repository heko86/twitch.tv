import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { usePurchaseItem } from "../../../shared/hooks/usePurchaseItem";
import { ItemData } from "../../../resources/images/items/items";

const style = {
  display: "flex",
  alignItems: "center",
};

const ConfirmDialog = ({
  itemName,
  img,
  point,
  openDialog = false,
  switchDialog,
}) => {
  const { purchaseItem } = usePurchaseItem();
  const handleClose = () => switchDialog(false);
  const handlePurchaseItem = (point) => {
    purchaseItem(point);
    switchDialog(false);
  };
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"購入確認"}</DialogTitle>
        <DialogContent css={style}>
          <DialogContentText sx={style} id="alert-dialog-description">
            <img src={img} alt="アイテム画像" className="item-size" />
            {`【${itemName}(${point}pt)】を購入します。よろしいですか？`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button
            onClick={() => {
              handlePurchaseItem(point);
            }}
          >
            購入
          </Button>
        </DialogActions>
      </Dialog>
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
