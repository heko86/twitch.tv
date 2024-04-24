import toast from "react-hot-toast";
import { postChargePoint as postChargePointRequest } from "../../api";

export const usePostChargePoint = () => {
  const postChargePoint = async (point) => {
    const responseData = await postChargePointRequest(point);
    if (responseData.error) {
      return toast.error("Error occurred while trying to charge point.");
    }

    toast.success("ポイントをチャージしました");
    window.location.reload();
  };

  return {
    postChargePoint,
  };
};
