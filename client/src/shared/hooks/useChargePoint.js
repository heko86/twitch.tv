import toast from "react-hot-toast";
import { chargePoint as chargePointRequest } from "../../api";

export const useChargePoint = () => {
  const chargePoint = async (point) => {
    const responseData = await chargePointRequest(point);
    if (responseData.error) {
      return toast.error("Error occurred while trying to charge point.");
    }

    toast.success("ポイントがチャージされました");
  };

  return {
    chargePoint,
  };
};
