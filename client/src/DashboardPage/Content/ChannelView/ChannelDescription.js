import React, { useEffect, useState } from "react";
import {
  useFollowChannel,
  useGetHeldItems,
  useGetItems,
  usePostGiftItem,
  useUserDetails,
} from "../../../shared/hooks";
import { CheckDialog } from "../Items/CheckDialog";
import { Checkbox } from "@mui/material";

const FollowButton = ({ channelId, getChannels }) => {
  const [isFollow, setIsFollow] = useState(null);
  const { followChannel } = useFollowChannel();

  useEffect(() => {
    (async () => {
      const followInfo = await followChannel(channelId, getChannels, true);
      setIsFollow(followInfo.followStatus);
    })();
  }, []);

  const handleFollowChannel = async () => {
    const isFollowFlag = await followChannel(channelId, getChannels, false);
    setIsFollow(isFollowFlag.isFollow);
  };
  return (
    <button onClick={handleFollowChannel} className="channel-follow-button">
      {isFollow === null ? "" : isFollow ? "フォロー中" : "フォローする"}
    </button>
  );
};

const HeldItemsDialog = ({ dialogOpen = false, handleDialogClose }) => {
  const { getItems } = useGetItems();
  const { getHeldItems } = useGetHeldItems();
  const { postGiftItem } = usePostGiftItem();
  const [heldItems, setHeldItems] = useState(null);
  const [checked, setChecked] = useState("");
  const [checkItems, setCheckItems] = useState("");
  const items = getItems(heldItems);

  const handleClose = () => {
    handleDialogClose(false);
  };

  const handleCheck = (itemId, itemName) => {
    setCheckItems(itemId);
    setChecked(itemName);
  };

  const handleClickToGift = () => {
    postGiftItem(checkItems);
    handleClose(false);
    window.location.reload();
  };

  useEffect(() => {
    const fetchPossessionItems = async () => {
      try {
        const items = await getHeldItems();
        setHeldItems(items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPossessionItems();
  }, []);

  return (
    <>
      <CheckDialog
        dialogTitle="保有アイテム一覧"
        openDialog={dialogOpen}
        handleClose={handleClose}
        confirmText="贈る"
        handleOnClick={handleClickToGift}
        color="secondary"
      >
        {items ? (
          items.map((item) => (
            <Checkbox
              checked={checked === item.itemName}
              color="default"
              onChange={() => {
                handleCheck(item.itemId, item.itemName);
              }}
              icon={
                <div key={item.itemId} className="item-container">
                  <img
                    src={item.image}
                    alt="アイテム画像"
                    className="item-size"
                  />
                  <div>{item.itemName}</div>
                  <div>{item.point}&nbsp;pt</div>
                </div>
              }
              checkedIcon={
                <div key={item.itemId} className="checked-item-container">
                  <img
                    src={item.image}
                    alt="アイテム画像"
                    className="item-size"
                  />
                  <div>{item.itemName}</div>
                  <div>{item.point}&nbsp;pt</div>
                </div>
              }
            />
          ))
        ) : (
          <div>保有しているアイテムはありません</div>
        )}
      </CheckDialog>
    </>
  );
};

export const ChannelDescription = ({
  username,
  title,
  description,
  channelId,
  getChannels,
  isFollow,
}) => {
  const { isLogged } = useUserDetails();
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="channel-description-container">
      <span className="channel-description-title">
        <div>
          {username}
          {isLogged && (
            <span>
              <FollowButton
                className="channel-follow-button"
                channelId={channelId}
                getChannels={getChannels}
                isFollow={isFollow}
              />
            </span>
          )}
        </div>
        <button
          className="channel-gift-button"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          応援する
        </button>
      </span>
      <span className="channel-description-subtitle">{title}</span>
      <div className="channel-description-box">
        <span className="channel-description">{description}</span>
      </div>
      <HeldItemsDialog
        dialogOpen={dialogOpen}
        handleDialogClose={setDialogOpen}
      />
    </div>
  );
};
