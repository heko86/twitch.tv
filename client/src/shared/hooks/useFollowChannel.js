import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../api";

export const useFollowChannel = () => {
  const followChannel = async (channelId, onSuccess) => {
    const responseData = await followChannelRequest(channelId);
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occured wten trying to follow a channel"
      );
    }

    toast.success("Channel followed successfully");
    onSuccess(true);
  };

  return {
    followChannel,
  };
};
