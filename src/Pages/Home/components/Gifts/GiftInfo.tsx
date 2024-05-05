import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useCart } from "../../../../context/CartContext";

export const GiftInfo = () => {
  const cartContext = useCart();
  return (
    <div className="mb-8 text-center">
      <h1 className="font-hurricane mb-0 text-5 text-darkblue font-normal">
        Lista de Presentes
      </h1>
      <div className="text-left self-center text-lg  mb-16 ">
        <p>
          Familia e Amigos, sintam-se a vontade caso queiram nos presentear!
        </p>
      </div>
      <div className="relative w-full">
        <button
          onClick={cartContext.toggleVisibility}
          className="rounded-md bg-darkbrown absolute right-0 bottom-0 p-2 text-white 
    hover:bg-darknude hover:text-darkbrown flex flex-row items-center gap-2"
        >
          <ShoppingBagIcon className="w-5" /> <span>Carrinho</span>
        </button>
      </div>
    </div>
  );
};
