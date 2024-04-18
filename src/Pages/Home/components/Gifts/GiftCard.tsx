import { useState } from "react";

interface GiftCardProps {
  itemName: string;
  itemImage: string;
  descriptionLeft: boolean;
}

const GiftCard = ({ itemName, itemImage, descriptionLeft }: GiftCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex-column space-y-4 bg-white w-96 h-64 p-2 rounded-sm">
      <h4>{itemName}</h4>
      <div
        className={`flex gap-2 ${descriptionLeft ? "flex-row-reverse" : ""}`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam animi
          neque tempore nostrum id iusto quos qui. Dignissimos aliquid adipisci,
          modi eligendi blanditiis fugit, autem recusandae harum, esse unde
          atque?
        </p>
        <img src={itemImage} alt={itemName} className="w-32  rounded-full" />
      </div>
      <div className="flex">
        <button
          className="text-center text-gray-900 rounded-md px-2 py-1"
          onClick={handleRemove}
        >
          -
        </button>
        <span className="mt-1">{quantity}</span>
        <button
          className="text-center text-gray-900 rounded-md px-2 py-1"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
