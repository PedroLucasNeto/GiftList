import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { createPixData } from "../api/service/paymentService";
// import { IUser } from "../types/User";

type CartItem = {
  itemName: string;
  itemImage: string;
  description: string;
  price: number;
  descriptionLeft: boolean;
  quantity: number;
};

type QRCode = {
  txid: string;
  calendar: unknown;
  total: string;
  qrCodeImage: string;
  pixKey: string;
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
  createPix(): void;
  qrCodeData: QRCode;
  modalPaymentIsOpen: boolean;
  isLoading: boolean;
  togglePaymentModal: () => void;
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
  createPix: () => {},
  qrCodeData: {
    txid: "",
    calendar: {},
    total: "",
    qrCodeImage: "",
    pixKey: "",
  },
  isLoading: false,
  modalPaymentIsOpen: false,
  togglePaymentModal: () => {},
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalPaymentIsOpen, setModalPaymentIsOpen] = useState(false);
  const [qrCodeData, setQrCodeData] = useState<QRCode>({
    txid: "",
    calendar: {},
    total: "",
    qrCodeImage: "",
    pixKey: "",
  });

  function preparePixObject() {
    const totalValue = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    return {
      calendario: {
        expiracao: 600,
      },
      valor: {
        original: totalValue.toFixed(2),
      },
      chave: "6130a628-7c33-45dd-9135-eca7b75fc138",
      solicitacaoPagador: "Presente para nosso casamento! <3",
    };
  }

  async function createPix() {
    try {
      setIsLoading(() => true);
      const pixObject = preparePixObject();
      const { data } = await createPixData(pixObject);
      if (data) {
        clearCart();
        const qrCodeData = { ...data };
        setQrCodeData(() => qrCodeData);
        toggleVisibility();
        setModalPaymentIsOpen(() => true);
      }
    } catch (error: any) {
      toast.error(error.toString());
    } finally {
      setIsLoading(() => false);
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

  const togglePaymentModal = () => {
    const giftsSection = document.getElementById("gifts");
    if (giftsSection) {
      giftsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setModalPaymentIsOpen((prev) => !prev);
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
        createPix,
        qrCodeData,
        modalPaymentIsOpen,
        isLoading,
        togglePaymentModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
