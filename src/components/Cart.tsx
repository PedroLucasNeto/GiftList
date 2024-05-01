import { useState } from "react";

export const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [1, 2, 3, 4, 5];
  const fields = [
    {
      name: "Detalhes",
      price: "Preço",
      quantity: "Quantidade",
      total: "Total",
    },
  ];
  return (
    <div id="cart-modal" className="w-full h-full">
      <header className="flex justify-between">
        <h3>Carrinho</h3>
        <p>{items.length} Itens</p>
      </header>
      <table className="table-auto">
        <thead>
          <tr>
            {fields.map((field, index) => {
              return <th key={index}>{field.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>Produto {item}</td>
                <td>R$ 100,00</td>
                <td>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </td>
                <td>R$ 100,00</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
