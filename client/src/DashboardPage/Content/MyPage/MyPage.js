import React, { useEffect, useState } from "react";
import { useGetPoints } from "../../../shared/hooks/usegetPoints";
import { CircularProgress } from "@mui/material";

export const MyPage = () => {
  const [point, setPoint] = useState(null);
  const { getPoints } = useGetPoints();

  useEffect(() => {
    const fetchPoint = async () => {
      try {
        const point = await getPoints();
        setPoint(point);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPoint();
  }, [getPoints]);

  return (
    <>
      <div>
        <div className="mypage-container">
          <span>保有ポイント</span>
          <span className="point-text">
            {point === null ? (
              <CircularProgress color="secondary" />
            ) : (
              `${point}pt`
            )}
          </span>
        </div>
      </div>
    </>
  );
};
