import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { createCheckout } from "../api/service/paymentService";
import { IUser } from "../types/User";

type CartItem = {
  itemName: string;
  itemImage: string;
  description: string;
  price: number;
  descriptionLeft: boolean;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemName: string) => void;
  addQuantityToItem: (itemName: string) => void;
  removeQuantityFromItem: (itemName: string) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleVisibility: () => void;
  checkout(): void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
  isOpen: false,
  toggleVisibility: () => {},
  addQuantityToItem: () => {},
  removeQuantityFromItem: () => {},
  checkout: () => {},
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // async function checkout() {
  //   const items = cartItems.map((item) => ({
  //     reference_id: item.itemName,
  //     name: item.itemName,
  //     quantity: item.quantity,
  //     description: item.description,
  //     unit_amount: item.price,
  //     image_url: item.itemImage,
  //   }));

  //   try {
  //     const checkoutObject = {
  //       payment_methods: { type: "PIX" },
  //       items,
  //       reference_id: "testeIdUnico",
  //       customer_modifiable: true,
  //       additional_amount: 0,
  //       redirect_url: "https://erickekarina.netlify.app/",
  //       discount_amount: 0,
  //     };
  //     const response = await createCheckout(checkoutObject);
  //     console.log(response);
  //   } catch (error) {
  //     toast.error("Erro ao criar checkout. Motivo: " + error);
  //   }
  // }
  function prepareCheckoutObject() {
    const user: IUser = {
      name: "Pedro Lucas dos Santos Neto",
      cpf: "12039948422",
    };
    const totalValue = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return {
      calendario: {
        expiracao: 3600,
      },
      devedor: {
        cpf: user.cpf,
        nome: user.name.replace(/D/g, ""),
      },
      valor: {
        original: totalValue.toFixed(2),
      },
      chave: "6130a628-7c33-45dd-9135-eca7b75fc138",
      solicitacaoPagador: "Presente para nosso casamento! <3",
    };
  }
  async function checkout() {
    try {
      const checkoutObject = prepareCheckoutObject();
      const response = await createCheckout(checkoutObject);
      if (response) {
        toast.success("Seu código foi gerado com sucesso!");
        console.log(response);
      }
    } catch (error: any) {
      toast.error(error.toString());
    }
  }

  const removeQuantityFromItem = (itemName: string) => {
    const newCartItems = cartItems.map((item) => {
      if (item.itemName === itemName) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCartItems(newCartItems.filter((item) => item.quantity > 0));
  };

  const addQuantityToItem = (itemName: string) => {
    const newCartItems = cartItems.map((item) => {
      if (item.itemName === itemName) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    setCartItems(newCartItems.filter((item) => item.quantity > 0));
  };

  const addItemToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.itemName === item.itemName
    );

    if (existingItem) {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.itemName === item.itemName) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }
        return cartItem;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, item]);
    }
    toast.success("Item adicionado ao carrinho");
  };

  const removeItemFromCart = (itemName: string) => {
    setCartItems(cartItems.filter((item) => item.itemName !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const toggleVisibility = () => {
    const giftsSection = document.getElementById("gifts");
    if (giftsSection) {
      giftsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isOpen,
        toggleVisibility,
        addQuantityToItem,
        removeQuantityFromItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
