import { useCart } from "../context/CartContext";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Cart = () => {
  const {
    isOpen,
    toggleVisibility,
    cartItems,
    addQuantityToItem,
    removeQuantityFromItem,
  } = useCart();

  const fields = ["Nome", "Imagem", "Quantidade", "Preço"];

  return (
    <div
      id="cart-modal"
      className={` ${
        isOpen ? "flex flex-col items-center" : "hidden"
      } fixed inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center px-4 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {/* CART CONTAINER */}
        <div className="w-full h-full my-4 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all  sm:min-w-lg sm:w-full lg:w-[600px]">
          <div className="bg-gray-50 px-4 py-3 sm:px-6">
            {/* CART HEADER */}
            <header className="flex justify-between">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Carrinho
              </h3>
              <p className="text-sm text-gray-600">{cartItems.length} Itens</p>
              <button
                onClick={toggleVisibility}
                className="text-darkblue hover:text-gray-600 focus:outline-none"
              >
                <span>Fechar</span>
              </button>
            </header>
          </div>
          <div className="overflow-y-scroll overflow-x-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  {/* TABLE HEAD */}
                  {cartItems.length > 0 &&
                    fields.map((field, index) => {
                      return (
                        <th
                          key={index}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {field}
                        </th>
                      );
                    })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 max-w-full">
                {/* CART PRODUCTS */}
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.itemName}
                        </td>
                        <td className="py-4">
                          <img
                            src={item.itemImage}
                            alt={item.itemName}
                            className="rounded-full h-10 w-10 sm:h-16 sm:w-16"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <button
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => {
                              removeQuantityFromItem(item.itemName);
                            }}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            onClick={() => {
                              addQuantityToItem(item.itemName);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          R$ {item.price.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td className="h-64 text-center flex flex-col gap-4 py-2 items-center align-center justify-center">
                      {/* CART EMPTY */}
                      Seu carrinho está vazio.
                      <button
                        className="bg-darkbrown text-white p-2 rounded-md hover:bg-darknude hover:text-darkbrown"
                        onClick={() => toggleVisibility()}
                      >
                        Adicionar Itens
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* TOTAL */}
          {cartItems.length > 0 && (
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-sm text-gray-900">
                  R$
                  {cartItems
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </p>
                <button className="bg-darkbrown text-white p-2 rounded-md hover:bg-darknude hover:text-darkbrown">
                  Finalizar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
