// import { useState } from 'react';

import { useCart } from "../../../../context/CartContext";

interface GiftCardProps {
  itemName: string;
  itemImage: string;
  description: string;
  descriptionLeft: boolean;
  price: number;
}

const GiftCard = ({
  itemName,
  itemImage,
  descriptionLeft,
  description,
  price,
}: GiftCardProps) => {
  const { addItemToCart } = useCart();
  function handleAddItemToCart() {
    addItemToCart({
      itemName,
      itemImage,
      description,
      price,
      descriptionLeft,
      quantity: 1,
    });
  }

  return (
    <div className="space-y-4 bg-white min-w-[300px] w-320 sm:w-full md:w-[600px] max-h-64 p-4 sm:p-8 rounded-md ">
      <div
        className={`flex w-full gap-2 sm-flex-col justify-between ${
          descriptionLeft ? "" : "flex-row-reverse"
        }`}
      >
        <button
          className="bg-black text-white hover:bg-gray-700 h-fit text-[9px] sm:text-sm p-2 sm:px-8 rounded-md self-end"
          onClick={handleAddItemToCart}
        >
          Presentear
        </button>
        <div
          className={`flex gap-2 sm:gap-8 ${
            descriptionLeft ? "" : "flex-row-reverse"
          }`}
        >
          <div className="flex flex-col justify-between">
            {/* <h3>{itemName}</h3> */}
            <p>{description}</p>
            <p>R${price.toFixed(2)}</p>
          </div>
          <img
            src={itemImage}
            alt={itemName}
            className="w-20 h-20 sm:w-48 sm:h-48 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
