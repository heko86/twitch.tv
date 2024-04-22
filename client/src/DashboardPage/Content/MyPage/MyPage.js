import React, { useEffect, useState } from "react";
import { useGetPoints } from "../../../shared/hooks/usegetPoints";
import { CircularProgress } from "@mui/material";
import beerBuncho from "../../../resources/images/items/beer-buncho.png";
import bunchoKashige from "../../../resources/images/items/buncho-kashige.png";
import mattariBuncho from "../../../resources/images/items/mattari-buncho.png";
import susaBuncho from "../../../resources/images/items/susa-buncho.png";
import toris from "../../../resources/images/items/toris.png";
const ItemData = [
  {
    itemName: "文鳥（首傾げ）",
    image: bunchoKashige,
    point: 150,
  },
  {
    itemName: "文鳥（まったり）",
    image: mattariBuncho,
    point: 200,
  },
  {
    itemName: "文鳥",
    image: susaBuncho,
    point: 250,
  },
  {
    itemName: "鳥（複数）",
    image: toris,
    point: 300,
  },
];

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

  const HeldItems = () => {
    const itemsData = [
      {
        itemName: "文鳥（ビール）",
        image: beerBuncho,
        point: 100,
      },
      {
        itemName: "文鳥（首傾げ）",
        image: bunchoKashige,
        point: 150,
      },
      {
        itemName: "文鳥（まったり）",
        image: mattariBuncho,
        point: 200,
      },
      {
        itemName: "文鳥",
        image: susaBuncho,
        point: 250,
      },
      {
        itemName: "鳥（複数）",
        image: toris,
        point: 300,
      },
    ];

    return (
      <>
        {itemsData.map((item) => (
          <div key={item.itemName} className="item-container">
            <img src={item.image} alt="アイテム画像" className="item-size" />
            <div>{item.itemName}</div>
            <div>{item.point}&nbsp;pt</div>
          </div>
        ))}
      </>
    );
  };

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
            <HeldItems itemsData={ItemData} />
          </div>
        </div>
      </div>
    </>
  );
};
