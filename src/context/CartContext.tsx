import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";

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
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
