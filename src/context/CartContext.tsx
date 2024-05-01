import { createContext, useState, useContext, ReactNode } from "react";

type CartItem = {
  itemName: "Item 1";
  itemImage: "https://picsum.photos/id/15/2500/1667";
  description: "lorem ipsum test";
  price: 100;
  descriptionLeft: false;
};

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (itemName: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
});

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItemToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemName: string) => {
    setCartItems(cartItems.filter((item) => item.itemName !== itemName));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
