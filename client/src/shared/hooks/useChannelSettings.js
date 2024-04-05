import { useState } from "react";
import { getChannelSettings } from "../../api";
import toast from "react-hot-toast";

export const useChannelSettings = () => {
  const [channelSettings, setChannelSettings] = useState(null);

  const fetchChannelSettings = async () => {
    const response = await getChannelSettings();

    if (response.error) {
      return toast.error(
        response.exception?.response?.data ||
          "Error occured wten fetching channel settings"
      );
    }

    setChannelSettings({
      username: response.data.username,
      title: response.data.title,
      desciption: response.data.desciption,
      avatarUrl: response.data.avatarUrl,
      streamKey: response.data.streamKey,
    });
  };
  const saveSettings = async () => {};

  return {
    isFetching: !channelSettings,
    channelSettings,
    saveSettings,
  };
};
