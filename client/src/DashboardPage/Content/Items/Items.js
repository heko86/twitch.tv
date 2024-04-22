import React, { useState } from "react";
import beerBuncho from "../../../resources/images/items/beer-buncho.png";
import bunchoKashige from "../../../resources/images/items/buncho-kashige.png";
import mattariBuncho from "../../../resources/images/items/mattari-buncho.png";
import susaBuncho from "../../../resources/images/items/susa-buncho.png";
import toris from "../../../resources/images/items/toris.png";
import workBuncho from "../../../resources/images/items/work-buncho.png";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { usePurchaseItem } from "../../../shared/hooks/usePurchaseItem";
const ItemData = [
  {
    itemName: "文鳥（ビール）",
    image: beerBuncho,
    point: 100,
  },
  {
    itemName: "文鳥（首傾げ）",
    image: bunchoKashige,
    point: 150,
  },
  {
    itemName: "文鳥（まったり）",
    image: mattariBuncho,
    point: 200,
  },
  {
    itemName: "文鳥",
    image: susaBuncho,
    point: 250,
  },
  {
    itemName: "鳥（複数）",
    image: toris,
    point: 300,
  },
  {
    itemName: "文鳥（働く）",
    image: workBuncho,
    point: 350,
  },
];

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
