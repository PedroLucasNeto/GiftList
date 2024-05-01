// import { useState } from 'react';

interface GiftCardProps {
  itemName: string;
  itemImage: string;
  description: string;
  descriptionLeft: boolean;
  price: number;
  addItemToCart: () => void;
}

const GiftCard = ({
  itemName,
  itemImage,
  descriptionLeft,
  description,
  price,
  addItemToCart,
}: GiftCardProps) => {
  // const [quantity, setQuantity] = useState(0);

  // const handleAdd = () => {
  //   setQuantity((prevQuantity) => prevQuantity + 1);
  // };

  // const handleRemove = () => {
  //   if (quantity > 0) {
  //     setQuantity((prevQuantity) => prevQuantity - 1);
  //   }
  // };

  return (
    <div className="space-y-4 bg-white min-w-[300px] w-320 sm:w-full md:w-[600px] max-h-64 p-4 sm:p-8 rounded-md ">
      <div
        className={`flex w-full gap-2 sm-flex-col justify-between ${
          descriptionLeft ? "" : "flex-row-reverse"
        }`}
      >
        <button
          className="bg-black text-white hover:bg-gray-700 h-fit text-[9px] sm:text-sm p-2 sm:px-8 rounded-md self-end"
          onClick={addItemToCart}
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

      {/*<div className='flex'>
        <button
          className='text-center text-gray-900 rounded-md px-2 py-1'
          onClick={handleRemove}
        >
          -
        </button>
        <span className='mt-1'>{quantity}</span>
        <button
          className='text-center text-gray-900 rounded-md px-2 py-1'
          onClick={handleAdd}
        >
          +
        </button>
      </div>
  */}
    </div>
  );
};

export default GiftCard;
