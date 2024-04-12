import toast from "react-hot-toast";
import { followChannel as followChannelRequest } from "../../api";

export const useFollowChannel = () => {
  const followChannel = async (channelId, onSuccess, searchFlag) => {
    const responseData = await followChannelRequest(channelId, searchFlag);
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occured wten trying to follow a channel"
      );
    }
    onSuccess(true);
    return responseData.data;
  };

  return {
    followChannel,
  };
};
