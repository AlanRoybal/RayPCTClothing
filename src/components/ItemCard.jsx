import React from "react";

const ItemCard = ({ item }) => {
  const { image, title, price } = item;

  return (
    <div className="hover:bg-black hover:text-white transition-colors pb-2 cursor-pointer">
      <div className="bg-[#f7f7f7]">
        <img src={image} alt={title} className="object-cover" />
      </div>
      <div className="text-center pt-4 font-inter text-xs">
        <h3 className="pb-1">{title}</h3>
        <p className="">${price.toFixed(2)} USD</p>
      </div>
    </div>
  );
};

export default ItemCard;
