import { createContext, useContext, useState } from "react";
import { CartItem } from "../screens/Cart/CartScreen";

interface cartProps {
  cartItems: CartItem[];
  addCart: (item: any) => void;
  addCarts: (items: CartItem) => void;
  deletItem: (itemId: string) => void;
}

const CartContext = createContext<cartProps>({} as cartProps);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addCart(Item: any) {
    setCartItems(Item);
  }

  function addCarts(Items: any) {
    console.log(Items);
    setCartItems([...cartItems, Items]);
  }

  function deletItem(id: string) {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  }

  function putquantity(id: string, quantity: number) {
    const atualizarItem = cartItems.filter((item) => item.id == id);
    atualizarItem[0].quantity = quantity.toString();
    setCartItems(atualizarItem);
  }

  return (
    <CartContext.Provider value={{ cartItems, addCart, addCarts, deletItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
