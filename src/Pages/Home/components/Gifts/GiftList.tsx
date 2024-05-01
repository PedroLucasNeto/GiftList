import { useCart } from "../../../../context/CartContext";
import GiftCard from "./GiftCard";
import { GiftInfo } from "./GiftInfo";

const GiftList = () => {
  const { addItemToCart } = useCart();

  const items = [
    {
      itemName: "Item 1",
      itemImage: "https://picsum.photos/id/15/2500/1667",
      description: "lorem ipsum test",
      price: 100,
      descriptionLeft: false,
    },
    {
      itemName: "Item 2",
      itemImage: "https://picsum.photos/id/16/2500/1667",
      description: "lorem ipsum test",
      price: 100,
      descriptionLeft: true,
    },
    {
      itemName: "Item 3",
      itemImage: "https://picsum.photos/id/18/2500/1667",
      description: "lorem ipsum test",
      price: 100,
      descriptionLeft: false,
    },
  ];

  return (
    <section
      id="gifts"
      className="flex flex-col align-center items-center bg-lightnude px-4 py-8"
    >
      <GiftInfo />
      <div className="space-y-4 flex flex-col justify-center align-center items-center">
        {items.map((item, index) => (
          <GiftCard
            addItemToCart={() => addItemToCart}
            key={index}
            itemName={item.itemName}
            itemImage={item.itemImage}
            description={item.description}
            descriptionLeft={item.descriptionLeft}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default GiftList;
