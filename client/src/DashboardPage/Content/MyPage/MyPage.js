import React, { useEffect, useState } from "react";
import { useGetPoints } from "../../../shared/hooks/usegetPoints";
import { CircularProgress } from "@mui/material";
import { useGetHeldItems, useGetItems } from "../../../shared/hooks";

const HeldItems = (itemsData) => {
  const { getItems } = useGetItems();
  const items = getItems(itemsData);

  return (
    <>
      {items
        ? items.map((item, index) => (
            <div key={index} className="item-container">
              <img src={item.image} alt="アイテム画像" className="item-size" />
              <div>{item.itemName}</div>
              <div>{item.point}&nbsp;pt</div>
            </div>
          ))
        : null}
    </>
  );
};

export const MyPage = () => {
  const [point, setPoint] = useState(null);
  const [items, setItems] = useState(null);
  const { getPoints } = useGetPoints();
  const { getHeldItems } = useGetHeldItems();

  useEffect(() => {
    const fetchPossessionInfo = async () => {
      try {
        const point = await getPoints();
        const items = await getHeldItems();
        setPoint(point);
        setItems(items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPossessionInfo();
  }, []);

  return (
    <>
      <div>
        <div className="point-container">
          <span>保有ポイント</span>
          <span className="point-text">
            {point === null ? (
              <CircularProgress color="secondary" />
            ) : point ? (
              `${point}pt`
            ) : (
              "0pt"
            )}
          </span>
        </div>
        <div className="point-container">
          <span>保有アイテム</span>
          <div className="items-container">
            <HeldItems itemsData={items} />
          </div>
        </div>
      </div>
    </>
  );
};
