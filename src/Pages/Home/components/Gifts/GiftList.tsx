import GiftCard from "./GiftCard";

const GiftList = () => {
  const items = [
    {
      itemName: "Item 1",
      itemImage: "https://via.placeholder.com/150",
      descriptionLeft: false,
    },
    {
      itemName: "Item 2",
      itemImage: "https://via.placeholder.com/150",
      descriptionLeft: true,
    },
    {
      itemName: "Item 3",
      itemImage: "https://via.placeholder.com/150",
      descriptionLeft: false,
    },
  ];
  // Lógica para a lista de presentes aqui
  return (
    <div className="bg-gray-500 px-4 py-8 space-y-4 flex-column">
      <h2 className="text-5xl font-hurricane font-semibold mb-4 text-gray-100">
        Lista de Presentes
      </h2>
      <div className="space-y-4 justify-center">
        {items.map((item, index) => (
          <GiftCard
            key={index}
            itemName={item.itemName}
            itemImage={item.itemImage}
            descriptionLeft={item.descriptionLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default GiftList;
