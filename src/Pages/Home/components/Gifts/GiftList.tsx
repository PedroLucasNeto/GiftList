import GiftCard from './GiftCard';

const GiftList = () => {
  const items = [
    {
      itemName: 'Item 1',
      itemImage: 'https://via.placeholder.com/150',
      descriptionLeft: false,
    },
    {
      itemName: 'Item 2',
      itemImage: 'https://via.placeholder.com/150',
      descriptionLeft: true,
    },
    {
      itemName: 'Item 3',
      itemImage: 'https://via.placeholder.com/150',
      descriptionLeft: false,
    },
  ];
  // Lógica para a lista de presentes aqui
  return (
    <div className='bg-lightnude px-4 py-8 space-y-4 flex flex-col align-center items-center'>
      <h1 className=' font-hurricane mb-4 text-5 text-darkblue font-normal'>
        Lista de Presentes
      </h1>
      <div className='text-left self-center text-lg'>
        <p>
          Familia e Amigos, sintam-se a vontade caso queiram nos presentear!
          <br />
          Além da lista de presentes vou deixar nossa chave PIX caso alguem
          prefira utilizar.
        </p>
        <p>Erick Henrique</p>
        <p>PIX: 83 99999-4788 </p>
        <p>QR CODE</p>
      </div>
      <div className='space-y-4 flex flex-col justify-center align-center items-center'>
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
