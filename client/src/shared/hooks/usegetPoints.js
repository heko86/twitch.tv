import toast from "react-hot-toast";
import { getPoints as getPointsRequest } from "../../api";

export const useGetPoints = () => {
  const getPoints = async () => {
    const responseData = await getPointsRequest();
    if (responseData.error) {
      return toast.error("Error occurred while trying to get point.");
    }
    return responseData.data.userPoints.point;
  };

  return {
    getPoints,
  };
};
