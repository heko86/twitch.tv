import React from "react";
import beerBuncho from "../../../resources/images/items/beer-buncho.png";
import bunchoKashige from "../../../resources/images/items/buncho-kashige.png";
import mattariBuncho from "../../../resources/images/items/mattari-buncho.png";
import susaBuncho from "../../../resources/images/items/susa-buncho.png";
import toris from "../../../resources/images/items/toris.png";
import workBuncho from "../../../resources/images/items/work-buncho.png";

const ItemData = [
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
  {
    itemName: "文鳥（働く）",
    image: workBuncho,
    point: 350,
  },
];

const Item = ({ itemName, img, point }) => {
  return (
    <div className="item-container">
      <img src={img} alt="アイテム画像" className="item-size" />
      <div>{itemName}</div>
      <div>{point}&nbsp;pt</div>
    </div>
  );
};

export const Items = () => {
  return (
    <div className="items-container">
      {ItemData.map((item) => (
        <Item
          key={item.itemName}
          itemName={item.itemName}
          img={item.image}
          point={item.point}
        />
      ))}
    </div>
  );
};
