import React, { useEffect, useState } from "react";
import { useGetPoints } from "../../../shared/hooks/usegetPoints";
import {
  CircularProgress,
  Fab,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import {
  useGetHeldItems,
  useGetItems,
  usePostChargePoint,
} from "../../../shared/hooks";
import AddIcon from "@mui/icons-material/Add";
import { CheckDialog } from "../Items/CheckDialog";

const HeldItems = (itemsData) => {
  const { getItems } = useGetItems();
  const items = getItems(itemsData);

  return (
    <>
      {items
        ? items.map((item, index) => (
            <div key={index} className="item-container">
              <img src={item.image} alt="アイテム画像" className="item-size" />
              <div>{item.itemName}</div>
              <div>{item.point}&nbsp;pt</div>
            </div>
          ))
        : null}
    </>
  );
};

const ConfirmDialog = ({ dialogOpen = false, handleDialogClose }) => {
  const [pointValue, setPointValue] = useState("");
  const { postChargePoint } = usePostChargePoint();

  const handleChange = (e) => {
    setPointValue(e.target.value);
  };

  const handleClose = () => {
    handleDialogClose(false);
    setPointValue("");
  };

  const handleCharge = () => {
    postChargePoint(pointValue);
    handleDialogClose(false);
  };

  return (
    <>
      <CheckDialog
        dialogTitle="ポイントチャージ"
        openDialog={dialogOpen}
        handleClose={handleClose}
        confirmText="チャージ"
        handleOnClick={handleCharge}
        color="secondary"
      >
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel color="secondary" htmlFor="standard-adornment-amount">
            ポイント
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            endAdornment={<InputAdornment position="start">pt</InputAdornment>}
            color="secondary"
            type="number"
            onChange={handleChange}
            value={pointValue}
          />
        </FormControl>
      </CheckDialog>
    </>
  );
};

export const MyPage = () => {
  const [point, setPoint] = useState(null);
  const [items, setItems] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { getPoints } = useGetPoints();
  const { getHeldItems } = useGetHeldItems();

  useEffect(() => {
    const fetchPossessionInfo = async () => {
      try {
        const point = await getPoints();
        const items = await getHeldItems();
        setPoint(point);
        setItems(items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPossessionInfo();
  }, []);

  return (
    <>
      <div>
        <div className="point-container">
          <span>保有ポイント</span>
          <div className="held-point">
            <span className="point-text">
              {point === null ? (
                <CircularProgress color="secondary" />
              ) : point ? (
                `${point}pt`
              ) : (
                "0pt"
              )}
            </span>
            <Fab
              color="secondary"
              aria-label="add"
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
        <div className="heldItems-container">
          <span>保有アイテム</span>
          <div className="heldItem-container">
            <HeldItems itemsData={items} />
          </div>
        </div>
      </div>
      <ConfirmDialog
        dialogOpen={dialogOpen}
        handleDialogClose={setDialogOpen}
      />
    </>
  );
};
