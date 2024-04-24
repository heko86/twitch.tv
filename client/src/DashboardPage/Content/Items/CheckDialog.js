import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";

const style = {
  display: "flex",
  alignItems: "center",
};

export const CheckDialog = ({
  dialogTitle,
  openDialog,
  handleClose,
  confirmText,
  handleOnClick,
  children,
}) => {
  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent css={style}>
          <DialogContentText sx={style} id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            キャンセル
          </Button>
          <Button color="secondary" onClick={handleOnClick}>
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
