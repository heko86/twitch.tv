import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import LaptopIcon from "@mui/icons-material/Laptop";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../../shared/hooks";
import LoginIcon from "@mui/icons-material/Login";

const drawerListItems = [
  {
    listName: "マイページ",
    listIcon: <PersonIcon />,
  },
  {
    listName: "チャンネル設定",
    listIcon: <LaptopIcon />,
  },
  {
    listName: "アイテム",
    listIcon: <CardGiftcardIcon />,
  },
];

export const TemporaryDrawer = () => {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const { logout, isLogged } = useUserDetails();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const handleListItems = (listName) => {
    switch (listName) {
      case "マイページ":
        navigate("/mypage");
        break;
      case "チャンネル設定":
        navigate("/settings");
        break;
      case "アイテム":
        navigate("/items");
        break;
      case "ログアウト":
        logout();
        break;
      case "ログイン":
        navigate("/auth");
        break;
      default:
        break;
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {isLogged ? (
        <>
          <List>
            {drawerListItems.map((listItem) => (
              <ListItem key={listItem.listName} disablePadding>
                <ListItemButton
                  onClick={() => {
                    handleListItems(listItem.listName);
                  }}
                >
                  <ListItemIcon>{listItem.listIcon}</ListItemIcon>
                  <ListItemText primary={listItem.listName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  handleListItems("ログアウト");
                }}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="ログアウト" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : (
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                handleListItems("ログイン");
              }}
            >
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="ログイン" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <FormatAlignRightIcon color="secondary" />
      </Button>
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};
